import Image from "next/image";
import React from "react";
import { Timeline } from "../components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "IDEA",
      content: (
        <div className="grid grid-cols-2 gap-12 mb-12">
          <p className="text-neutral-800 dark:text-neutral-900 text-xs md:text-2xl font-normal mb-8">
            What kind of event / party are you hosting? Gather info about your
            budget, venue, amount of people coming, location & time, plus other
            important info.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Get in Touch",
      content: (
        <div className="mb-12">
          <p className="text-neutral-800 dark:text-neutral-900 text-xs md:text-2xl font-normal mb-8">
            When ready, please email (or call) to discuss your specific plans.
            Let&apos;s open a dialogue, and get the ball rolling.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Quick Discussion",
      content: (
        <div className="grid grid-cols-2 gap-12 mb-12">
          <p className="text-neutral-800 dark:text-neutral-900 text-xs md:text-2xl font-normal mb-8">
            What kind of event / party are you hosting? Gather info about your
            budget, venue, amount of people coming, location & time, plus other
            important info.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Deliver",
      content: (
        <div className="mb-12">
          <p className="text-neutral-800 dark:text-neutral-900 text-xs md:text-2xl font-normal mb-8">
            We speak about your event, then decide the optimal place for me to
            enrich your guests&apos; overall experience.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
    <div className="w-full bg-transparent">
      <Timeline data={data} />
    </div>
    <div className="w-full bg-amber-400 h-96">

    </div>
    </>
  );
}
