import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { validators } from "../utils/Validation";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const submit = (e) => {
    e.preventDefault();
    const next = {
      name: validators.name(form.name),
      email: validators.email(form.email),
      subject: validators.required(form.subject, "Subject"),
      message:
        form.message.trim().length >= 10
          ? ""
          : "Please enter at least 10 characters.",
    };
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;
    setSent(true);
  };
  return (
    <main className="container-wide grid min-h-[75vh] gap-12 py-16 lg:grid-cols-[.8fr_1.2fr] lg:py-24">
      <div>
        <p className="eyebrow">Let's talk</p>
        <h1 className="mt-3 font-display text-5xl font-extrabold tracking-tight dark:text-white">
          We'd love to <span className="text-accent">hear from you.</span>
        </h1>
        <p className="muted mt-5 max-w-md text-sm leading-7 text-slate-500">
          Have a question, an idea or an event you'd like to share? Send us a
          note.
        </p>
        <div className="mt-10 space-y-5">
          <div className="flex items-center gap-4">
            <span className="rounded-xl bg-orange-100 p-3 text-accent">
              <Mail />
            </span>
            <div>
              <p className="text-xs text-slate-500">Email</p>
              <p className="font-bold dark:text-white">
                hello@kexplore.example
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="rounded-xl bg-orange-100 p-3 text-accent">
              <MapPin />
            </span>
            <div>
              <p className="text-xs text-slate-500">Based in</p>
              <p className="font-bold dark:text-white">Odisha, India</p>
            </div>
          </div>
        </div>
      </div>
      <form
        onSubmit={submit}
        noValidate
        className="surface rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft dark:border-slate-700 sm:p-9"
      >
        {sent ? (
          <div className="py-12 text-center">
            <CheckCircle2 size={42} className="mx-auto text-emerald-500" />
            <h2 className="mt-4 font-display text-2xl font-extrabold dark:text-white">
              Message ready!
            </h2>
            <p className="muted mt-2 text-sm text-slate-500">
              Your message passed frontend validation. This demo does not send
              it to a server.
            </p>
            <button
              type="button"
              onClick={() => {
                setSent(false);
                setForm({ name: "", email: "", subject: "", message: "" });
              }}
              className="btn-secondary mt-6"
            >
              Write another
            </button>
          </div>
        ) : (
          <>
            <h2 className="font-display text-2xl font-extrabold dark:text-white">
              Send a message
            </h2>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {["name", "email"].map((key) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    className="mb-2 block text-sm font-bold capitalize dark:text-white"
                  >
                    {key} *
                  </label>
                  <input
                    id={key}
                    name={key}
                    value={form[key]}
                    onChange={change}
                    className="field"
                    placeholder={
                      key === "name" ? "Your name" : "you@example.com"
                    }
                  />
                  {errors[key] && (
                    <p className="mt-1 text-xs text-red-500">{errors[key]}</p>
                  )}
                </div>
              ))}
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-bold dark:text-white"
                >
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={change}
                  className="field"
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold dark:text-white"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={change}
                  rows="5"
                  className="field resize-y"
                  placeholder="Tell us a little more..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>
            </div>
            <button className="btn-primary mt-7 w-full">
              Submit message <Send size={16} />
            </button>
            <p className="mt-3 text-center text-[11px] text-slate-400">
              Frontend demo only — no message is transmitted.
            </p>
          </>
        )}
      </form>
    </main>
  );
}
