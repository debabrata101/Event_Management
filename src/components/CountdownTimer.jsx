import { useEffect, useState } from 'react'
export default function CountdownTimer({ date }) {
  const [now, setNow] = useState(Date.now())
  useEffect(() => { const id = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(id) }, [])
  const distance = Math.max(0, new Date(date).getTime() - now)
  const units = [
    ['Days', Math.floor(distance / 86400000)],
    ['Hours', Math.floor(distance / 3600000) % 24],
    ['Mins', Math.floor(distance / 60000) % 60],
    ['Secs', Math.floor(distance / 1000) % 60]
  ]
  if (!distance) return <p className="font-bold text-accent">This event has started!</p>
  return <div className="flex gap-3">{units.map(([label, number]) => <div key={label} className="min-w-[58px] rounded-xl bg-ink px-3 py-3 text-center text-white"><div className="font-display text-xl font-extrabold tabular-nums">{String(number).padStart(2,'0')}</div><div className="mt-1 text-[9px] uppercase tracking-widest text-slate-300">{label}</div></div>)}</div>
}
