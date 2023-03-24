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
    <div className="dark:bg-gray">
    <div className="flex flex-col flex-wrap max-w-screen-lg px-0 py-5 mx-auto overflow-hidden text-center md:p-10 ">
      <h2 className="text-3xl dark:text-white">About Me</h2>
      <div className="flex flex-wrap w-11/12 p-4 mx-auto my-10 text-white dark:bg-slate-700 bg-gray md:p-10 shadow-about md:w-full">
        <div className="w-full p-4 md:w-2/3 ">
          <h2 className="text-2xl">Bio</h2>
          <div className="flex items-center justify-center w-full my-2">
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
          <p className=" lg:h-40">{bio}</p>
          <h3 className="mt-10 mb-3 text-2xl md:my-3">Contact</h3>
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
          <div className="mt-5 space-y-1">
            <p className="w-full">{data && data.location}</p>
            <p className="w-full">{data && data.email}</p>
          </div>
        </div>
        <div className="flex w-full p-4 md:w-1/3 ">
          <img
            className="max-w-full my-auto rounded-2xl"
            src={data.photo.url}
            alt="Portait of me, Ed"
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutSection;
