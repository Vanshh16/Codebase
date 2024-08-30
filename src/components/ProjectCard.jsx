"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function CardDemo({ link1, link2, link3, title }) {
  const l1 = link1;
  const l2 = link2;
  const l3 = link3;

  return (
    <div className="max-w-xs w-full bg-slate-950">
      <div
        className={`group w-full cursor-pointer overflow-hidden relative card h-80 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 
        ${l3} bg-no-repeat hover:bg-cover 
        ${l1} before:fixed before:inset-0 before:opacity-0 before:z-[-1] 
        ${l2}
        hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 transition-all duration-500`}
      >
        <div className="text relative z-50">
          <Link href="/projects" className="">
            <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
              {title}
            </h1>
            <p className="font-normal text-base text-gray-50 relative my-4">
              This card is for some special elements, like displaying background
              gifs on hover only.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

// https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif
// https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnVpZ2p4bWRta3lpbWJiYzNxMTVlcW04NWxvNW16bGdza2NzajhxNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gdwJdym3VuXQr5OfAc/giphy.gif

// https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDBteHhjbHk0MjJlOHlzamt6NDljNWJub3d5c3RwODl3cXc1cWhldyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i9bTrs5ChdMKZk1Z1K/giphy.gif
