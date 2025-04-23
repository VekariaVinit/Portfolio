"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { skills } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type CategoryType =
  | "All"
  | "AI"
  | "Data Engineering"
  | "Frontend"
  | "Backend"
  | "Other";

const CATEGORY_COLORS: Record<CategoryType, string> = {
  All: "hsl(var(--chart-1))",
  AI: "hsl(var(--chart-1))",
  "Data Engineering": "hsl(var(--chart-2))",
  Frontend: "hsl(var(--chart-3))",
  Backend: "hsl(var(--chart-4))",
  Other: "hsl(var(--chart-5))",
};

const CATEGORIES: CategoryType[] = [
  "All",
  "AI",
  "Data Engineering",
  "Frontend",
  "Backend",
  "Other",
];

function getCategoryColor(cat: CategoryType) {
  return CATEGORY_COLORS[cat] || CATEGORY_COLORS.All;
}

interface ChartPanelProps {
  data: { name: string; value: number; fill: string }[];
}

function ChartPanel({ data }: ChartPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-black dark:text-white bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 h-[500px]"
      style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="currentColor" strokeOpacity={0.2} />
          <PolarAngleAxis
            dataKey="name"
            stroke="currentColor"
            tick={{ fontSize: 12, fill: "currentColor" }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />
          <Radar
            name="Proficiency"
            dataKey="value"
            stroke="currentColor"
            fill="currentColor"
            fillOpacity={0.4}
          />
          <Tooltip
            formatter={(val) => [`${val}%`, "Level"]}
            contentStyle={{
              backgroundColor: "rgba(0,0,0,0.7)",
              border: "none",
              color: "inherit",
            }}
          />
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{ color: "inherit", paddingTop: 10 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

interface SkillListProps {
  skillsToShow: typeof skills;
  showBadges?: boolean;
  title?: string;
}

function SkillList({ skillsToShow, showBadges = false, title }: SkillListProps) {
  if (showBadges) {
    const grouped = useMemo(() => {
      return skillsToShow.reduce<Record<CategoryType, typeof skills>>(
        (acc, skill) => {
          (acc[skill.category] = acc[skill.category] || []).push(skill);
          return acc;
        },
        {} as any
      );
    }, [skillsToShow]);

    return (
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-6">{title || "All Skills"}</h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat} className="mb-6">
              <h4 className="text-lg font-medium mb-3">{cat}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className="py-1 px-3"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${getCategoryColor(
                        cat as CategoryType
                      )} 10%, transparent)`,
                      borderColor: getCategoryColor(cat as CategoryType),
                    }}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="p-4"
    >
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="space-y-6">
        {skillsToShow.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="rounded-full h-2 transition-all duration-500"
                style={{
                  width: `${skill.level}%`,
                  backgroundColor: getCategoryColor(skill.category),
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const [category, setCategory] = useState<CategoryType>("All");

  const filteredSkills = useMemo(
    () =>
      category === "All"
        ? skills
        : skills.filter((skill) => skill.category === category),
    [category]
  );

  const chartData = useMemo(
    () =>
      filteredSkills.slice(0, 8).map((skill) => ({
        name: skill.name,
        value: skill.level,
        fill: getCategoryColor(skill.category),
      })),
    [filteredSkills]
  );

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded" />
          <p className="text-xl text-muted-foreground">
            My technical toolkit and proficiency levels
          </p>
        </motion.div>

        <Tabs defaultValue="All" className="mb-12">
          <TabsList className="flex justify-center mb-10 bg-transparent">
            {CATEGORIES.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                  "px-5 py-2"
                )}
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {CATEGORIES.map((cat) => (
            <TabsContent key={cat} value={cat} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                <ChartPanel data={chartData} />
                <SkillList
                  skillsToShow={filteredSkills}
                  showBadges={cat === "All"}
                  title={cat === "All" ? "All Skills" : `${cat} Skills`}
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
