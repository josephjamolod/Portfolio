import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

//react icons
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

//variants
import { menuVars } from "../variants/menuVars";
import { fadeIn } from "../variants/animationTemplate";

const navLinks = [
  { linkName: "Home", pathName: "/" },
  { linkName: "About", pathName: "/about" },
  { linkName: "Projects", pathName: "/projects" },
  { linkName: "Contact", pathName: "/contact" },
];

const socialLinks = [
  { link: <FaFacebook />, href: "https://www.facebook.com/jamolod.joseph" },
  {
    link: <FaInstagramSquare />,
    href: "https://www.instagram.com/jamolodjr.joseph/",
  },
  { link: <FaGithub />, href: "https://github.com/josephjamolod" },
];

export default function Header() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      // className="w-full py-10 px-8 md:px-16 flex justify-between items-center"
      className="w-full py-3 px-3 sm:py-10 sm:px-8 md:px-16 flex justify-between items-center "
    >
      <AnimatePresence>
        {menu && (
          <motion.div
            variants={menuVars(true)}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`fixed md:hidden top-0 h-screen w-full  left-0 origin-top bg-white dark:bg-gray-900 dark:text-white flex justify-center items-center flex-col z-30`}
          >
            <motion.ul
              variants={menuVars(false, true)}
              initial="initial"
              animate="open"
              exit="initial"
              className="absolute top-7 left-5 flex md:hidden justify-center gap-x-3 sm:gap-x-5 w-1/4"
            >
              {socialLinks.map((link, index) => {
                return (
                  <div key={index} className="overflow-hidden">
                    <motion.div variants={menuVars(false, false, true)}>
                      <a href={link.href}>{link.link}</a>
                    </motion.div>
                  </div>
                );
              })}
            </motion.ul>
            <motion.button
              variants={menuVars(false, true)}
              initial="initial"
              animate="open"
              exit="initial"
              className="absolute top-5 right-10 overflow-hidden  "
              onClick={() => setMenu(false)}
            >
              <div className=" overflow-hidden">
                <motion.div variants={menuVars(false, false, true)}>
                  <IoCloseSharp className="text-4xl text-gray-900 dark:text-white" />
                </motion.div>
              </div>
            </motion.button>

            <motion.ul
              variants={menuVars(false, true)}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col text-center gap-10"
            >
              {navLinks.map((link, index) => {
                return (
                  <div key={index} className="overflow-hidden">
                    <motion.div variants={menuVars(false, false, true)}>
                      <Link
                        className={`text-2xl ${
                          location.pathname === link.pathName &&
                          "font-semibold underline"
                        } `}
                        onClick={() => setMenu(false)}
                        to={link.pathName}
                      >
                        {link.linkName}
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between w-3/4 ">
        <div className="flex items-center text-gray-900 dark:text-neutral-300">
          <img className="h-12 " src={logo} alt="" />
          <h1 className="font-semibold ">| Portfolio</h1>
        </div>

        <ul className="hidden md:flex gap-x-7 text-sm  dark:text-neutral-300  transition duration-800">
          {navLinks.map((link, index) => {
            return (
              <Link
                key={index}
                className={`${
                  location.pathname === link.pathName && "underline"
                } hover:underline`}
                to={link.pathName}
              >
                {link.linkName}
              </Link>
            );
          })}
        </ul>
      </div>
      <div>
        <RiMenu3Fill
          onClick={() => setMenu(!menu)}
          className="text-2xl cursor-pointer md:hidden text-gray-900 dark:text-neutral-300 "
        />
      </div>

      <ul className="hidden md:flex justify-center gap-x-5 w-1/4 text-gray-900 dark:text-neutral-300 transition duration-800">
        {socialLinks.map((link, index) => {
          return (
            <a key={index} href={link.href}>
              {link.link}
            </a>
          );
        })}
      </ul>
    </motion.header>
  );
}
