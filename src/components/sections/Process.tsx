
// import React from "react";
// import { Timeline } from "../../components/ui/timeline";

// export default function TimelineDemo() {
//   const data = [
//     {
//       title: "Get in Touch",
//       content: (
//         <div className="grid grid-cols-2 gap-12 mb-12">
//           <p className=" text-[#621316]/90 text-xs md:text-2xl font-normal mb-8">
//             Reach out with your contact information, and we&apos;ll contact you
//             to set up a quick conversation
//           </p>
//           <div className="grid grid-cols-2 gap-4"></div>
//         </div>
//       ),
//     },
//     {
//       title: "Quick Discussion",
//       content: (
//         <div className="mb-12">
//           <p className="text-[#621316]/90 text-xs md:text-2xl font-normal mb-8">
//             We&apos;ll talk about your event, your expectations, and see how our
//             offering can satisfy your entertainment needs
//           </p>

//           <div className="grid grid-cols-2 gap-4"></div>
//         </div>
//       ),
//     },
//     {
//       title: "Closing",
//       content: (
//         <div className="grid grid-cols-2 gap-12 mb-12">
//           <p className="text-[#621316]/90 text-xs md:text-2xl font-normal mb-8">
//             Confirm the date & the package you want, sign the dotted line...
//           </p>
//           <div className="grid grid-cols-2 gap-4"></div>
//         </div>
//       ),
//     },
//     {
//       title: "Deliver",
//       content: (
//         <div className="mb-12">
//           <p className="text-[#621316]/90 text-xs md:text-2xl font-normal mb-8">
//             Sit back & enjoy as Tintin the Magician will take care of the rest !
//           </p>
//           <div className="grid grid-cols-2 gap-4"></div>
//         </div>
//       ),
//     },
//   ];
//   return (
//     <>
//       <div className="w-full bg-transparent">
//         <Timeline data={data} />
//       </div>

//       <div className="w-full  h-96 grid grid-col-2 items-center  justify-center bg-[url(../../public/assets/images/hero3.jpg)] bg-cover bg-center bg-no-repeat rounded-2xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
//         <h1 className="text-stone-200 text-3xl -mb-60">
//           BOOK ME FOR YOUR EVENT
//         </h1>
//         <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-stone-900-400 focus:ring-offset-2 focus:ring-offset-stone-900-50">
//           <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//           <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-stone-900-900 px-3 py-1 text-sm font-medium text-stone-900-200 backdrop-blur-3xl">
//             CHECK AVAILABILITY
//           </span>
//         </button>
//       </div>
//     </>
//   );
// }

"use client";

import React from "react";
import { Timeline } from "../../components/ui/timeline";
import { useTranslations } from "next-intl";

export default function TimelineDemo() {
  const t = useTranslations();

  const data = [
    {
      title: t("TIMELINE_TITLE_1"),
      content: (
        <div className="grid grid-cols-2 gap-12 mb-12">
          <p className="text-[#621316]/90 text-xs md:text-2xl font-normal mb-8">
            {t("TIMELINE_DESC_1")}
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: t("TIMELINE_TITLE_2"),
      content: (
        <div className="mb-12">
          <p className="text-[#621316]/90 text-xs md:text-2xl font-normal mb-8">
            {t("TIMELINE_DESC_2")}
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: t("TIMELINE_TITLE_3"),
      content: (
        <div className="grid grid-cols-2 gap-12 mb-12">
          <p className="text-[#621316]/90 text-xs md:text-2xl font-normal mb-8">
            {t("TIMELINE_DESC_3")}
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: t("TIMELINE_TITLE_4"),
      content: (
        <div className="mb-12">
          <p className="text-[#621316]/90 text-xs md:text-2xl font-normal mb-8">
            {t("TIMELINE_DESC_4")}
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="w-full bg-transparent">
        <Timeline data={data} />
      </div>

      <div className="w-full h-96 grid grid-col-2 items-center justify-center bg-[url(../../public/assets/images/hero3.jpg)] bg-cover bg-center bg-no-repeat rounded-2xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
        <h1 className="text-stone-200 text-3xl -mb-60">{t("BOOK_ME")}</h1>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-stone-900-400 focus:ring-offset-2 focus:ring-offset-stone-900-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-stone-900-900 px-3 py-1 text-sm font-medium text-stone-900-200 backdrop-blur-3xl">
            {t("CHECK_AVAILABILITY")}
          </span>
        </button>
      </div>
    </>
  );
}
