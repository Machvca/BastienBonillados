"use client";

// import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function Reviews() {
  return (
    <div className="h-[50rem] rounded-md flex flex-col antialiased  sm:items-center justify-center relative overflow-hidden pt-24  ">
      <h1 className="text-xl text-center md:text-3xl text-slate-200 font-bold  flex justify-center items-center  -mt-60 md:mb-16">
        YOUR COMPANY IS IN GOOD COMPANY
      </h1>
      <div className="bg-transparent  h-32 md:mb-12 w-full flex flex-row justify-evenly items-center rounded-md  md:mx-8 text-stone-300">
        {/* iconos de las empresas */}
        <h1>logoempresa1</h1>
        <h1>logoempresa2</h1>
        <h1>logoempresa3</h1>
        <h1>logoempresa4</h1>
        <h1>logoempresa5</h1>
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
