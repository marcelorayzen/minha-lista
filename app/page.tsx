'use client'

import { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import { motion } from 'framer-motion'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <motion.main
      className="min-h-screen flex flex-col items-center justify-center transition-all px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-2 text-center">Minha-lista</h1>
        <p className="text-center text-sm text-gray-500 mb-8">
          Next.js • TypeScript • Tailwind • Framer Motion
        </p>

        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border border-gray-400 px-3 py-1 rounded-xl text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <TaskList />
      </div>
    </motion.main>
  )
}
