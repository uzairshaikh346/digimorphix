"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-card";

export function Mockups() {
  return (
    <div className=" rounded-md flex z-10x flex-col antialiased bg-black  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
        className="bg-black md:w-[50vw]"
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    image : "/webMockups/mockup1.jpg",
    url : "/",
    title : "Business owner"
  },
   {
    image : "/webMockups/mockup2.jpg",
    url : "/",
    title : "Business owner"
  },
   {
    image : "/webMockups/mockup3.jpg",
    url : "/",
    title : "Business owner"
  },
   {
    image : "/webMockups/mockup4.jpg",
    url : "/",
    title : "Business owner"
  },
  
]


