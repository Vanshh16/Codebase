"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
// import project from "/assets/project.jpg"
import teamMember from "@/helpers/teamMembers.json"

const content = teamMember;
export function StickyScrollRevealDemo() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
