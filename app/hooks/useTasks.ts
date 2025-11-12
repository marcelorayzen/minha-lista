"use client";
import { useState, useEffect } from "react";

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
}

export default function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Carregar tarefas do localStorage
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      try {
        setTasks(JSON.parse(stored));
      } catch {
        console.error("Erro ao ler tarefas do localStorage");
      }
    }
  }, []);

  // Salvar tarefas no localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Adicionar nova tarefa
  const addTask = (title: string, description?: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [...prev, newTask]);
  };

  // Alternar conclusão
  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Excluir tarefa
  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Atualizar tarefa (edição)
  const updateTask = (id: string, data: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...data } : task))
    );
  };

  return { tasks, addTask, toggleTask, deleteTask, updateTask };
}
