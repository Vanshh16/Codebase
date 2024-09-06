"use client"
import React from "react";
import { TeamCard } from "./ui/TeamCard";
import teamMembers from "@/helpers/teamMembers.json";
import FocusCards from "./ui/focus-cards";

function Teams() {
  return (
    <div>
      {teamMembers.map((content, index) => {
        return (
          <div key={index} className="bg-gradient-to-r from-slate-900 to-black shadow-lg shadow-slate-700 lg:w-[60rem] rounded-md py-2 lg:p-10 my-6">
            <h1 className="lg:text-3xl text-xl font-medium m-4 lg:mb-10">
              {" "}
              {content.team}
            </h1>
            <div className="grid grid-flow-row gap-6 md:grid-cols-2 lg:grid-flow-col">
              {/* {content.members.map((member, index) => (
            <TeamCard member={member} key={index} />
          ))} */}
              <FocusCards members={content.members} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Teams;
