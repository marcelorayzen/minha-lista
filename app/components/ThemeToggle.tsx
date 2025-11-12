'use client';
import React, { useEffect, useState } from 'react';

const THEME_KEY = 'minha-lista:theme';

export default function ThemeToggle() {
  const [mode, setMode] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      setMode('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setMode('light');
    }
  }, []);

  function toggle() {
    if (mode === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(THEME_KEY, 'light');
      setMode('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem(THEME_KEY, 'dark');
      setMode('dark');
    }
  }

  return (
    <button onClick={toggle} className="px-3 py-1 rounded-xl border">
      {mode === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
