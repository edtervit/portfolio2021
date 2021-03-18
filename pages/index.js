import Head from "next/head";
import dynamic from "next/dynamic";

//import the sections after their data has loaded with get static props
const LandingSection = dynamic(() => import("../components/LandingSection"));
const AboutSection = dynamic(() => import("../components/AboutSection"));
const ProjectsSection = dynamic(() => import("../components/ProjectsSection"));
const SkillsSection = dynamic(() => import("../components/SkillsSection"));
const FooterSection = dynamic(() => import("../components/FooterSection"));

export default function Home({
  projectsData,
  aboutSectionData,
  skillsSectionData,
  landingSectionData,
  footerSectionData,
}) {
  return (
    <div>
      <Head>
        <title>Ed Tervit - Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        <script
          crossOrigin="anonymous"
          src="https://kit.fontawesome.com/cdb215410e.js"
        ></script>
      </Head>

      <main>
        <LandingSection data={landingSectionData} />
        <AboutSection data={aboutSectionData} />
        <ProjectsSection data={projectsData} />
        <SkillsSection data={skillsSectionData} />
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

  const footerSection = await fetch(`${strapiUrl}/footer`);
  const footerSectionData = await footerSection.json();

  return {
    props: {
      projectsData: projectsData,
      aboutSectionData: aboutSectionData,
      skillsSectionData: skillsSectionData,
      landingSectionData: landingSectionData,
      footerSectionData: footerSectionData,
    },
    revalidate: 1,
  };
};
