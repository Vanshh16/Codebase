"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(({ member, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden md:h-60 lg:h-72 h-40 w-[10rem] md:w-[15rem] lg:w-[15rem] transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <Image
      src={member?.image}
      alt={member?.name}
      height={1000}
      width={1000}
      className=" h-full w-full absolute inset-0"
    />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
          {member?.name}
        </h1>
        <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          {member?.position}
        </p>
      </div>
    </div>
  </div>
));

Card.displayName = 'Card';

export function FocusCards({ members }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-24 my-4 md:px-2 w-screen">
      {members.map((member, index) => (
        <Card
          key={member.name}
          member={member}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
