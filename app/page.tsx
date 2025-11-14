"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./components/ThemeToggle";
import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <motion.main className="min-h-screen flex flex-col items-center justify-center transition-all px-4 py-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-2 text-center">Minha-lista</h1>
        <p className="text-center text-sm text-gray-500 mb-8">Next.js • TypeScript • Tailwind • Framer Motion</p>

        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        <TaskList />
      </div>
    </motion.main>
  );
}
