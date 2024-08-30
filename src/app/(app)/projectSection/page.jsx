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
                "bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXI4enRqbXk4OWVrNG1kcWw5dm11anYxb2RheTczcjVvYWFqZDF2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5U4uFPfUv93W/giphy.gif)] bg-[length:318px_150px]"
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
                "bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWFhN2E5aTljNGd5NDF1OGhxZWo2am42MzA1aDNtYjRlaHczbnYyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U5OgQSxhzjR1t4McGc/giphy.gif)] bg-[length:317px_150px]"
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
                "bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3BsMXQ2bGFpdjY1aWx6Zml6NHdheG41ODdsa2lxMGcwaGJoYnpxdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26xBAcAeAQ2PmzQnS/giphy.gif)] bg-[length:400px_150px]"
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
                "bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2FwaWU4cnZkdjZkZXh1a2Jud3h0OXFlZmtpdGZiZzAxenVmbXlscyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/077i6AULCXc0FKTj9s/giphy.gif)] bg-[length:320px_150px]"
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
                "bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWZjaWwyMmlsY2M3M2ZmaHJtOWJ2dzg0d3dqd3E1Z2NsZ254djU1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QKDpE67Rc7rpjBmQPj/giphy-downsized-large.gif)] bg-[length:325px_150px]"
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
