import React from "react";
import { motion } from "framer-motion";
import img from "@/assets/img/profile.png";

type Props = {};

export default function About({}: Props) {
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
      className="flex flex-col relative text-center h-screen md:flwx-row md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        src="https://media.licdn.com/dms/image/D5603AQG-OxbdN9BeKA/profile-displayphoto-shrink_800_800/0/1673692653935?e=1694044800&v=beta&t=GqiQVt98ZaF9KmxZfhHQRO8EB_YFytNhQp3VeVhoYpo"
        className="-mb-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold text-[#fff]">
          Here is a little background
        </h4>
        <p className="text-base text-[#fff]">
          This is Sumanta. I have over 13 years of experience in software
          industry including front-end, back-end & full-stack web development. I
          currently work in IBM corp. as an UI architect. My job roles include:
          solutioning, team leading, development.{" "}
        </p>
      </div>
    </motion.div>
  );
}
