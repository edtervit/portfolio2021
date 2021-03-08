import Head from "next/head";
import dynamic from "next/dynamic";

//import the sections after their data has loaded with get static props
const LandingSection = dynamic(() => import("../components/LandingSection"));
const AboutSection = dynamic(() => import("../components/AboutSection"));
const ProjectsSection = dynamic(() => import("../components/ProjectsSection"));
const SkillsSection = dynamic(() => import("../components/SkillsSection"));

export default function Home({
  projectsData,
  aboutSectionData,
  skillsSectionData,
  landingSectionData,
}) {
  return (
    <div>
      <Head>
        <title>Ed Tervit - Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LandingSection data={landingSectionData} />
        <AboutSection data={aboutSectionData} />
        <ProjectsSection data={projectsData} />
        <SkillsSection data={skillsSectionData} />
      </main>

      <footer>
        <p className="">
          Site made with React, Next.js, Strapi, Tailwind and ♥
        </p>
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

  return {
    props: {
      projectsData: projectsData,
      aboutSectionData: aboutSectionData,
      skillsSectionData: skillsSectionData,
      landingSectionData: landingSectionData,
    },
  };
};
