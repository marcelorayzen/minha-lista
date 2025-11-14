"use client";

export type Filter = "all" | "active" | "completed";

export interface TaskFilterProps {
  value: Filter;
  onChange: (filter: Filter) => void;
}

export default function TaskFilter({ value, onChange }: TaskFilterProps) {
  const filters = [
    { key: "all", label: "Todas" },
    { key: "active", label: "Pendentes" },
    { key: "completed", label: "Concluídas" },
  ] as const;

  return (
    <div className="flex gap-2">
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() => onChange(f.key)}
          className={`px-3 py-1 rounded-xl text-sm transition-all ${
            value === f.key
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
