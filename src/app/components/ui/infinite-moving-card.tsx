"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string;
    url: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Create enough duplicates for seamless loop
      for (let i = 0; i < 3; i++) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      }
    }
  };
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-10 w-full overflow-hidden",
        className
      )}
      style={{
        maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)"
      }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll-smooth",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animation: start ? `scroll var(--animation-duration, 20s) linear infinite` : 'none'
        }}
      >
        {items.map((item, idx) => (
          <li
            className="w-[200px] h-[500px] max-w-full relative bg-black rounded-2xl border-2 border-b-[1px] border-[#00FF00] shrink-0 md:w-[200px] md:h-[300px] transition-transform duration-300 hover:scale-105 overflow-hidden"
            key={item.url + idx}
          >
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="block h-full">
              <Image
                width={1000}
                height={1000} 
                src={item.image} 
                alt={item.title || "Service image"} 
                className="w-full h-full rounded-xl object-cover"
              />
            </a>
          </li>
        ))}
      </ul>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-smooth {
          animation: scroll var(--animation-duration, 20s) linear infinite;
        }
      `}</style>
    </div>
  );
};