import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import { motion } from "framer-motion";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { fadeIn } from "../variants/animationTemplate";

export default function Home() {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      className="flex flex-col lg:flex-row gap-y-5 justify-center xl:mt-20 lg:px-20 xl:px-40 2xl:px-60"
    >
      <div className="flex flex-col flex-1 mt-10 px-5 items-center text-center lg:items-start lg:text-start lg:pl-20 lg:pr-0 xl:pl-40 2xl:pl-60 ">
        <p
          className={` text-black font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 `}
        >
          Hi there, I'm
        </p>
        <h1 className="font-bold text-5xl md:text-6xl lg:text-8xl">Joseph</h1>
        <p className=" my-5 font-semibold max-w-80 text-sm sm:text-base  pt-5">
          A full stack web developer specializing in creating dynamic and
          responsive web applications.
        </p>
        <p className="text-sm md:text-base font-semibold max-w-80">
          Explore my projects to see how I bring ideas to life.
        </p>
        <Link
          to="/projects"
          className="text-white mt-5  px-5 bg-gray-900 min-h-10 lg:min-h-14 flex items-center justify-center gap-2 hover:bg-white  hover:border hover:border-gray-900 hover:text-gray-900 transition duration-300"
        >
          See Projects
          <MdOutlineKeyboardDoubleArrowRight className="text-2xl" />
        </Link>
      </div>
      <div className="flex flex-1 px-5 lg:px-0 justify-center 2xl:justify-start 2xl:flex-auto 2xl:pl-32">
        <img className="max-h-96" src={hero} alt="hero" />
      </div>
    </motion.div>
  );
}
