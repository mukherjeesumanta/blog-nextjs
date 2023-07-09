import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperieceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[80vw] sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 md:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 founded-full xl:w-[200px] xl:w-[200px] object-cover object-center"
        src="https://media.licdn.com/dms/image/D5603AQG-OxbdN9BeKA/profile-displayphoto-shrink_800_800/0/1673692653935?e=1694044800&v=beta&t=GqiQVt98ZaF9KmxZfhHQRO8EB_YFytNhQp3VeVhoYpo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light text-white">UI Architect</h4>
        <p className="font-bold text-2xl mt-1 text-white">IBM Inc.</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src={"https://cdn-icons-png.flaticon.com/128/875/875209.png"}
          />
          <img
            className="h-10 w-10 rounded-full"
            src={"https://cdn-icons-png.flaticon.com/128/875/875209.png"}
          />
          <img
            className="h-10 w-10 rounded-full"
            src={"https://cdn-icons-png.flaticon.com/128/875/875209.png"}
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... - Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li className="text-white">Summary Points</li>
          <li className="text-white">Summary Points</li>
          <li className="text-white">Summary Points</li>
          <li className="text-white">Summary Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperieceCard;
