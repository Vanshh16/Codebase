"use client";

import Image from "next/image";
import React from "react";
import bg2 from "@/assets/bg2.jpg";
import { ThreeDCardDemo } from "@/components/ThreeDCard";
import projects from "@/helpers/projects.json";
import { LampDemo } from "@/components/Lamp";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Image
        src={bg2}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover opacity-5"
      />
      <div className="w-full relative z-10 p-8 space-y-8 rounded-lg shadow-md">
        <div className="text-center mt-20 text-white shadow-md">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent md:text-7xl"
          >
            Projects
            <p className="mb-4 text-4xl">By CodeBase</p>
          </motion.h1>
        </div>
        <div className="items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => {
            return (
              <div>
                <ThreeDCardDemo project={project} />
              </div>
            );
          })}
          {/* <div className="">
          <ThreeDCardDemo />
          </div>
          <div className="">
          <ThreeDCardDemo />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
