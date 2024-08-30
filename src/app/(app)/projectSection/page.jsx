"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardDemo } from "@/components/ProjectCard";

function ProjectSection() {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-zinc-950">
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
        <div className="flex space-y-6 rounded-lg py-6 md:grid md:grid-cols-3">
          <div className="pt-6 mx-auto">
            <CardDemo
              link1={
                "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]"
              }
              link2={
                "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExamRyejVnbDY2eW9pdXNvbnhhanpjZWhhcWJmcjh1eXdiMXltNjAzcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xkPSBrZBUeSevGhNrD/giphy.gif)]"
              }
              link3={
                "bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZtNTMwaG1lbWZlZmV4MnRtODdqbmZ4eXNtdmU1YmZhZ2IwYm9rZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7OXnY7MEDyBeE/giphy.gif)] bg-[length:318px_150px]"
              }
              title={"App Development"}
            />
          </div>
          <div className="mx-auto">
            <CardDemo
              link1={
                "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]"
              }
              link2={
                "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]"
              }
              link3={
                "bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmg5dGwyMTljdDh0aHEzeDUwZjUwd3cxYW4xbnE0bW4xaHVwZ2RxdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZgTR3UQ9XAWDvqy9jv/giphy.gif)] bg-[length:317px_150px]"
              }
              title={"Web Development"}
            />
          </div>
          <div>
            <CardDemo
              link1={
                "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnVpZ2p4bWRta3lpbWJiYzNxMTVlcW04NWxvNW16bGdza2NzajhxNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gdwJdym3VuXQr5OfAc/giphy.gif)]"
              }
              link2={
                "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnVpZ2p4bWRta3lpbWJiYzNxMTVlcW04NWxvNW16bGdza2NzajhxNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gdwJdym3VuXQr5OfAc/giphy.gif)]"
              }
              link3={
                "bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGpqM2JidHN2NnFsOWhzZnE4ODg5MzU3M25pcDhvaHNkMzhhYnd0ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ekpxga8QRJVFUBxQeL/giphy.gif)] bg-[length:400px_150px]"
              }
              title={"UI/UX"}
            />
          </div>
          <div className="mx-auto">
            <CardDemo
              link1={
                "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]"
              }
              link2={
                "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExamRyejVnbDY2eW9pdXNvbnhhanpjZWhhcWJmcjh1eXdiMXltNjAzcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xkPSBrZBUeSevGhNrD/giphy.gif)]"
              }
              link3={
                "bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2IzdzY2cG90NXRmMzRsMndhd284cXU1YjJkeHYyazVlZGwweDk1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4UzW8S83pWoKs/giphy.gif)] bg-[length:450px_150px]"
              }
              title={"Cyber Security"}
            />
          </div>
          <div className="mx-auto">
            <CardDemo
              link1={
                "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]"
              }
              link2={
                "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]"
              }
              link3={
                "bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDBteHhjbHk0MjJlOHlzamt6NDljNWJub3d5c3RwODl3cXc1cWhldyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i9bTrs5ChdMKZk1Z1K/giphy.gif)] bg-[length:325px_150px]"
              }
              title={"Cloud and ML"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
