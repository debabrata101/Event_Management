import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return <button onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} className="rounded-full border border-stone-300 dark:border-slate-600 p-2.5 hover:border-accent transition">
    {theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}
  </button>
}
