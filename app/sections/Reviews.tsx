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
    <div className="h-[50rem]  flex flex-col antialiased  sm:items-center justify-center relative overflow-hidden pt-24  ">
      <h1 className="text-xl text-center md:text-3xl text-slate-200 font-bold  flex justify-center items-center  -mt-60 md:mb-16">
        YOUR COMPANY IS IN GOOD COMPANY
      </h1>
      <div className="bg-transparent  h-32 md:mb-12 w-full flex flex-row justify-evenly items-center   md:mx-8 text-stone-300">
        {/* iconos de las empresas */}
        <Image
          src={hpLogo}
          width={50}
          height={50}
          alt={"Tintin the Magician"}
          className=" object-cover "
          priority
        />
        <Image
          src={revolutlogo}
          width={100}
          height={100}
          alt={"Tintin the Magician"}
          className=" object-cover "
          priority
        />
        <Image
          src={yamahalogo}
          width={100}
          height={100}
          alt={"Tintin the Magician"}
          className=" object-cover "
          priority
        />
        <Image
          src={tgvlogo}
          width={100}
          height={100}
          alt={"Tintin the Magician"}
          className=" object-cover "
          priority
        />
        <Image
          src={straumannlogo}
          width={150}
          height={100}
          alt={"Tintin the Magician"}
          className=" object-cover "
          priority
        />
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className="bg-transparent"
      />
    </div>
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
