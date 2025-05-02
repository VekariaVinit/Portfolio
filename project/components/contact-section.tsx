"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded" />
          <p className="text-xl text-muted-foreground">
            Have a project in mind or want to work together? Let's talk.
          </p>
        </motion.div>

        {/* Centered Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <Card className="border-none shadow-md">
            <CardContent className="p-6 space-y-8 text-center">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Mail className="h-5 w-5 text-primary mx-auto" />,
                      label: "Email",
                      value: "vinitvekaria810@gmail.com",
                    },
                    {
                      icon: <Phone className="h-5 w-5 text-primary mx-auto" />,
                      label: "Phone",
                      value: "+1 (647) 4716196",
                    },
                    {
                      icon: <MapPin className="h-5 w-5 text-primary mx-auto" />,
                      label: "Location",
                      value: "Toronto, CA",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="bg-primary/10 p-2 rounded-full mb-1">{item.icon}</div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/VekariaVinit"
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vinit-vekariaengineer/"
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href="#"
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
