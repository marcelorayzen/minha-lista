"use client";

import { useEffect, useState } from "react";

export function usePersistedState<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(initialValue);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        setState(JSON.parse(stored));
      } catch {
        setState(initialValue);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState] as const;
}
