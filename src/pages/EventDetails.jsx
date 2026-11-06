import { Link, useParams } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  Clock3,
  Ticket,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";
import { events } from "../data/event";
import { formatDate } from "../components/EventCard";
import CountdownTimer from "../components/CountdownTimer";
import EventGrid from "../components/EventGrid";

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find((item) => item.id === id);
  if (!event)
    return (
      <div className="container-wide py-24 text-center">
        <h1 className="font-display text-3xl font-extrabold">
          Event not found
        </h1>
        <Link to="/events" className="btn-primary mt-6">
          Back to events
        </Link>
      </div>
    );
  const related = events
    .filter((e) => e.category === event.category && e.id !== event.id)
    .slice(0, 3);
  return (
    <main className="pb-20">
      <div className="container-wide pt-8">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-accent"
        >
          <ArrowLeft size={16} /> All events
        </Link>
      </div>
      <div className="container-wide mt-6 overflow-hidden rounded-[2rem]">
        <img
          src={event.image}
          alt={event.title}
          className="h-[260px] w-full object-cover sm:h-[430px]"
        />
      </div>
      <div className="container-wide grid gap-10 pt-10 lg:grid-cols-[1fr_340px]">
        <div>
          <span className="rounded-full bg-orange-100 px-3 py-1.5 text-xs font-bold text-accent">
            {event.category}
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight dark:text-white sm:text-5xl">
            {event.title}
          </h1>
          <p className="muted mt-5 max-w-2xl text-base leading-8 text-slate-500">
            {event.description}
          </p>
          <div className="mt-9 grid gap-5 border-y border-stone-200 py-7 dark:border-slate-700 sm:grid-cols-2">
            <div className="flex gap-3">
              <CalendarDays className="mt-1 text-accent" />
              <div>
                <p className="text-xs text-slate-500">Date</p>
                <p className="mt-1 font-bold dark:text-white">
                  {formatDate(event.date)}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock3 className="mt-1 text-accent" />
              <div>
                <p className="text-xs text-slate-500">Time</p>
                <p className="mt-1 font-bold dark:text-white">
                  {new Date(event.date).toLocaleTimeString("en-IN", {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="mt-1 text-accent" />
              <div>
                <p className="text-xs text-slate-500">Venue</p>
                <p className="mt-1 font-bold dark:text-white">
                  {event.venue}, {event.location}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Ticket className="mt-1 text-accent" />
              <div>
                <p className="text-xs text-slate-500">Admission</p>
                <p className="mt-1 font-bold dark:text-white">{event.price}</p>
              </div>
            </div>
          </div>
          <h2 className="mt-9 font-display text-xl font-extrabold dark:text-white">
            About this experience
          </h2>
          <p className="muted mt-3 text-sm leading-7 text-slate-500">
            {event.description}
          </p>
        </div>
        <aside className="surface h-fit rounded-3xl border border-stone-200 bg-white p-6 shadow-soft dark:border-slate-700">
          <p className="eyebrow">Save your spot</p>
          <div className="mt-2 font-display text-3xl font-extrabold dark:text-white">
            {event.price}
          </div>
          <p className="mt-1 text-xs text-slate-500">Per attendee</p>
          <div className="my-6 border-t border-stone-100 pt-5 dark:border-slate-700">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
              Event starts in
            </p>
            <CountdownTimer date={event.date} />
          </div>
          <Link
            to={`/register?event=${event.id}`}
            className="btn-primary w-full"
          >
            Register now <ArrowUpRight size={17} />
          </Link>
          <p className="mt-4 text-center text-[11px] leading-5 text-slate-400">
            Registration is stored locally for this demo.
          </p>
        </aside>
      </div>
      {related.length > 0 && (
        <section className="container-wide mt-20">
          <h2 className="mb-7 font-display text-2xl font-extrabold dark:text-white">
            You might also like
          </h2>
          <EventGrid items={related} />
        </section>
      )}
    </main>
  );
}
