import { CheckCircle2, X } from 'lucide-react'
export default function Toast({ message, onClose }) {
  if (!message) return null
  return <div role="status" className="fixed bottom-5 right-5 z-[70] flex max-w-sm items-center gap-3 rounded-2xl bg-ink px-5 py-4 text-sm font-semibold text-white shadow-2xl"><CheckCircle2 className="text-emerald-400" size={19}/><span>{message}</span><button onClick={onClose} aria-label="Close notification"><X size={16}/></button></div>
}
