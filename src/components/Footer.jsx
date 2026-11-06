import { Link } from 'react-router-dom'
import { ArrowUpRight, Instagram, Linkedin, Facebook } from 'lucide-react'
export default function Footer() {
  return <footer className="bg-ink py-14 text-white">
    <div className="container-wide">
      <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div><Link to="/" className="font-display text-2xl font-extrabold">K explore<span className="text-accent">.</span></Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">Discover experiences, meet your people and make room for moments worth remembering.</p>
          <div className="mt-5 flex gap-3">{[Instagram, Linkedin, Facebook].map((Icon, i) => <a key={i} href={["https://www.instagram.com/","https://www.linkedin.com/","https://www.facebook.com/"][i]} aria-label={['Instagram','LinkedIn','Facebook'][i]} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 p-2.5 hover:border-accent hover:text-accent"><Icon size={17}/></a>)}</div>
        </div>
        <div><p className="mb-4 text-sm font-bold">Explore</p><div className="flex flex-col gap-3 text-sm text-slate-400"><Link to="/events" className="hover:text-white">All events</Link><Link to="/about" className="hover:text-white">About us</Link><Link to="/contact" className="hover:text-white">Contact</Link></div></div>
        <div><p className="mb-4 text-sm font-bold">Popular categories</p><div className="flex flex-col gap-3 text-sm text-slate-400">{['Technology','Music','Education','Workshops'].map(x => <Link key={x} to={`/events?category=${encodeURIComponent(x)}`} className="hover:text-white">{x}</Link>)}</div></div>
      </div>
      <div className="flex flex-col justify-between gap-3 pt-6 text-xs text-slate-500 sm:flex-row"><span>© {new Date().getFullYear()} K Explore. All rights reserved.</span><span>Made for moments that matter.</span></div>
    </div>
  </footer>
}
