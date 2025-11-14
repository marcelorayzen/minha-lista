"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TaskFilter from "./TaskFilter";
import TaskForm from "./TaskForm";
import useTasks, { Task } from "../hooks/useTasks";

export default function TaskList() {
  const { tasks, addTask, toggleTask, deleteTask, updateTask } = useTasks();
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [editingTask, setEditingTask] = useState<string | null>(null);

  const visibleTasks = useMemo(() => {
    switch (filter) {
      case "active":
        return tasks.filter((t) => !t.completed);
      case "completed":
        return tasks.filter((t) => t.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  return (
    <div className="max-w-lg mx-auto p-6 mt-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg transition-all duration-300">
      <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-4">Minhas tarefas</h1>

      <TaskForm
        onAdd={(title, description) => addTask(title, description ?? "")}
        onUpdate={(task) => updateTask(task.id, { title: task.title, description: task.description ?? "" })}
        editing={editingTask ? tasks.find((t) => t.id === editingTask) ?? null : null}
      />

      <div className="flex items-center justify-between mt-4">
        <TaskFilter value={filter} onChange={(f) => setFilter(f)} />
        <div className="text-sm text-gray-600 dark:text-gray-400">Total: {tasks.length}</div>
      </div>

      <div className="mt-6 space-y-3">
        <AnimatePresence>
          {visibleTasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              layout
              className={`flex justify-between items-center p-4 rounded-xl border transition-colors ${
                task.completed ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700" : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              }`}
            >
              <div className="flex-1 pr-4 cursor-pointer" onClick={() => toggleTask(task.id)}>
                <h3 className={`font-medium ${task.completed ? "line-through text-gray-500 dark:text-gray-400" : ""}`}>{task.title}</h3>
                {task.description && <p className="text-sm text-gray-600 dark:text-gray-300">{task.description}</p>}
                <small className="text-xs text-gray-400 dark:text-gray-500">{new Date(task.createdAt).toLocaleString("pt-BR")}</small>
              </div>

              <div className="flex gap-2">
                <button onClick={() => toggleTask(task.id)} className={`px-3 py-1 rounded-xl text-sm ${task.completed ? "bg-yellow-500 text-white" : "bg-green-600 text-white"}`}>
                  {task.completed ? "Reabrir" : "Concluir"}
                </button>

                <button onClick={() => setEditingTask(task.id)} className="px-3 py-1 rounded-xl bg-blue-600 text-white text-sm">Editar</button>

                <button onClick={() => deleteTask(task.id)} className="px-3 py-1 rounded-xl bg-red-600 text-white text-sm">Excluir</button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visibleTasks.length === 0 && <p className="text-center text-gray-500 dark:text-gray-400 mt-6">Nenhuma tarefa encontrada para este filtro.</p>}
    </div>
  );
}
