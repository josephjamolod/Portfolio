import { useState } from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../variants/animationTemplate";

import Space from "../canvas/Space";
import StarsCanvas from "../canvas/Stars";
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
      <StarsCanvas />
      <div
        className={`flex flex-col justify-between items-center absolute ${
          big && "px-5 md:px-10"
        } ${
          big && "py-5 md:py-10"
        } top-2  overflow-hidden  left-1/2  -translate-x-1/2 lg:left-80  z-20 border border-slate-400 
        transition-all duration-500 ease-in-out transform  rounded ${
          big ? "w-5/6 sm:w-96 h-4/5 md:h-3/4" : "w-40 h-10"
        }`}
      >
        <button
          onClick={() => setBig(!big)}
          className=" flex flex-shrink items-center gap-x-1 font-semibold pt-1 text-gray-900"
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

      <div className="w-full ">
        <div className="absolute bottom-0 bg-black h-2/5 w-full" />
        <div className="absolute bottom-0 sm:h-5/6 h-40 black-gradient w-full" />
        <Space />
      </div>
    </motion.div>
  );
}
