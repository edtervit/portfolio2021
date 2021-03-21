import Head from "next/head";
import dynamic from "next/dynamic";

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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
        />
        <meta
          name="description"
          content="Ed Tervit. Full stack junior web developer based in Cambridge, United Kingdom. "
        />
      </Head>

      <main>
        <LandingSection data={landingSectionData} />
        <AboutSection data={aboutSectionData} />
        <ProjectsSection data={projectsData} />
        <SkillsSection data={skillsSectionData} />
        <TimelineSection data={timelineSectionData} />
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
