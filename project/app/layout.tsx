import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vinit Vekaria | Software Developer & Founder",
  description:
    "Vinit Vekaria is an Ontario software developer building web, mobile, cloud and AI-enabled products. Founder of HomHunt and co-founder of ASAP Booth Canada.",
  openGraph: {
    title: "Vinit Vekaria | Software Developer & Founder",
    description: "Software for real problems. Products built with purpose.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
