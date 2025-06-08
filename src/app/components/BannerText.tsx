import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = [
    "Digital Marketing", 
    "Web Development", 
    "Social Media Management", 
    "Search Engine Optimization"
  ];

  return (
    <div className="h-[140px] sm:h-[120px] flex justify-center md:justify-start items-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
        <span>Unlock the Power of</span>
        <div className="mt-2 text-[#00ff00]">
          <FlipWords 
            words={words} 
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
          /> 
        </div>
      </div>
    </div>
  );
}
