import React from "react";

function SkillsSection({ data }) {
  return (
    <div className="bg-gradient-to-bl from-orange to-orange-light">
      <div className=" cont  text-white ">
        <h2 className="text-3xl ">Skills</h2>
        {data &&
          data.skillSection &&
          data.skillSection.map((section, index) => (
            <div
              key={index}
              className="w-full flex flex-col justify-center my-5 items-center"
            >
              <h3 className="text-2xl mb-5">{section.title}</h3>
              <div className="border-dashed border rounded-md flex justify-center items-center flex-wrap w-full md:w-2/3 md:p-5 p-4">
                {section.iconsAndText &&
                  section.iconsAndText.map((icon, index) => (
                    <div key={index} className="flex-col w-1/2 md:w-1/3 my-5  ">
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
