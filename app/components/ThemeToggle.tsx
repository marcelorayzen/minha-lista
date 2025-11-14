"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("minha-lista:dark");
    setDark(stored === "true");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("minha-lista:dark", dark ? "true" : "false");
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="border border-gray-400 px-3 py-1 rounded-xl text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
