import React from "react";
import Navbar from '@/components/navbar/Navbar'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      
      <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            url="https://www.linkedin.com/in/sumanta-mukherjee-18a88b21/"
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
          <SocialIcon
            url="https://www.facebook.com/its.sumanta"
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
        </motion.div>
        {/* <Navbar /> */}
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            url="mailto:sumanta.mukherjee.kat@gmail.com"
            network="email"
            className="cursor-pointer"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </header>
    </>
  );
}
