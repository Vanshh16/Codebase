"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function TeamCard({member}) {

    
  return (
    (<div className="max-w-xs mx-auto w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card lg:h-72 lg:w-[80%] h-60 w-[90%] rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
        )}
        style={{
      backgroundImage: `url(${member?.image})`,
      backgroundSize: "cover",
    }}>
        <div
          className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex opacity-0 flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src={member?.image}
            className="h-10 w-10 rounded-full border-2 object-cover" />
          
        </div>
        <div className="text mt-8 content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {member?.name}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {member?.position}
          </p>
        </div>
      </div>
    </div>)
  );
}
