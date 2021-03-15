import React, { useState } from "react";

function ProjectsSection({ data }) {
  console.log("Projects data:");
  console.log(data);

  const [projects, setProjects] = useState(data);
  const [showModal, setShowModal] = useState(false);

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
                    className={`bg-white w-10/12 mx-auto shadow-project rounded-lg p-4 space-y-4 flex flex-col ${
                      project.Featured && "border-2 border-orange "
                    } `}
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
                      className="text-white bg-blue py-2 px-4 block  max-w-max mx-auto uppercase"
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
                    <p onClick={() => setShowModal(false)}>{project.Title}</p>
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
