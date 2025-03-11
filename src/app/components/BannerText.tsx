import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Digital Marketing", "Web Development", "Social media management", "Search engine optimization"];

  return (
    <div className="h-[100px] flex justify-center items-center">
      <div className="md:text-4xl text-2xl mx-auto font-bold text-gray-300">
      Unlock the Power of <br />
        <FlipWords words={words} className="my-5 md:my-0 text-2xl md:text-4xl"/> 
      </div>
    </div>
  );
}
