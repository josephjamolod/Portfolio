import { useState } from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../variants/animationTemplate";

import Space from "../canvas/Space";
import ContactForm from "../components/ContactForm";

import { FaHandPointRight } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

export default function Contact() {
  const [big, setBig] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className=" flex relative w-full h-screen mx-auto "
    >
      <div
        className="absolute flex justify-center   h-full  max-h-[800px] w-full md:w-1/2 
      overflow-hidden transition-all duration-500 "
      >
        <div
          className={`overflow-hidden flex flex-col justify-between items-center absolute backdrop-blur-md  ${
            big && "px-5 md:px-10"
          } ${
            big && "py-3 md:py-10"
          } top-2  overflow-hidden   z-10 border border-slate-400 
        transition-all duration-500 ease-in-out transform  rounded ${
          big ? " max-w-[384px] w-5/6 h-5/6  max-h-[600px]" : "w-40 h-10"
        } `}
        >
          <button
            onClick={() => setBig(!big)}
            className=" flex flex-shrink items-center pt-1 gap-x-1 text-sm sm:text-base font-semibold  text-gray-900 dark:text-white"
          >
            {!big && <FaHandPointRight className=" text-2xl animate-bounce" />}
            Get in touch{" "}
            {!big ? (
              <MdOutlineKeyboardDoubleArrowDown />
            ) : (
              <MdOutlineKeyboardDoubleArrowUp />
            )}
          </button>
          <ContactForm big={big} />
        </div>
      </div>

      <div className="w-full ">
        <div className="absolute bottom-0 bg-black h-2/5 w-screen" />
        <div className="absolute bottom-0 sm:h-5/6 h-40 black-gradient w-screen" />
        <Space />
      </div>
    </motion.div>
  );
}
