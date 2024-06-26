import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { MdContactPhone } from "react-icons/md";
import TechStack from "../components/TechStack";

import { motion } from "framer-motion";
import { fadeIn } from "../variants/animationTemplate";

export default function About() {
  return (
    <section className="px-10 flex flex-col lg:flex-row  justify-center  dark:bg-gray-800 dark:border-y overflow-hidden py-2">
      <div className="flex flex-1  flex-col w-full justify-center items-center  lg:pl-10 text-gray-900 dark:text-white transition duration-200 overflow-y-auto">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          className="flex flex-col w-5/6 justify-center lg:justify-start text-start py-5 "
        >
          <h1 className="font-bold text-4xl sm:text-6xl ">About Me</h1>
          <p className="m-5 font-semibold  text-sm sm:pt-5 self-center  leading-loose">
            I am a self-taught full-stack web developer with expertise in the
            MERN stack (MongoDB, Express.js, React, Node.js). I am dedicated in
            building dynamic, efficient, and scalable web applications, handling
            both front-end and back-end development with proficiency. My focus
            is on delivering seamless, user-friendly solutions that meet diverse
            needs. I thrive in collaborative environments and am committed to
            continuous learning and improvement. Feel free to contact me, let's
            work together!
          </p>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-x-5 mx-5 text-white   px-5 bg-gray-900 w-40 self-center md:self-start min-h-11 lg:min-h-14  hover:bg-white
           hover:border hover:border-gray-900 hover:text-gray-900 transition duration-300"
          >
            <MdContactPhone className="text-3xl" />
            Contact
          </Link>
          <div className="self-center flex flex-col justify-center sm:hidden">
            <p className="self-center py-2 font-medium text-sm text-slate-500">
              Tech Stacks
            </p>
            <ScrollLink
              to="techStack"
              smooth={true}
              duration={1000}
              className=" self-center scroll-smooth "
            >
              <div className="w-3 h-12 rounded-3xl border-2 border-slate-500 flex justify-center p-2">
                <motion.div
                  animate={{
                    y: [0, 22, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="h-2 w-2 rounded-full bg-slate-500 mb-1 absolute animate-pulse"
                />
              </div>
            </ScrollLink>
          </div>
        </motion.div>
      </div>
      {/* <div className="flex-1">red</div> */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        id="techStack"
        className="flex flex-col  items-center flex-1 px-5 lg:px-0  justify-center mt-10 lg:mt-0 dark:bg-gray-800 "
      >
        <TechStack />
      </motion.div>
    </section>
  );
}
