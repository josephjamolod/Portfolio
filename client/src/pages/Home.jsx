import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import { motion } from "framer-motion";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { fadeIn } from "../variants/animationTemplate";
import StarsCanvas from "../canvas/Stars";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center h-auto w-screen">
      {/* <div className="absolute bg-red-100 h-auto w-screen -z-20 dark:bg-gray-900"></div> */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        className=" flex flex-col justify-center xl:justify-center lg:flex-row gap-y-5 h-auto w-full  max-h-[750px] "
      >
        <div className="absolute  h-full w-full  -z-20 dark:bg-gray-900 ">
          <StarsCanvas />{" "}
        </div>
        <div className="flex flex-col  md:flex-row md:px-20  max-w-[1280px] text-gray-900 dark:text-white transition duration-200">
          <div className="flex flex-1 justify-center items-start pt-10">
            <div className=" flex flex-col items-center text-center md:text-start md:items-start px-5">
              <p
                className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] `}
              >
                Hi there, I'm
              </p>
              <h1 className="font-bold text-5xl md:text-6xl lg:text-8xl">
                Joseph
              </h1>
              <p className=" my-5 font-semibold max-w-80 text-sm sm:text-base  pt-5">
                A full stack web developer specializing in creating dynamic and
                responsive web applications.
              </p>
              <p className="text-sm md:text-base font-semibold max-w-80">
                Explore my projects to see how I bring ideas to life.
              </p>
              <Link
                to="/projects"
                className="text-white dark:text-gray-900 mt-10 px-5 bg-gray-900 dark:bg-white min-h-10 lg:min-h-14 flex
                 items-center justify-center gap-2 hover:bg-white dark:hover:bg-gray-900  hover:border hover:border-gray-900 dark:border-white hover:text-gray-900
                  dark:hover:text-white transition duration-300 font-medium"
              >
                See Projects
                <MdOutlineKeyboardDoubleArrowRight className="text-2xl" />
              </Link>
            </div>
          </div>

          <div className="relative  flex flex-shrink justify-center items-start pt-10  ">
            <img
              className=" object-cover h-60 min-h-[300px] overflow-hidden "
              src={hero}
              alt="hero"
            />
            {/* <div className="absolute  h-full w-screen -z-20 dark:bg-gray-900">
              <StarsCanvas /> red
              </div> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
