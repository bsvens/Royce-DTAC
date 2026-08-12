import { site } from "@/lib/site";
import { CalendarIcon, ChatIcon } from "./icons";

// App-like fixed action bar — mobile only. Sits above the home-indicator via
// safe-area inset. Hidden from sm: up, where header CTAs take over.
export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 sm:hidden">
      <div className="border-t border-white/10 bg-base/85 backdrop-blur-xl px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-2.5">
          <a
            href={site.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-[#0a0d13] transition-colors active:bg-accent-soft"
          >
            <CalendarIcon className="h-4 w-4" />
            Book a free consultation
          </a>
          <a
            href="#contact"
            aria-label="Send a message"
            className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-white/10 bg-white/5 text-ink transition-colors active:bg-white/10"
          >
            <ChatIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
