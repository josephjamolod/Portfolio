import { useState } from "react";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import RootLayout from "./components/RootLayout";
import StarsCanvas from "./canvas/Stars";

export default function App() {
  //the "localStorage.setItem("state", JSON.stringify(!origValue));" wont work if we dont have this useState, no idea why
  const [darkMode, setDarkMode] = useState(false);

  const savedValue = localStorage.getItem("state") || false;
  const origValue = savedValue.toString() === "true" ? true : false;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <div className={`${origValue && "dark"}`}>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
          localStorage.setItem("state", JSON.stringify(!origValue));
        }}
        className=" absolute top-0 right-4 dark:text-white underline z-40"
      >
        SpaceMode
      </button>

      <div className=" h-screen ">
        <div className="absolute h-screen  w-screen -z-10 dark:bg-gray-900">
          {origValue && <StarsCanvas />}
        </div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
