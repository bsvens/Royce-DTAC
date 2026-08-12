import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import ScrollBackground from "@/components/ScrollBackground";
import { flags } from "@/lib/site";

export default function Home() {
  return (
    <>
      <ScrollBackground />
      <Header />
      <main>
        <Hero />
        <Services />
        <Experience />

        {/*
          Testimonials are intentionally hidden until we have real, attributable
          quotes with permission to publish. The section is fully built — flip
          `flags.showTestimonials` in lib/site.ts to turn it on.
        */}
        {flags.showTestimonials && <Testimonials />}

        <Contact />
      </main>
      <Footer />

      {/* Spacer so the fixed mobile action bar never covers the footer. */}
      <div aria-hidden className="h-20 sm:hidden" />
      <MobileCTA />
    </>
  );
}
