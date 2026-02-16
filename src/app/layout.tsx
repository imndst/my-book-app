import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyProject",
  description: "Next.js + Semantic Token Dark/Light",
};

// ⚡️ Helper SSR safe
function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light"; // SSR
  try {
    const storage = localStorage.getItem("theme-storage");
    if (storage) return JSON.parse(storage).state.theme;
  } catch {}
  return "light";
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const initialTheme = getInitialTheme();

  return (
    <html lang="fa" className={initialTheme}>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          bg-background 
          text-foreground 
          transition-colors duration-300
        `}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
