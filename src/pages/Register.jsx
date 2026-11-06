import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { events } from "../data/event";
import { validators } from "../utils/Validation";
import { saveRegistration } from "../utils/Storage";

const initial = { name: "", email: "", phone: "", eventId: "" };
export default function Register() {
  const [params] = useSearchParams();
  const [form, setForm] = useState({
    ...initial,
    eventId: params.get("event") || "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);
  const selected = useMemo(
    () => events.find((e) => e.id === form.eventId),
    [form.eventId],
  );
  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const submit = (e) => {
    e.preventDefault();
    const validEvent = events.find((event) => event.id === form.eventId);
    const next = {
      name: validators.name(form.name),
      email: validators.email(form.email),
      phone: validators.phone(form.phone),
      eventId: validators.required(form.eventId, "Event"),
    };

    if (!validEvent) {
      next.eventId = "Please select a valid event.";
    }

    setErrors(next);
    if (Object.values(next).some(Boolean)) return;

    const record = { ...form, eventTitle: validEvent.title };
    saveRegistration(record);
    setSuccess(record);
  };
  if (success)
    return (
      <main className="container-wide flex min-h-[70vh] items-center justify-center py-16">
        <div className="surface w-full max-w-xl rounded-[2rem] border border-stone-200 bg-white p-8 text-center shadow-soft dark:border-slate-700 sm:p-12">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckCircle2 size={32} />
          </div>
          <p className="eyebrow mt-6">You're on the list</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold dark:text-white">
            Registration confirmed!
          </h1>
          <p className="muted mt-3 text-sm leading-7 text-slate-500">
            Thanks, {success.name}. Your registration details have been saved in
            this browser.
          </p>
          <div className="mt-7 rounded-2xl bg-paper p-5 text-left dark:bg-[#101722]">
            <p className="text-xs text-slate-500">Selected event</p>
            <p className="mt-1 font-bold dark:text-white">
              {success.eventTitle}
            </p>
            <p className="mt-4 text-xs text-slate-500">Participant</p>
            <p className="mt-1 text-sm font-semibold dark:text-white">
              {success.name} · {success.email}
            </p>
            <p className="mt-1 text-sm text-slate-500">{success.phone}</p>
          </div>
          <Link to="/events" className="btn-primary mt-7">
            Back to events <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    );
  return (
    <main className="container-wide grid min-h-[75vh] items-start gap-10 py-14 lg:grid-cols-[.8fr_1.2fr] lg:py-20">
      <div className="pt-3">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-accent"
        >
          <ArrowLeft size={16} /> Back to events
        </Link>
        <p className="eyebrow mt-10">Make it official</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight dark:text-white sm:text-5xl">
          Your next great experience is one step away.
        </h1>
        <p className="muted mt-5 max-w-md text-sm leading-7 text-slate-500">
          Complete the details to reserve your place. This demo saves your
          registration in your browser only.
        </p>
        {selected && (
          <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-soft dark:bg-slate-800">
            <img
              src={selected.image}
              alt={selected.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <span className="text-xs font-bold text-accent">
                {selected.category}
              </span>
              <h3 className="mt-1 font-display text-lg font-extrabold dark:text-white">
                {selected.title}
              </h3>
              <p className="mt-2 text-xs text-slate-500">
                {selected.location} ·{" "}
                {new Date(selected.date).toLocaleDateString("en-IN")}
              </p>
            </div>
          </div>
        )}
      </div>
      <form
        onSubmit={submit}
        noValidate
        className="surface rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft dark:border-slate-700 sm:p-9"
      >
        <h2 className="font-display text-2xl font-extrabold dark:text-white">
          Registration details
        </h2>
        <p className="muted mt-2 text-sm text-slate-500">
          Fields marked with * are required.
        </p>
        <div className="mt-7 grid gap-5">
          <div>
            <label
              className="mb-2 block text-sm font-bold dark:text-white"
              htmlFor="name"
            >
              Full name *
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={update}
              placeholder="Your full name"
              className="field"
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-bold dark:text-white"
              htmlFor="email"
            >
              Email address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={update}
              placeholder="you@example.com"
              className="field"
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-bold dark:text-white"
              htmlFor="phone"
            >
              Phone number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={update}
              placeholder="+91 98765 43210"
              className="field"
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
            )}
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-bold dark:text-white"
              htmlFor="eventId"
            >
              Select event *
            </label>
            <select
              id="eventId"
              name="eventId"
              value={form.eventId}
              onChange={update}
              className="field"
            >
              <option value="">Choose an event</option>
              {events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.title} — {event.price}
                </option>
              ))}
            </select>
            {errors.eventId && (
              <p className="mt-1.5 text-xs text-red-500">{errors.eventId}</p>
            )}
          </div>
        </div>
        <button type="submit" className="btn-primary mt-8 w-full">
          Confirm registration <ArrowRight size={17} />
        </button>
        <p className="mt-4 text-center text-[11px] leading-5 text-slate-400">
          Your details stay in this browser. No server submission is made.
        </p>
      </form>
    </main>
  );
}
