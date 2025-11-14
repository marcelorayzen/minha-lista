"use client";
import { useEffect, useState } from "react";
import type { Task } from "../hooks/useTasks";

interface Props {
  onAdd: (title: string, description?: string) => void;
  onUpdate: (task: Task) => void;
  editing: Task | null;
}

export default function TaskForm({ onAdd, onUpdate, editing }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setDescription(editing.description ?? "");
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editing]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    if (editing) {
      onUpdate({ ...editing, title: trimmed, description: description ?? "" });
    } else {
      onAdd(trimmed, description ?? "");
    }
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Título da tarefa"
        className="w-full p-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descrição (opcional)"
        className="w-full p-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 transition">
        {editing ? "Atualizar Tarefa" : "Adicionar Tarefa"}
      </button>
    </form>
  );
}
