"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button/button"; // make sure path is correct
import { useThemeStore } from "@/store/themeStore";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  // ⚡ SSR safe: check if mounted
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="bg-background border-b border-border px-4 py-3 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
     
        <h1 className="text-lg font-bold text-foreground">Imndst</h1>

    
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/" className="text-foreground hover:text-primary">Home</Link>
          <Link href="/about" className="text-foreground hover:text-primary">About</Link>
          <Link href="/contact" className="text-foreground hover:text-primary">Contact</Link>

     
          <Button size="sm" variant="ghost" onClick={toggleTheme}>
            {theme === "light" ? "🌞" : "🌙"}
          </Button>
        </div>

        {/* Mobile Menu + Theme Toggle */}
        <div className="flex gap-2 items-center md:hidden">
          {/* Theme toggle also visible on mobile */}
          <Button size="sm" variant="ghost" onClick={toggleTheme}>
            {theme === "light" ? "🌞" : "🌙"}
          </Button>

          {/* Hamburger menu */}
          <Button size="sm" variant="ghost" onClick={() => setOpen(!open)}>
            ☰
          </Button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-3 mt-2 px-2">
          <Link href="/" className="text-foreground hover:text-primary">Home</Link>
          <Link href="/about" className="text-foreground hover:text-primary">About</Link>
          <Link href="/contact" className="text-foreground hover:text-primary">Contact</Link>
        </div>
      )}
    </nav>
  );
}
