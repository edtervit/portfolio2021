import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";

function LandingSection({ data }) {
  const d = data;

  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xfffaee,
          color1: 0x4c4eff,
          color2: 0xb567ff,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      className="mx-auto text-center h-screen bg-yellow flex flex-col justify-center items-center relative"
      ref={myRef}
    >
      <div className="bg-white bg-opacity-75 py-4 w-11/12  md:w-auto md:px-20  space-y-3">
        <h1 className="text-5xl">
          {d.mainTitle}
          <span className="text-2xl block">{d.subTitle}</span>
        </h1>

        {d &&
          d.button.map((button, index) => (
            <div
              key={index}
              className={`m-3 inline-block animate-bouncy relative animation-delay${index}`}
            >
              <a
                className=" uppercase border border-black py-1 px-3  hover:bg-black hover:text-yellow transition-all duration-400 "
                href={button.ButtonLink}
              >
                {button.buttonText}
              </a>
            </div>
          ))}
      </div>
      <p className="absolute bottom-10">scroll down</p>
      <i
        aria-hidden
        className="fas fa-chevron-down text-2xl  text-black animate-bounce absolute bottom-0"
      ></i>
    </div>
  );
}

export default LandingSection;
