import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Sparkles,
  Users,
  Ticket,
} from "lucide-react";
import { events } from "../data/event";
import EventGrid from "../components/EventGrid";

const stats = [
  { value: "120+", label: "Curated experiences", icon: CalendarDays },
  { value: "8K+", label: "Happy attendees", icon: Users },
  { value: "12+", label: "Event categories", icon: Ticket },
];
export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper pb-20 pt-14 dark:bg-[#101722] md:pb-28 md:pt-20">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          <div className="fade-up relative z-10">
            <div className="eyebrow mb-6 flex items-center gap-2">
              <Sparkles size={14} /> Find your next favourite moment
            </div>
            <h1 className="max-w-2xl font-display text-5xl font-extrabold leading-[1.08] tracking-[-.055em] text-ink dark:text-white sm:text-6xl lg:text-[4.6rem]">
              Discover experiences.{" "}
              <span className="text-accent">Create memories.</span>
            </h1>
            <p className="muted mt-7 max-w-lg text-base leading-8 text-slate-500 dark:text-slate-300">
              Explore exciting events, connect with people, and discover
              experiences that inspire you.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/events" className="btn-primary">
                Explore events <ArrowUpRight size={17} />
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-stone-200 pt-6 dark:border-slate-700">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display text-2xl font-extrabold dark:text-white">
                    {value}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-500/10" />
            <div className="relative grid grid-cols-[1.1fr_.9fr] items-end gap-3 sm:gap-4">
              <img
                src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=85"
                alt="Crowd enjoying a live event"
                className="h-[360px] w-full rounded-[2rem] object-cover shadow-soft sm:h-[470px]"
              />
              <div className="flex flex-col gap-4 pb-7">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=85"
                  alt="People collaborating at an event"
                  className="h-40 w-full rounded-[1.6rem] object-cover sm:h-56"
                />
                <div className="rounded-[1.6rem] bg-ink p-4 text-white sm:p-6">
                  <div className="text-xs text-slate-400">
                    Your next experience
                  </div>
                  <div className="mt-2 font-display text-xl font-extrabold">
                    Starts here<span className="text-accent">.</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-300">
                    <MapPin size={13} /> Around your city
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-soft dark:bg-slate-800 sm:left-8 sm:p-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange-100 text-accent">
                <CalendarDays size={20} />
              </div>
              <div>
                <div className="text-xs font-extrabold dark:text-white">
                  Make it a date
                </div>
                <div className="text-[11px] text-slate-500">
                  Find something happening soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-white dark:bg-[#131d2a]">
        <div className="container-wide">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow">Handpicked for you</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight dark:text-white sm:text-4xl">
                Featured experiences
              </h2>
              <p className="muted mt-3 text-sm text-slate-500">
                Good things happen when you show up.
              </p>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent"
            >
              View all events <ArrowUpRight size={17} />
            </Link>
          </div>
          <EventGrid items={events.filter((e) => e.featured).slice(0, 3)} />
        </div>
      </section>
      <section className="section-pad">
        <div className="container-wide grid items-center gap-10 rounded-[2rem] bg-[#f0e9df] p-8 dark:bg-[#1c2938] md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <p className="eyebrow">Be part of the story</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold tracking-tight text-ink dark:text-white sm:text-4xl">
              The best memories are made together.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 dark:text-slate-300">
              Find a room full of new ideas, a stage full of music, or a
              community that feels like yours.
            </p>
          </div>
          <Link to="/events" className="btn-primary w-fit">
            Find your next event <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
