"use client";

import Image from "next/image";
import hpLogo from "../../assets/images/hpLogo.png";
import revolutlogo from "../../assets/images/revolutlogo.png";
import yamahalogo from "../../assets/images/yamahalogo.png";
import tgvlogo from "../../assets/images/tgvlogo.png";
import straumannlogo from "../../assets/images/straumannlogo.png";
// import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function Reviews() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 px-4 sm:px-8 relative overflow-hidden bg-transparent">
      <h1 className="text-center text-lg sm:text-2xl md:text-4xl font-bold text-slate-200 mb-12 md:py-12">
        YOUR COMPANY IS IN GOOD COMPANY
      </h1>

      <div className="w-full grid grid-cols-3 md:grid-cols-5 px-12 lg:px-48 justify-center md:justify-evenly items-center gap-6 md:gap-10  mb-24  ">
        <Image
          src={hpLogo}
          alt="HP"
          width={80}
          height={80}
          className="object-contain h-6 md:h-10 w-auto"
          priority
        />
        <Image
          src={revolutlogo}
          alt="Revolut"
          width={100}
          height={100}
          className="object-contain h-4 md:h-6 w-auto"
          priority
        />
        <Image
          src={yamahalogo}
          alt="Yamaha"
          width={100}
          height={100}
          className="object-contain h-4 md:h-6 w-auto"
          priority
        />
        <Image
          src={tgvlogo}
          alt="TGV"
          width={100}
          height={100}
          className="object-contain h-6 md:h-10 w-auto"
          priority
        />
        <Image
          src={straumannlogo}
          alt="Straumann"
          width={150}
          height={100}
          className="object-contain h-6 md:h-10 w-auto"
          priority
        />
      </div>

      <div className="w-full max-w-6xl">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="bg-transparent"
        />
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
    "Aute aliqua voluptate tempor officia. Sit aliquip enim quis culpa. Dolore incididunt in esse esse sunt elit.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
