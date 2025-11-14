"use client";

import { useEffect, useState } from "react";

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
}

const STORAGE_KEY = "minha-lista:tasks_v1";

export default function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Carregar tarefas do localStorage somente após montagem
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setTasks(parsed);
        }
      }
    } catch (err) {
      console.error("Erro ao carregar tasks:", err);
    }

    setLoaded(true); // <-- fundamental
  }, []);

  // Salvar no localStorage — só depois de 'loaded'
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (err) {
      console.error("Erro ao salvar tasks:", err);
    }
  }, [tasks, loaded]);

  const addTask = (title: string, description = "") => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const updateTask = (id: string, data: { title: string; description?: string }) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              title: data.title,
              description: data.description ?? "",
            }
          : t
      )
    );
  };

  return { tasks, addTask, toggleTask, deleteTask, updateTask };
}
