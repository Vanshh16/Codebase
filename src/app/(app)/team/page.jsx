"use client";
import React from "react";
import { StickyScrollRevealDemo } from "@/components/FF";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { ExpandableCardDemo } from "@/components/AlumniCard";
import Teams from "@/components/Teams";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import Link from "next/link";
function Team() {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg -mt-6">
      <div className="w-full relative z-10 p-8 rounded-lg shadow-md">
        {/* <div className="items-center flex flex-col lg:grid lg:grid-cols-2 lg:gap-10"> */}
        <div className="pt-40">
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-96 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              Leads
            </motion.h1>
            <StickyScrollRevealDemo />
          </LampContainer>
        </div>
        <div className="text-center text-white shadow-md">
          <LampContainer>
            <h1 className="mt-96 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
              Teams
            </h1>
            <div className="mt-8">
              <Teams />
            </div>
            <div className="text-left">
            <h1 className="mt-10 lg:ml-[-30rem] -mb-60 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-left text-4xl font-medium tracking-tight text-transparent md:text-7xl">
              <Link href="/alumni">Alumni <ArrowRight className="inline" size={48} color="#cbd5e1" /></Link>
              
              
              
            </h1>
            </div>
          </LampContainer>
        </div>
      </div>
    </div>
  );
}

export default Team;
