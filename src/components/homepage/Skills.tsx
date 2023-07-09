import React from "react";
import Skill from '@/components/homepage/Skill'

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl-px-10 justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute uppercase top-36 tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
      </div>
    </div>
  );
};

export default Skills;
