import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: "light",
      toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light";

     
        set({ theme: newTheme });

 
        document.documentElement.classList.remove("light", "dark");

      
        document.documentElement.classList.add(newTheme);

       
        document.body.offsetHeight;
      },
    }),
    {
      name: "theme-storage", 
    }
  )
);
