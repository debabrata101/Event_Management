import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { events, categories } from '../data/events'
import EventGrid from '../components/EventGrid'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'

export default function Events() {
  const [params] = useSearchParams()
  const initial = categories.includes(params.get('category')) ? params.get('category') : 'All'
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(initial)
  const [sort, setSort] = useState('soonest')
  const filtered = useMemo(() => {
    const result = events.filter(e => (category === 'All' || e.category === category) && `${e.title} ${e.short} ${e.location}`.toLowerCase().includes(query.toLowerCase()))
    return result.sort((a,b) => sort === 'latest' ? new Date(b.date)-new Date(a.date) : new Date(a.date)-new Date(b.date))
  }, [query, category, sort])
  const clear = () => { setQuery(''); setCategory('All'); setSort('soonest') }
  return <main className="min-h-[70vh]">
    <section className="bg-paper py-16 dark:bg-[#101722] sm:py-20"><div className="container-wide"><p className="eyebrow">Explore the possibilities</p><h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight dark:text-white sm:text-5xl">Find your next <span className="text-accent">experience.</span></h1><p className="muted mt-4 max-w-xl text-sm leading-7 text-slate-500">From big ideas to live music, find the events worth stepping out for.</p></div></section>
    <section className="section-pad pt-12"><div className="container-wide">
      <div className="mb-7 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center"><SearchBar value={query} onChange={setQuery} placeholder="Search by event, keyword or location..."/>
        <div className="flex items-center gap-2"><SlidersHorizontal size={17} className="text-slate-400"/><label htmlFor="sort" className="sr-only">Sort events</label><select id="sort" value={sort} onChange={e=>setSort(e.target.value)} className="field !w-auto !rounded-full !py-3 text-sm"><option value="soonest">Date: soonest</option><option value="latest">Date: latest</option></select></div>
      </div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4"><CategoryFilter categories={categories} value={category} onChange={setCategory}/><button onClick={clear} className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-accent"><X size={14}/> Clear filters</button></div>
      <div className="mb-5 text-sm text-slate-500 dark:text-slate-400"><strong className="text-ink dark:text-white">{filtered.length}</strong> {filtered.length === 1 ? 'event' : 'events'} found</div>
      <EventGrid items={filtered}/>
    </div></section>
  </main>
}
