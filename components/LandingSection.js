import React, {useState, useEffect, useRef, useContext} from "react";
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
import dynamic from "next/dynamic";

const ThreeD = dynamic(() => import("./ThreeD"), {ssr: false});

function LandingSection({data}) {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen mx-auto text-center bg-red-700 dark:bg-black dark:text-white">
      <div className="absolute top-0 z-0 w-full h-screen">
        <ThreeD />
      </div>
      <div className="z-10 w-11/12 py-4 space-y-3 bg-white bg-opacity-75 md:w-auto md:px-20 dark:bg-opacity-10">
        <h1 className="text-5xl">
          {data.mainTitle}
          <span className="block text-2xl">{data.subTitle}</span>
        </h1>

        {data &&
          data.button.map((button, index) => {
            if (index === 0) {
              return (
                <div
                  key={index}
                  className={`m-3 inline-block animate-bouncy relative animation-delay${index}`}
                >
                  <a
                    className="px-3 py-1 uppercase transition-all border border-black hover:bg-black dark:border-white hover:text-yellow duration-400 dark:hover:bg-white dark:hover:border-black dark:hover:text-black"
                    href={button.ButtonLink}
                    target={button.newTab ? "_blank" : "_self"}
                  >
                    {button.buttonText}
                  </a>
                </div>
              );
            }
          })}
      </div>
      <p className="absolute bottom-10 dark:text-white">scroll down</p>
      <i
        aria-hidden
        className="absolute bottom-0 text-2xl text-black dark:text-white fas fa-chevron-down animate-bounce"
      ></i>
    </div>
  );
}

export default LandingSection;
