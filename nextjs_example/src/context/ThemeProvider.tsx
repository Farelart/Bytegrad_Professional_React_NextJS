"use client";

import { createContext, useState } from "react";

const ThemeContext = createContext("light");

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
