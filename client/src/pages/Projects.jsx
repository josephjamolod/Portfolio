import { motion } from "framer-motion";
import { useState } from "react";

import { homeLink, todoGrids, portfolio } from "../constants/webInfos";

import img1 from "../assets/projectsImg/image1.png";
import img2 from "../assets/projectsImg/image2.png";
import img3 from "../assets/projectsImg/image3.png";
import webImg1 from "../assets/projectsImg/webImg1.png";
import webImg2 from "../assets/projectsImg/webImg2.png";
import webImg3 from "../assets/projectsImg/webImg3.png";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { fadeIn } from "../variants/animationTemplate";
import WebInfo from "../components/WebInfo";
import StarsCanvas from "../canvas/Stars";

const mobileImgs = [img1, img2, img3];
const browserImgs = [webImg1, webImg2, webImg3];

export default function Projects() {
  // console.log(homeLink);
  // console.log(todoGrids);
  // console.log(portfolio);
  const [curr, setCur] = useState(0);

  const prev = () => {
    setCur(curr === 0 ? browserImgs.length - 1 : curr - 1);
  };

  const next = () => {
    setCur(curr === browserImgs.length - 1 ? 0 : curr + 1);
  };
  return (
    <div className="flex h-auto px-5 mt-10 lg:mt-0   lg:px-20  w-screen  ">
      {/* <div className="absolute  h-full w-full  -z-20 dark:bg-gray-900 ">
        <StarsCanvas />{" "}
      </div> */}
      <div className=" top-0 left-0 bottom-0 fixed  h-full w-full  -z-20 dark:bg-gray-900">
        <StarsCanvas />
      </div>

      <div className=" flex flex-1 justify-start items-center overflow-hidden relative gap-x-20">
        <div className="hidden max-w-[400px] lg:flex flex-1 overflow-hidden">
          <div
            className="flex  w-full "
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {mobileImgs.map((mobileImg, index) => {
              return (
                <motion.img
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  className=""
                  src={mobileImg}
                  key={index}
                  alt="mobile-image"
                />
              );
            })}
          </div>
        </div>

        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          className="relative px-7 pb-5 flex justify-center items-center flex-col flex-1 h-auto border border-slate-700 dark:border-neutral-300 rounded-2xl overflow-hidden "
        >
          <div className=" w-5/6 h-full overflow-hidden">
            <div className="z-10 absolute inset-0 flex items-center justify-between ">
              <button
                onClick={prev}
                className="p-1 rounded-full shadow bg-white-100 text-gray-800 dark:text-neutral-300  hover:bg-slate-200 dark:hover:text-gray-700 transition-colors duration-200"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={next}
                className="p-1 rounded-full shadow bg-white-100 text-gray-800 dark:text-neutral-300 hover:bg-slate-200 dark:hover:text-gray-700 transition-colors duration-200"
              >
                <FaChevronRight />
              </button>
            </div>
            <div
              style={{ transform: `translateX(-${curr * 100}%)` }}
              className={`flex transition-transform  ease-out duration-1000 py-1 `}
            >
              {browserImgs.map((browserImg, index) => {
                return (
                  <img
                    key={index}
                    className="rounded-lg border border-slate-700 dark:border-neutral-300"
                    src={browserImg}
                    alt="browser-image absolute"
                  />
                );
              })}
            </div>
          </div>
          <div>
            <div className="text-start border-t border-t-slate-700 dark:border-neutral-300">
              {curr === 0 ? (
                <WebInfo homeLink={homeLink} />
              ) : curr === 1 ? (
                <WebInfo todoGrids={portfolio} />
              ) : (
                <WebInfo portfolio={todoGrids} />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
