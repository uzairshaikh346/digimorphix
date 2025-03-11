"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-card";

export function ClientReview() {
  return (
    <div className="h-[36rem] rounded-md flex flex-col antialiased bg-black  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        className="bg-black"
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
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
  {
    quote:
      "MarketIX ne hamare business ko nayi bulandiyon tak le gaya. Inki marketing strategies ne humare sales mein zabardast izafa kiya.",
    name: "Uzair Ahmed",
    title: "CEO, Tech Innovations",
  },
  {
    quote:
      "Inka customer service aur support faqat bemisaal hai. MarketIX team humesha responsive aur helpful hoti hai.",
    name: "Aisha Khan",
    title: "Marketing Manager, Creative Solutions",
  },
  {
    quote:
      "MarketIX ki wajah se hamari website traffic aur engagement dono mein bhoht bara farq aya hai. Unka expertise lajawab hai.",
    name: "Ali Raza",
    title: "Founder, Startup Hub",
  },
];

