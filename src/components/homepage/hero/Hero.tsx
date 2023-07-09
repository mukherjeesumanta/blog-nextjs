import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import BackgroundCircles from "@/components/homepage/BackgroundCircles";
import styles from "./Hero.module.css";
import heroImg from "@/assets/img/profile.png";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, the name's Sumanta Mukherjee",
      "The guy who loves Coffee!",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={heroImg}
        alt="Hero Image"
        className="relative rounded-full h-32 w-32 mx-auto"
      />
      <div className="z-20">
        <p className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </p>
        <h2 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 text-[#fff]">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h2>
        <div className="pt-5">
          <Link href={"#about"}>
            <button className={`${styles.heroButton} cursor-pointer`}>
              About
            </button>
          </Link>
          <Link href="#workexperience">
            <button className={`${styles.heroButton} cursor-pointer`}>
              Experience
            </button>
          </Link>
          <Link href="#skills">
            <button className={`${styles.heroButton} cursor-pointer`}>
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button className={`${styles.heroButton} cursor-pointer`}>
              Projects
            </button>
          </Link>
          <Link href={`/media-center`}>
            <button className={`${styles.heroButton} cursor-pointer`}>
              Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
