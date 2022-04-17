import React from 'react'
import Header from './components/Header'
import './App.scss'
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { designations, hello, about, resumeBasicInfo, resumeExperience, resumeProjects, sharedBasicInfo, sharedSkills } from './data';

function App() {
  return (
    <div>
      <Header designations={designations} />
      <About sectionName="About Me" hello={hello} about={about} />
      <Projects sectionName="Projects" resumeProjects={resumeProjects} resumeBasicInfo={resumeBasicInfo} />
      <Skills sharedSkills={sharedSkills} resumeBasicInfo={resumeBasicInfo} />
      <Experience resumeBasicInfo={resumeBasicInfo} resumeExperience={resumeExperience} />
      <Footer sharedBasicInfo={sharedBasicInfo} />
    </div>
  )
}

export default App