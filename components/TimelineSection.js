import React from "react";

function TimelineSection({ data }) {
  console.log("Timeline section data below:");
  console.log(data);
  const d = data;
  return (
    <div className="bg-gradient-to-tr from-pink-light to-pink text-white">
      <div className="cont space-y-4">
        <h2 className="text-3xl">{d.sectionTitle}</h2>
        <h3 className="text-xl">{d.sectionSubTitle}</h3>
        <div className="timelineCont flex flex-col">
          {d.timeline &&
            d.timeline.map((line, index) => (
              <div
                className={`w-51 border-white ${
                  index % 2 === 0 ? "ml-auto border-l-2 " : "border-r-2"
                }`}
                key={index}
              >
                <p>{line.dateHere}</p>
              </div>
            ))}
        </div>

        <h4 className="text-xl">{d.belowText}</h4>
        {d.link.map((link, index) => (
          <a href={link.link} target="_blank" className="m-2 " key={index}>
            <i className={`${link.fontAwesomeClass} text-white text-3xl`}></i>
            <p className="" key={index}>
              {link.linkText}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default TimelineSection;
