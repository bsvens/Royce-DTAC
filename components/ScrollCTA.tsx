"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";
import { PhoneIcon, ChatIcon } from "./icons";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * A floating Call / Text bar (the Google Voice line) that stays hidden at the
 * top of the page, emerges once the reader scrolls past the hero, and tucks
 * away again when the contact section comes into view — so it never competes
 * with the header CTA or the contact card itself.
 */
export default function ScrollCTA() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const contact = document.getElementById("contact");
      const contactTop = contact ? contact.offsetTop : Number.POSITIVE_INFINITY;
      const pastHero = y > vh * 0.6;
      const reachedContact = y + vh > contactTop + vh * 0.3;
      setShow(pastHero && !reachedContact);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
      <motion.div
        initial={false}
        animate={
          show
            ? { y: 0, opacity: 1 }
            : { y: reduce ? 0 : 24, opacity: 0 }
        }
        transition={{ duration: 0.35, ease: EASE }}
        style={{ pointerEvents: show ? "auto" : "none" }}
        className="flex w-full max-w-md items-center gap-2 rounded-2xl border border-white/10 bg-base/85 p-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:w-auto"
      >
        <a
          href={`tel:${site.phone}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-[#0a0d13] transition-colors hover:bg-accent-soft sm:flex-none sm:px-6"
        >
          <PhoneIcon className="h-4 w-4" />
          Call
        </a>
        <a
          href={`sms:${site.phone}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-white/10 sm:flex-none sm:px-6"
        >
          <ChatIcon className="h-4 w-4" />
          Text
        </a>
      </motion.div>
    </div>
  );
}
