import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-5 left-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-accent text-white shadow-lg"
    >
      <ArrowUp size={18} />
    </button>
  ) : null;
}
