"use client";
import React from 'react'
import { StickyScrollRevealDemo } from '@/components/FF';
import { LampContainer } from '@/components/ui/lamp';
import { motion } from "framer-motion";
import { ExpandableCardDemo } from '@/components/AlumniCard';
function Team() {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg -mt-6">
      <div className="w-full relative z-10 p-8 space-y-8 rounded-lg shadow-md">
        {/* <div className="items-center flex flex-col lg:grid lg:grid-cols-2 lg:gap-10"> */}
        <div className='pt-40'>
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
        Team
      </motion.h1>
      <StickyScrollRevealDemo />
    </LampContainer>    
      </div>
      <div className="text-center text-white shadow-md">
          <LampContainer>
            <h1 className="mt-96 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
              Past Members
            </h1>
            <div className="mt-8">
            <ExpandableCardDemo />
            </div>
          </LampContainer>
        </div>

      </div>
    </div>
  )
}

export default Team


