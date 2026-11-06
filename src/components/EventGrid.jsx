import EventCard from './EventCard'
export default function EventGrid({ items }) {
  if (!items.length) return <div className="surface rounded-3xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center dark:border-slate-600"><div className="text-4xl">✳</div><h3 className="mt-4 font-display text-xl font-extrabold">No events found</h3><p className="muted mt-2 text-sm text-slate-500">Try another search or clear your filters.</p></div>
  return <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.map(event => <EventCard key={event.id} event={event}/>)}</div>
}
