import React from "react";
import { motion } from "framer-motion";

import ExperienceCard from "@/components/homepage/ExperieceCard";

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex flex-col relative overflow-hidden md:flex-row text-left max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl text-center">
        Work Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default WorkExperience

