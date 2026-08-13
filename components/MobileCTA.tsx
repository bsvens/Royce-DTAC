import { site, flags } from "@/lib/site";
import { CalendarIcon, PhoneIcon, ChatIcon } from "./icons";

// App-like fixed action bar — mobile only. Sits above the home-indicator via
// safe-area inset. Hidden from sm: up, where header CTAs take over. With
// booking off, it leads with the Google Voice line: call, or text.
export default function MobileCTA() {
  const booking = flags.enableBooking;

  const primary = booking
    ? {
        href: site.calendlyUrl,
        label: "Book a free consultation",
        external: true,
        Icon: CalendarIcon,
      }
    : {
        href: `tel:${site.phone}`,
        label: "Call Royce",
        external: false,
        Icon: PhoneIcon,
      };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 sm:hidden">
      <div className="border-t border-white/10 bg-base/85 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl">
        <div className="flex items-center gap-2.5">
          <a
            href={primary.href}
            {...(primary.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-[#0a0d13] transition-colors active:bg-accent-soft"
          >
            <primary.Icon className="h-4 w-4" />
            {primary.label}
          </a>
          <a
            href={`sms:${site.phone}`}
            aria-label="Text Royce"
            className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-white/10 bg-white/5 text-ink transition-colors active:bg-white/10"
          >
            <ChatIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
