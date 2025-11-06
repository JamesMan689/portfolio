import React from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import SectionHeader from "./components/SectionHeader";
import ProjectCard from "./components/ProjectCard";
import footworkIcon from "./assets/footworklogo.png";
import socialmediaIcon from "./assets/socialmediaapi.png";
import JobCard from "./components/JobCard";
import starteryIcon from "./assets/starterylogo.png";
import zenzieeIcon from "./assets/zenziee.png";

function App() {
  return (
    <div className="relative max-w-3xl mx-auto">
      <Navbar />
      <AboutMe />
      <SectionHeader title="PROJECTS" />
      <ProjectCard
        image={footworkIcon}
        title="Footwork: Train Soccer Better"
        description="Helping 1,300+ players in America and Europe train soccer smarter and better."
        stack="React Native, Expo, NativeWind, TypeScript, Java Spring Boot, PostgreSQL (AWS RDS), AWS S3, Docker, JWT Auth, Postmark, AWS Elastic Beanstalk"
        link="https://www.getfootwork.app"
      />
      <ProjectCard
        image={socialmediaIcon}
        title="Social Media API"
        description="Backend API simulating social media features with user authentication, posting, and secure data handling."
        stack="Spring Boot, PostgreSQL, JWT Auth, Docker"
        link="https://github.com/JamesMan689/socialmediabackend"
      />
     
      <SectionHeader title="EXPERIENCE" />
      <JobCard
        company="ZenZiee"
        title="Front-end Software Engineer Intern"
        logo={zenzieeIcon}
        stack="React Native"
      />
      <JobCard
        company="Startery"
        title="Software Developer Intern"
        logo={starteryIcon}
        stack="Next.js + React + Spring Boot"
      />
      <div className="mb-48"></div>
    </div>
  );
}

export default App;
