"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
// import project from "/assets/project.jpg"
import leadMembers from "@/helpers/leadMembers.json";
import { TeamCard } from "./ui/TeamCard";
import { FocusCards } from "./ui/focus-cards";

const content = leadMembers;
export function StickyScrollRevealDemo() {
  return (
    <>
      <div className="hidden lg:block">
        <StickyScroll content={content} />
      </div>
      <div className=" lg:hidden">
        <div className="grid grid-flow-row gap-6 md:grid-cols-2">
          {/* {leadMembers.map((member, index) => (
            <TeamCard member={member} key={index} />
          ))} */}
          <FocusCards members={leadMembers} />
        </div>
      </div>
    </>
  );
}
