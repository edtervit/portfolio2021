import React, { useState } from "react";

function AboutSection({ data }) {
  const incorrectOrderBioArray = [
    data.bio1,
    data.bio2,
    data.bio3,
    data.bio4,
    data.bio5,
  ];
  const bioArray = incorrectOrderBioArray.reverse();

  const [bio, setBio] = useState(bioArray[2]);

  return (
    <div className="overflow-hidden px-0 py-5 w-full text-center md:p-10 flex flex-col  mx-auto flex-wrap max-w-screen-lg">
      <h2 className="text-3xl">About Me</h2>
      <div className="bg-gray p-4 md:p-10 my-10 text-white flex flex-wrap shadow-about md:w-full mx-auto w-11/12">
        <div className="w-full md:w-2/3 p-4 ">
          <h2 className="text-2xl">Bio</h2>
          <div className="flex  justify-center w-full my-2 items-center">
            <p className="mx-2">Shorter</p>
            {bioArray && (
              <>
                {bioArray.map((bioButton, index) => (
                  <div key={index}>
                    <i
                      aria-hidden
                      className={`far fa-circle text-2xl m-1 cursor-pointer  ${
                        bio === bioArray[index] ? "text-white" : "text-black"
                      } `}
                      onClick={() => setBio(bioArray[index])}
                    ></i>
                  </div>
                ))}
              </>
            )}
            <p className="mx-2">Longer</p>
          </div>
          <p className="  lg:h-36">{bio}</p>
          <h3 className="text-2xl mt-10 mb-3 md:my-3">Contact</h3>
          <div className="flex flex-wrap justify-center">
            {data && data.socialLink && (
              <>
                {data.socialLink.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    className="mx-5"
                  >
                    <i
                      aria-hidden
                      className={link.fontAwesomeClass + " text-4xl"}
                    ></i>
                  </a>
                ))}
              </>
            )}
          </div>
          <div className="space-y-1 mt-5">
            <p className="w-full">{data && data.location}</p>
            <p className="w-full">{data && data.email}</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4 flex ">
          <img
            className="rounded-2xl max-w-full my-auto"
            src={data.photo.url}
            alt="Portait of me, Ed"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
