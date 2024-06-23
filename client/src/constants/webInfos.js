const homeLink = {
  name: "HomeLink",
  link: import.meta.env.VITE_HOME_LINK,
  stack: "MERN + Tailwind, Firebase",
  libraries: [
    "react-redux",
    "react-router-dom",
    "axios",
    "@tanstack/react-query",
  ],
  description:
    "HomeLink is a real estate website where you can buy and sell property. You can create an account using your email and use authentication features to update your info and profile.",
};

const todoGrids = {
  name: "TodoGrids",
  link: import.meta.env.VITE_TODO_GRIDS,
  stack: "MERN + Tailwind, Firebase, Nodemailer",
  libraries: [
    "react-redux",
    "react-router-dom",
    "axios",
    "react-hook-form",
    "yup",
  ],
  description:
    "TodoGrids is a task management application that allows users to create, update, and manage their to-do lists with various authentication features.",
};

const portfolio = {
  name: "Portfolio",
  link: import.meta.env.VITE_PORTFOLIO,
  stack: "React + Tailwind",
  libraries: [
    "emailjs",
    "framer-motion",

    "three",
    "react-router-dom",
    "react-hook-form",
    "yup",
  ],
  description:
    "Portfolio is a personal website to showcase projects and skills. It includes features for contacting the owner through forms, and dynamic animations.",
};

export { homeLink, todoGrids, portfolio };
