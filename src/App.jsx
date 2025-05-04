import React from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import SectionHeader from "./components/SectionHeader";
import ProjectCard from "./components/ProjectCard";
import houseIcon from "./assets/house-icon.png";
import folderIcon from "./assets/folder.png";
import cogniplayIcon from "./assets/cogniplay.png";
import JobCard from "./components/JobCard";
import starteryIcon from "./assets/starterylogo.png";
import pluu5Icon from "./assets/Pluu5.png";

function App() {
  return (
    <div className="relative max-w-3xl mx-auto">
      <Navbar />
      <AboutMe />
      <SectionHeader title="PROJECTS" />
      <ProjectCard
        image={houseIcon}
        title="Mortgage Helper"
        description="A full-stack mortgage assistance application that integrates and analyzes real-world data from the 2017 New Jersey HMDA database to support mortgage calculations and loan application tracking."
        stack="React + Spring Boot + PostgreSQL"
        link="https://github.com/tushardray/cs336project"
      />
      <ProjectCard
        image={folderIcon}
        title="Task Manager"
        description="Helping people manage their tasks seamlessly with JWT-based authentication for secure user login and session management."
        stack="React + Node.js + Express.js + PostgreSQL"
        link="https://github.com/JamesMan689/taskmanager"
      />
      <ProjectCard
        image={cogniplayIcon}
        title="CogniPlay: A Cognitive Assessment Software "
        description="A project that uses engaging games that focus on reaction time, memory, and problem solving skills to track mental agility of patients while providing essential data to hospitals."
        stack="Python + Pygame"
        link="https://github.com/JamesMan689/cogniplay"
      />
      <SectionHeader title="EXPERIENCE" />
      <JobCard
        company="Yestech"
        title="Front-end Software Engineer Intern"
        logo={pluu5Icon}
        stack="React Native"
      />
      <JobCard
        company="Startery"
        title="Full-Stack Software Developer Intern"
        logo={starteryIcon}
        stack="Next.js + React + Spring Boot"
      />
      <div className="mb-48"></div>
    </div>
  );
}

export default App;
