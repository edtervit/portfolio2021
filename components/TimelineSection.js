import React from "react";

function TimelineSection({ data }) {
  const d = data;
  console.log(d);
  return (
    <div className="bg-gradient-to-tr from-pink-light to-pink text-white pb-28">
      <div className="cont max-w-screen-xl  space-y-4">
        <h2 className="text-3xl max-w-screen-md mx-auto">{d.sectionTitle}</h2>
        <h3 className="text-xl max-w-screen-md mx-auto">{d.sectionSubTitle}</h3>
        <div className="timelineCont my-8! flex flex-col">
          {d.timeline &&
            d.timeline.map((line, index) => (
              <div
                className={`flex border-white  ${
                  index % 2 === 0
                    ? "md:w-1/2 ml-auto border-l-2 "
                    : "md:w-51 border-l-2 md:border-l-0  md:border-r-2"
                }`}
                key={index}
              >
                <p
                  className={`my-auto px-2 pt-4 border-dashed  border-b w-4/12 ${
                    index % 2 === 0
                      ? "text-left "
                      : "text-left md:text-right md:ml-auto md:order-2"
                  }`}
                >
                  {line.dateHere}
                </p>
                <div
                  className={`flex my-4 space-y-2 flex-col w- border-dashed border-white border rounded-lg p-4 w-8/12  ${
                    index % 2 === 0 ? " " : "order-1"
                  }`}
                >
                  <h4 className="text-xl">{line.title}</h4>
                  <p>{line.description}</p>
                  <div className="projectLinks flex flex-wrap justify-center ">
                    {line.links &&
                      line.links.map((link, index) => (
                        <a
                          href={link.link}
                          target="_blank"
                          className="m-2 "
                          key={index}
                        >
                          <i
                            className={`${link.fontAwesomeClass} text-white text-3xl`}
                          ></i>
                          <p className="max-w-xxs" key={index}>
                            {link.linkText}
                          </p>
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <a href={d.githubLink} className="my-4">
          <h4 className="text-xl max-w-screen-md mx-auto mb-4">
            {d.belowText}
          </h4>
          <div className="bg-white p-4 rounded-lg shadow-md m-4">
            <img
              className="w-full my-3"
              src={d.imgLink}
              alt="github commit graph of edtervit"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default TimelineSection;
