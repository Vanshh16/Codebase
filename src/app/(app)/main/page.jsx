"use client";

import React, { useRef } from "react";
import cb from "@/assets/cb.png";
import bg1 from "@/assets/bg1.png";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";
import Carousel from "@/components/Carousel";
import { GlobeDemo } from "@/components/Globe";
import { Events } from "@/components/Events";
import { Vortex } from "@/components/ui/vortex";

function Main() {
  return (
    <>
      <div className="relative flex justify-center items-center w-auto min-h-screen bg-gradient">
        <div className="absolute inset-0 opacity-50"></div>

        <div className="w-full mt-20 md:mt-48 relative z-10 p-8 space-y-8 rounded-lg shadow-md">
          <div className="items-center flex flex-col lg:grid lg:grid-cols-2 lg:gap-10">
            <Image
              src={bg1}
              alt="Background Image"
              className="absolute mx-auto z-10 inset-0 w-[0%] h-auto md:w-full md:h-[40rem] opacity-10"
            />
            <div className="mx-auto md:mt-40 lg:my-auto space-y-4">
              <h1 className=" text-xl md:text-4xl md:ml-32 font-bold text-blue-800">
                IIIT KOTA
              </h1>
              <h2 className=" text-2xl md:text-6xl md:ml-32 tracking-widest font-extrabold text-white">
                CODEBASE
              </h2>
              <div className="w-[12rem] h-16 md:w-[40rem] md:h-40 relative">
                {/* Gradients */}
                <div className="absolute left-5 md:left-auto inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute left-5 md:left-auto inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute left-5 md:left-auto inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute left-5 md:left-auto inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="md:w-full h-20 md:h-40"
                  particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full custom-gradient [mask-image:radial-gradient(350px_200px_at_top,transparent_70%,white)]"></div>
              </div>
              <p className="text-slate-100 tracking-widest font-normal italic text-sm md:text-lg mt-4 my-4 md:ml-28">
                IIIT Kota's Open Source Technical Society champions cutting-edge
                open-source technologies within its vibrant academic community.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={cb}
                alt="Codebase Logo"
                className="w-40 animation md:w-96 h-auto z-20"
              />
            </div>
          </div>
          {/* <div className="h-40 bg-transparent flex flex-col items-center mx-auto space-y-4"></div> */}
          <div className="md:mt-80 rounded-xl bg-slate-950 p-5 md:p-8 flex flex-col items-center mx-auto space-y-4">
            {/* <h1 className="text-4xl font-bold text-blue-800">IIIT KOTA</h1> */}
            <h2 className="md:text-5xl text-2xl pt-2 md:tracking-wider font-semibold text-white">
              Who are we?
            </h2>
            <p className="text-slate-100 md:tracking-wide md:leading-8 font-normal text-sm md:text-lg my-4 md:mx-8">
              The Codebase club at IIIT Kota is a vibrant community dedicated to
              fostering creativity and innovation in the realm of technology.
              Comprising passionate students from diverse backgrounds, the club
              serves as a platform for learning, collaboration, and hands-on
              experience in coding and software development. Through workshops,
              hackathons, and regular coding challenges, Codebase encourages its
              members to explore cutting-edge technologies, refine their
              programming skills, and tackle real-world problems. The club not
              only emphasizes technical proficiency but also promotes teamwork
              and leadership, preparing its members to excel in the rapidly
              evolving tech industry. With a supportive and inclusive
              atmosphere, Codebase at IIIT Kota stands as a cornerstone for
              aspiring technologists to grow and thrive in their journey towards
              becoming proficient software developers and innovators.
            </p>
          </div>
          {/* <div className="md:mt-80 rounded-xl bg-gradient-to-b from-slate-950 to-slate-900 p-8 flex flex-col items-center mx-auto space-y-4"> */}
          <Events />
          {/* </div> */}
          <div className="md:mt-80 rounded-xl bg-gradient-to-b from-slate-950 to-slate-900 p-4 md:p-8 flex flex-col items-center mx-auto space-y-4">
            <h2 className="md:text-5xl text-2xl md:mb-4 md:tracking-widest font-semibold text-white">
              Gallery
            </h2>
            <Carousel />
          </div>
          <div
            id="contact-us"
            className="grid bg-black grid-cols-1 lg:grid-cols-2"
          >
            <GlobeDemo />
            <div className="p-4 md:p-8 bg-black rounded-lg">
              <h2 className="md:text-5xl ml-12 text-2xl md:ml-40 mt-20 tracking-widest font-extrabold text-white">
                Join Us
              </h2>
              <form className="my-auto">
                <label className="input text-sm input-bordered p-1 leading-3 font-medium m-4 flex items-center gap-2">
                  Name:
                  <input type="text" className="w-10"  placeholder="" />
                </label>
                <label className="input text-sm input-bordered p-1 leading-3 font-medium m-4 flex items-center gap-2">
                  Email:
                  <input type="text" className="w-10" placeholder="" />
                </label>
                <label className="input text-sm input-bordered p-1 leading-3 font-medium m-4 flex items-center gap-2">
                  Phone No.:
                  <input type="text" className="w-10" placeholder="" />
                </label>
                <label className="input text-sm input-bordered p-1 leading-3 font-medium m-4 flex items-center gap-2">
                  Reasons for contact:
                  <input type="text" className="w-10" placeholder="" />
                </label>
                <div className="flex items-center">
                  <button className="mx-auto p-2 w-28 text-white bg-slate-900 rounded-lg text-base">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
