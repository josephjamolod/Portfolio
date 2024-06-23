import React, { useState } from "react";

export default function SpaceModeBtn() {
  //the "localStorage.setItem("state", JSON.stringify(!origValue));" wont work if we dont have this useState, no idea why
  const [darkMode, setDarkMode] = useState(false);

  const savedValue = localStorage.getItem("state") || false;
  const origValue = savedValue.toString() === "true" ? true : false;
  return (
    <button
      onClick={() => {
        setDarkMode(!darkMode);
        localStorage.setItem("state", JSON.stringify(!origValue));
      }}
      className=" absolute top-0 right-4 dark:text-white underline z-40"
    >
      SpaceMode
    </button>
  );
}
