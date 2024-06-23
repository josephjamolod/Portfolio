import React from "react";
import Swal from "sweetalert2";

import { FaExternalLinkAlt } from "react-icons/fa";

export default function WebInfo(props) {
  const info = props?.homeLink || props?.todoGrids || props?.portfolio;
  //   console.log(info);
  //   console.log(typeof props);

  async function showAlert() {
    await Swal.fire({
      title:
        "This may take 50 seconds or more due to the limitations of the free version.",

      icon: "info",
      confirmButtonText: "Continue",
      customClass: {
        confirmButton: "button-style",
        icon: "icon-style",
        title: "title-style",
      },
    });
    window.location.href = info.link;
  }

  return (
    <div className="pt-3">
      <div className="flex flex-col gap-y-2 dark:text-neutral-300">
        <button
          onClick={showAlert}
          className="font-semibold flex items-center gap-x-2 z-20 hover:underline"
        >
          {info.name}
          <FaExternalLinkAlt />
        </button>
        <h1>
          <span className="font-semibold">Stack : </span>
          {info.stack}
        </h1>
        <div className="flex flex-wrap gap-2">
          <span className="font-semibold">Libraries : </span>
          {info.libraries.map((tech, index) => {
            return (
              <p
                key={index}
                className="border border-gray-900 dark:border-neutral-300 px-1 font-semibold text-sm"
              >
                {tech}
              </p>
            );
          })}
        </div>
        <p>
          <span className="font-semibold">About : </span>
          {info.description}
        </p>
      </div>
    </div>
  );
}
