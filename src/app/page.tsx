"use client";

import { useThemeStore } from "@/store/themeStore";

export default function Home() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans transition-colors duration-300">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-card text-card-foreground sm:items-start transition-colors duration-300">
        <h1 className="text-3xl font-bold mb-8">
          Hello, this is the Home page — Current Theme:{" "}
          <span className="font-mono">{theme}</span>
        </h1>
        <p className="text-foreground">
          🟢 Theme (from Zustand): <span className="font-bold">{theme}</span>
        </p>
      </main>
    </div>
  );
}
