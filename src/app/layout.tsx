import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IIM Sirmaur Online MBA in Data Science & AI | India's First AI-Native MBA",
  description: "Earn an MBA degree from IIM Sirmaur without quitting your job. India's first AI-Native MBA for working professionals with 100% live online weekend classes, direct IIM alumni status, and AI-powered specializations in Finance, Marketing, and Operations.",
  keywords: "IIM Sirmaur MBA, Online MBA, Data Science MBA, AI MBA, Working Professionals MBA, Executive MBA, MBA in Data Science, MBA in AI, Online Executive Education",
  openGraph: {
    title: "IIM Sirmaur Online MBA in Data Science & AI",
    description: "India's First AI-Native MBA for Working Professionals. 100% Live Online Weekend Classes with Direct IIM Alumni Status.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <Analytics />
    </html>
  );
}
