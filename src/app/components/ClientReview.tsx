"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-card";

export function ClientReview() {
  return (
    <div className="h-[36rem] rounded-md fle z-10x flex-col antialiased bg-black  items-center justify-center relative overflow-hidden">
        <h1 className='text-[#00ff00] text-3xl md:text-5xl font-bold text-center my-10'>Client Review</h1>
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
    "quote": "It was a great experience with MarketIX",
    "name": "Mathew",
    "title": "Business owner"
  },
  {
    "quote": "MarketIX's service was outstanding and very professional.",
    "name": "Sophia",
    "title": "Entrepreneur"
  },
  {
    "quote": "I highly recommend MarketIX for their excellent customer support.",
    "name": "Ali",
    "title": "Marketing Manager"
  },
  {
    "quote": "MarketIX helped us achieve our business goals efficiently.",
    "name": "Emma",
    "title": "CEO"
  },
  {
    "quote": "Exceptional service and great results with MarketIX.",
    "name": "John",
    "title": "Small Business Owner"
  },
  {
    "quote": "Working with MarketIX was a game-changer for our company.",
    "name": "Liam",
    "title": "COO"
  },
  {
    "quote": "The team at MarketIX is extremely knowledgeable and helpful.",
    "name": "Olivia",
    "title": "Business Consultant"
  },
  {
    "quote": "MarketIX's innovative strategies really boosted our sales.",
    "name": "James",
    "title": "Sales Director"
  },
  {
    "quote": "Amazing service, highly satisfied with MarketIX.",
    "name": "Mia",
    "title": "Freelancer"
  },
  {
    "quote": "MarketIX exceeded our expectations with their top-notch service.",
    "name": "Noah",
    "title": "Startup Founder"
  }
]


