import { Search } from "lucide-react";
export default function SearchBar({
  value,
  onChange,
  placeholder = "Search events...",
}) {
  return (
    <label className="flex min-w-0 items-center gap-3 rounded-full border border-stone-200 bg-white px-5 py-3.5 shadow-sm dark:border-slate-600 dark:bg-[#17212f]">
      <Search size={19} className="shrink-0 text-slate-400" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search events"
        className="w-full bg-transparent text-sm outline-none dark:text-white"
      />
    </label>
  );
}
