import { Link } from "react-router-dom";
import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
// eslint-disable-next-line react-refresh/only-export-components
export function formatDate(value) {
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
export default function EventCard({ event }) {
  return (
    <article className="event-card surface overflow-hidden rounded-3xl border border-stone-200/80 bg-white">
      <Link
        to={`/events/${event.id}`}
        className="group relative block aspect-[1.55] overflow-hidden"
      >
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-ink backdrop-blur">
          {event.category}
        </span>
        <span className="absolute bottom-4 right-4 rounded-full bg-ink px-3 py-1.5 text-xs font-bold text-white">
          {event.price}
        </span>
      </Link>
      <div className="p-5">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-accent">
          <CalendarDays size={14} />
          {formatDate(event.date)}
        </div>
        <h3 className="font-display text-xl font-extrabold leading-snug text-ink dark:text-white">
          {event.title}
        </h3>
        <p className="muted mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
          {event.short}
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <MapPin size={14} />
          {event.location}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4 dark:border-slate-700">
          <Link
            to={`/events/${event.id}`}
            className="text-sm font-bold text-ink hover:text-accent dark:text-white"
          >
            View details
          </Link>
          <Link
            to={`/register?event=${event.id}`}
            aria-label={`Register for ${event.title}`}
            className="grid h-9 w-9 place-items-center rounded-full bg-accent text-white transition hover:rotate-45"
          >
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}
