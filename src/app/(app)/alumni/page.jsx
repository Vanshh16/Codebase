import React from "react";
import { LampContainer } from "@/components/ui/lamp";
import { ExpandableCardDemo } from "@/components/AlumniCard";

function Alumni() {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg">
      <div className="w-full relative z-10 p-1 md:p-8 space-y-8 rounded-lg shadow-md">
        <div className="text-center mt-20 text-white shadow-md">
          <LampContainer>
            <h1 className="mt-96 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
              Alumni
            </h1>
            <div className="">
            <ExpandableCardDemo />
            </div>
          </LampContainer>
        </div>
      </div>
    </div>
  );
}

export default Alumni;
