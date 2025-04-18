import Image from "next/image";
import hero2 from "../../../public/assets/images/hero2.jpg";
import hero3 from "../../../public/assets/images/hero3.jpg";
import React from "react";
import { Timeline } from "../../components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "IDEA",
      content: (
        <div className="grid grid-cols-2 gap-12 mb-12">
          <p className="text-neutral-800 dark:text-neutral-300 text-xs md:text-2xl font-normal mb-8">
            What kind of event / party are you hosting? Gather info about your
            budget, venue, amount of people coming, location & time, plus other
            important info.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={hero2}
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
          <p className="text-neutral-800 dark:text-neutral-300 text-xs md:text-2xl font-normal mb-8">
            When ready, please email (or call) to discuss your specific plans.
            Let&apos;s open a dialogue, and get the ball rolling.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src={hero3}
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
          <p className="text-neutral-800 dark:text-neutral-300 text-xs md:text-2xl font-normal mb-8">
            What kind of event / party are you hosting? Gather info about your
            budget, venue, amount of people coming, location & time, plus other
            important info.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={hero2}
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
          <p className="text-neutral-800 dark:text-neutral-300 text-xs md:text-2xl font-normal mb-8">
            We speak about your event, then decide the optimal place for me to
            enrich your guests&apos; overall experience.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={hero3}
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

      <div className="w-full  h-96 grid grid-col-2 items-center  justify-center bg-[url(../../public/assets/images/hero3.jpg)] bg-cover bg-center bg-no-repeat rounded-2xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
        <h1 className="text-stone-200 text-3xl -mb-60">
          BOOK ME FOR YOUR EVENT
        </h1>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-stone-900 px-3 py-1 text-sm font-medium text-stone-200 backdrop-blur-3xl">
            CHECK AVAILABILITY
          </span>
        </button>
      </div>
    </>
  );
}
