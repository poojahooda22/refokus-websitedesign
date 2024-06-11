
'use client'

import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import Marquees from "@/components/Marquees";
import Projects from "@/components/Projects";
import Cursor from "@/components/StickyCursor/Index";
import Stripes from "@/components/Stripes";
import Header from "@/components/header/Index";
import { useRef,  useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  const stickyElement = useRef(null);
  return (
    <main className="w-full min-h-screen bg-primary text-secondary font-[satoshi_variable] overflow-hidden">
      <Header ref={stickyElement} />
      <Cursor stickyElement={stickyElement} />
      <Hero />
      <Marquees />
      <Projects />
      <Stripes padding="py-[8vw]" />
      <Cards />
    </main>
  );
}
