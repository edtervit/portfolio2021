import React from "react";

function SkillsSection({ data }) {
  return (
    <div className="bg-gradient-to-bl from-orange to-orange-light dark:from-[#1C0C5B] dark:to-[#3D2C8D] dark:bg-gradient-to-bl">
      <div className="text-white cont">
        <h2 className="text-3xl ">Skills</h2>
        {data &&
          data.skillSection &&
          data.skillSection.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full my-5"
            >
              <h3 className="mb-5 text-2xl">{section.title}</h3>
              <div className="flex flex-wrap items-center justify-center w-full p-4 border border-dashed rounded-md md:w-2/3 md:p-5">
                {section.iconsAndText &&
                  section.iconsAndText.map((icon, index) => (
                    <div key={index} className="flex-col w-1/2 my-5 md:w-1/3 ">
                      <i
                        aria-hidden
                        className={`${icon.fontAwesomeClassForIcon} text-4xl  
                        transition duration-500 transform hover:rotate-360`}
                      ></i>
                      <p className={`${icon.standout ? "font-bold" : ""}`}>
                        {icon.title}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SkillsSection;
