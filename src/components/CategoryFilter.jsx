export default function CategoryFilter({ categories, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-4 py-2 text-xs font-bold transition ${value === category ? "bg-ink text-white dark:bg-accent" : "surface border border-stone-200 bg-white text-slate-600 hover:border-accent hover:text-accent dark:border-slate-600 dark:text-slate-300"}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
