import React, { useState, useEffect } from "react";

function ProjectsSection({ data }) {
  //function to sort the projects by the order value in object.
  function compare(a, b) {
    const bandA = a.Order;
    const bandB = b.Order;

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }

  data.sort(compare);

  const [projects, setProjects] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState(null); //personal, work, all

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

  const handleFilter = (filterSelection) => {
    switch (filterSelection) {
      case 'personal':
        setFilter('personal')
        setProjects(data.filter((project) => project.personal))
        break;

      case 'work':
        setFilter('work')
        setProjects(data.filter((project) => !project.personal))
        break;
        
      case null:
        setFilter(null)
        setProjects(data)
        break;

       default:
        break;
    }

  };

  return (
    <div className="bg-gradient-to-tr from-blue to-blue-dark dark:from-[#082032] dark:to-[#334756] dark:bg-gradient-to-tr" id="projects">
      <div className="max-w-screen-xl text-white cont">
        <h2 className="text-3xl">Projects</h2>
        <p className="my-4">Filter</p>
        <div className="space-x-4 ">
          <a
            className={`cursor-pointer tag ${filter == 'personal' && 'bg-orange'}`}
            onClick={() => handleFilter('personal')}
          >
            personal
          </a>
          <a
            className={`cursor-pointer tag ${filter == 'work' && 'bg-orange'}`}
            onClick={() => handleFilter('work')}
          >
            work
          </a>
          <a className={`cursor-pointer tag ${filter == null && 'bg-orange'}`} onClick={() => handleFilter(null)}>
            all
          </a>
        </div>
        <div className="flex flex-wrap justify-center mt-8">
          {projects &&
            projects[0] &&
            projects.map((project, index) => (
              <React.Fragment key={index}>
                <div
                  className="flex w-full my-8 text-black md:w-1/2"
                  key={index}
                  personal={project.personal.toString()}
                >
                  <div
                    className={`bg-white w-10/12 mx-auto shadow-project rounded-lg p-4 space-y-4 flex flex-col cursor-pointer dark:bg-[#082032] dark:text-white ${project.Featured && "border-2 border-orange "
                      } `}
                    onClick={() => setShowModal(index + 1)}
                  >
                    <h3 className="text-2xl ">{project.Title}</h3>
                    <div className="bg-blue dark:bg-[#2C394B] w-3/4 h-0.5 mx-auto mt-1!"></div>
                    {project.Thumbnail && (
                      <img
                        className="w-full mb-4 border-2 border-blue rounded-xl"
                        src={project.Thumbnail.url}
                        alt=""
                      />
                    )}
                    <p className="flex-grow">{project.shortSummary}</p>
                    <a
                      className="block px-4 py-2 mx-auto text-white uppercase cursor-pointer bg-blue dark:bg-[#2C394B] max-w-max"
                      onClick={() => setShowModal(index + 1)}
                    >
                      learn more
                    </a>
                    <div className="flex flex-wrap justify-center tags ">
                      {project.technologiesTags &&
                        project.technologiesTags.map((tag, index) => (
                          <p
                            className="m-1 text-xs tag border-blue"
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
                      className="fixed top-0 left-0 z-10 flex w-full h-full pt-4 overflow-y-auto bg-blue dark:bg-[#2C394B] bg-opacity-30"
                      onClick={() => setShowModal(false)}
                    >
                      <div
                        className="relative block w-11/12 max-w-screen-lg p-5 m-auto space-y-4 text-black bg-white dark:bg-gray dark:text-white md:w-10/12"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <i
                          className="absolute text-2xl cursor-pointer fas fa-times right-4 md:right-8 text-blue"
                          onClick={() => setShowModal(false)}
                        ></i>
                        <h3 className="text-3xl">{project.Title}</h3>
                        <div className="bg-blue  w-3/4 h-0.5 mx-auto mt-1!"></div>
                        <div className="w-full ">
                          <div className="flex flex-wrap justify-center projectLinks ">
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
                          <div className="flex flex-wrap justify-center my-4 tags ">
                            {project.technologiesTags &&
                              project.technologiesTags.map((tag, index) => (
                                <p
                                  className="m-1 text-xs tag border-blue"
                                  key={index}
                                >
                                  {tag.aTag}
                                </p>
                              ))}
                          </div>
                          <p className="mx-auto md:w-3/5">
                            {project.fullSummary}
                          </p>
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
                          {project.video_url &&
                            <div>
                              <video src={project.video_url} controls={true} />
                            </div>
                            }
                      </div>
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
