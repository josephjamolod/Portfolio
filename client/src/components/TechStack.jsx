import techLogos from "../constants/index";

import { motion } from "framer-motion";
import { fadeIn } from "../variants/animationTemplate";

export default function TechStack() {
  return (
    <div className="flex flex-col text-gray-900 dark:text-white transition duration-200 ">
      <h1 className="font-medium px-10 text-center">
        Software tools and technologies I've actively engaged with
      </h1>
      <div className="grid grid-cols-4 justify-center items-center py-10 gap-x-5 md:gap-x-10 gap-y-3 ">
        {techLogos.map((stack, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <img src={stack.logo} alt="" />
              <p className="text-sm font-semibold">{stack.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
