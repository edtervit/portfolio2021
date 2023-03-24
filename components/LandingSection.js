import React, { useState, useEffect, useRef, useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import BIRDS from "vanta/dist/vanta.birds.min";

function LandingSection({ data }) {
  const darkMode = useContext(DarkModeContext);
  const [prevDarkMode, setPrevDarkMode] = useState(false);

  const d = data;

  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  
  useEffect(() => {
    if (!vantaEffect || darkMode !== prevDarkMode) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: darkMode ? 0x222220 : 0xfffaee,
          color1: darkMode ? 0x980000 : 0x4c4eff,
          color2: darkMode ? 0x5572 : 0xb567ff,
        })
      );
    }
    setPrevDarkMode(darkMode)
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, darkMode]);

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen mx-auto text-center bg-yellow dark:text-white"
      ref={myRef}
    >
      <div className="w-11/12 py-4 space-y-3 bg-white bg-opacity-75 md:w-auto md:px-20 dark:bg-black dark:bg-opacity-50">
        <h1 className="text-5xl">
          {d.mainTitle}
          <span className="block text-2xl">{d.subTitle}</span>
        </h1>

        {d &&
          d.button.map((button, index) => (
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
          ))}
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
