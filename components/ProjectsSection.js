import React, { useState, useEffect } from "react";

function ProjectsSection({ data }) {
  const [projects, setProjects] = useState(data);
  const [showModal, setShowModal] = useState(false);

  //disables page scrolling modal popup
  useEffect(() => {
    const documentWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    const scrollBarWidth = windowWidth - documentWidth;

    if (showModal) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    }
  }, [showModal]);

  return (
    <div className="bg-gradient-to-tr from-blue to-blue-dark" id="projects">
      <div className="cont max-w-screen-xl text-white">
        <h2 className="text-3xl">Projects</h2>
        <p className="my-4">Filter</p>
        <div className="space-x-4 ">
          <a
            className="tag"
            onClick={() =>
              setProjects(data.filter((project) => project.personal))
            }
          >
            personal
          </a>
          <a
            className="tag"
            onClick={() =>
              setProjects(data.filter((project) => !project.personal))
            }
          >
            work
          </a>
          <a className="tag" onClick={() => setProjects(data)}>
            all
          </a>
        </div>
        <div className="flex flex-wrap justify-center mt-8">
          {projects &&
            projects[0] &&
            projects.map((project, index) => (
              <>
                <div
                  className=" w-full md:w-1/2 xl:w-1/3 my-8 text-black"
                  key={index}
                  personal={project.personal.toString()}
                >
                  <div
                    className={`bg-white w-10/12 mx-auto shadow-project rounded-lg p-4 space-y-4 flex flex-col cursor-pointer ${
                      project.Featured && "border-2 border-orange "
                    } `}
                    onClick={() => setShowModal(index + 1)}
                  >
                    <h3 className="text-2xl ">{project.Title}</h3>
                    <div className="bg-blue w-3/4 h-0.5 mx-auto mt-1!"></div>
                    {project.Thumbnail && (
                      <img
                        className="border-blue border-2 rounded-xl mb-4"
                        src={project.Thumbnail.url}
                        alt=""
                      />
                    )}
                    <p class-Name="">{project.shortSummary}</p>
                    <a
                      className="text-white bg-blue py-2 px-4 block  max-w-max mx-auto uppercase cursor-pointer"
                      onClick={() => setShowModal(index + 1)}
                    >
                      learn more
                    </a>
                    <div className="tags flex flex-wrap justify-center ">
                      {project.technologiesTags &&
                        project.technologiesTags.map((tag, index) => (
                          <p
                            className="tag text-xs m-1 border-blue"
                            key={index}
                          >
                            {tag.aTag}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
                {showModal && showModal === index + 1 && (
                  <>
                    <div
                      className=" bg-blue bg-opacity-30 top-0 left-0 h-full w-full  fixed z-10 overflow-y-auto flex pt-4"
                      onClick={() => setShowModal(false)}
                    >
                      <div
                        className="bg-white block m-auto w-11/12 md:w-10/12 text-black p-5 space-y-4 relative max-w-screen-lg"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <i
                          className="fas fa-times absolute right-4 md:right-8 cursor-pointer text-2xl text-blue"
                          onClick={() => setShowModal(false)}
                        ></i>
                        <h3 className="text-3xl">{project.Title}</h3>
                        <div className="bg-blue w-3/4 h-0.5 mx-auto mt-1!"></div>
                        <div className="w-full md:w-3/5 mx-auto">
                          <div className="projectLinks flex flex-wrap justify-center ">
                            {project.projectLinks &&
                              project.projectLinks.map((link, index) => (
                                <a
                                  href={link.link}
                                  target="_blank"
                                  className="m-2 "
                                  key={index}
                                >
                                  <i
                                    className={`${link.fontAwesomeClass} text-blue text-3xl`}
                                  ></i>
                                  <p className="max-w-xxs" key={index}>
                                    {link.linkText}
                                  </p>
                                </a>
                              ))}
                          </div>
                          <div className="tags flex flex-wrap justify-center my-4 ">
                            {project.technologiesTags &&
                              project.technologiesTags.map((tag, index) => (
                                <p
                                  className="tag text-xs m-1 border-blue"
                                  key={index}
                                >
                                  {tag.aTag}
                                </p>
                              ))}
                          </div>
                          <p>{project.fullSummary}</p>
                        </div>
                        {project.screenshots &&
                          project.screenshots.map((image, index) => (
                            <div className="my-10!" key={index}>
                              <img
                                src={image.screenshot[0].url}
                                alt={image.screenshot[0].alternativeText}
                                className="shadow-lg"
                              />
                              <p className="pt-4">{image.screenshotText}</p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </>
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
