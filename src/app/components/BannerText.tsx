import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Digital Marketing", "Web Development", "Social media management", "Search engine optimization"];

  return (
    <div className="h-[100px] flex justify-center items-center">
      <div className="text-4xl mx-auto font-normal text-gray-300">
      Unlock the Power of
        <FlipWords words={words} /> 
      </div>
    </div>
  );
}
