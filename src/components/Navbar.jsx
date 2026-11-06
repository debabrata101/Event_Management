import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  ['Home', '/'],
  ['Explore Events', '/events'],
  ['About', '/about'],
  ['Contact', '/contact']
]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navClass = ({ isActive }) => `text-sm font-semibold transition hover:text-accent ${isActive ? 'text-accent' : 'text-slate-700 dark:text-slate-200'}`
  return <header className="sticky top-0 z-50 border-b border-black/5 dark:border-white/10 bg-paper/90 dark:bg-[#101722]/90 backdrop-blur-xl">
    <div className="container-wide flex h-[76px] items-center justify-between">
      <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-lg font-extrabold text-white dark:bg-accent">K</span>
        <span className="font-display text-xl font-extrabold tracking-tight dark:text-white">explore<span className="text-accent">.</span></span>
      </Link>
      <nav className="hidden items-center gap-8 md:flex">
        {links.map(([label, path]) => <NavLink key={path} to={path} className={navClass}>{label}</NavLink>)}
      </nav>
      <div className="hidden items-center gap-3 md:flex">
        <ThemeToggle/>
        <Link to="/events" className="btn-primary !py-3 !px-5 text-sm">Get started <ArrowUpRight size={16}/></Link>
      </div>
      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle/>
        <button onClick={() => setOpen(!open)} aria-label="Toggle navigation" className="rounded-full border border-stone-300 p-2 dark:border-slate-600">{open ? <X/> : <Menu/>}</button>
      </div>
    </div>
    {open && <nav className="border-t border-stone-200 bg-paper px-5 py-5 dark:border-slate-700 dark:bg-[#101722] md:hidden">
      <div className="container-wide flex flex-col gap-5">
        {links.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)} className={navClass}>{label}</NavLink>)}
        <Link to="/events" onClick={() => setOpen(false)} className="btn-primary w-fit">Explore events <ArrowUpRight size={16}/></Link>
      </div>
    </nav>}
  </header>
}
