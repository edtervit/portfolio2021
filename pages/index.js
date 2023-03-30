import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";
import { DarkModeContext } from "../components/context/DarkModeContext";

//import the sections after their data has loaded with get static props
const LandingSection = dynamic(() => import("../components/LandingSection"));
const AboutSection = dynamic(() => import("../components/AboutSection"));
const ProjectsSection = dynamic(() => import("../components/ProjectsSection"));
const SkillsSection = dynamic(() => import("../components/SkillsSection"));
const FooterSection = dynamic(() => import("../components/FooterSection"));
const TimelineSection = dynamic(() => import("../components/TimelineSection"));

export default function Home({
  projectsData,
  aboutSectionData,
  skillsSectionData,
  landingSectionData,
  footerSectionData,
  timelineSectionData,
}) {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    darkMode ? document.documentElement.classList.remove("dark") : document.documentElement.classList.add("dark");
  };


  return (
    <div>
      <Head>
        <title>Ed Tervit - Web Developer</title>
        <meta
          name="description"
          content="Ed Tervit. Full stack junior web developer based in Cambridge, United Kingdom. "
        />
      </Head>

      <main>
        <div onClick={() => handleDarkModeToggle()} className={`fixed top-0 z-20 flex items-center justify-center w-12 h-12 text-center bg-black bg-opacity-50 rounded-b-sm cursor-pointer right-1 drop-shadow-md text-white dark:bg-white dark:shadow-white dark:bg-opacity-50 `} >
          {darkMode ? <i aria-hidden="true" className="text-4xl text-black transition duration-500 transform fa-solid fa-moon hover:rotate-360"></i> : <i aria-hidden="true" className="text-3xl text-white transition duration-500 transform fa-solid fa-sun hover:rotate-360"></i>}
        </div>
        <DarkModeContext.Provider value={darkMode}>
          <LandingSection data={landingSectionData} />
          <AboutSection data={aboutSectionData} />
          <ProjectsSection data={projectsData} />
          <SkillsSection data={skillsSectionData} />
          {/* <TimelineSection data={timelineSectionData} /> */}
        </DarkModeContext.Provider>
      </main>

      <footer>
        <FooterSection data={footerSectionData} />
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const strapiUrl = process.env.STRAPI_URL;

  //fetch all the data from my strapi end points

  const projects = await fetch(`${strapiUrl}/projects`);
  const projectsData = await projects.json();

  const aboutSection = await fetch(`${strapiUrl}/about-section`);
  const aboutSectionData = await aboutSection.json();

  const skillsSection = await fetch(`${strapiUrl}/skills-section`);
  const skillsSectionData = await skillsSection.json();

  const landingSection = await fetch(`${strapiUrl}/landing-section`);
  const landingSectionData = await landingSection.json();

  const timelineSection = await fetch(`${strapiUrl}/timelinesection`);
  const timelineSectionData = await timelineSection.json();

  const footerSection = await fetch(`${strapiUrl}/footer`);
  const footerSectionData = await footerSection.json();

  return {
    props: {
      projectsData: projectsData,
      aboutSectionData: aboutSectionData,
      skillsSectionData: skillsSectionData,
      landingSectionData: landingSectionData,
      footerSectionData: footerSectionData,
      timelineSectionData: timelineSectionData,
    },
    revalidate: 1,
  };
};
