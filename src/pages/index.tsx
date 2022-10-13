import React, {useEffect, useRef} from 'react';
import {MainContainer, ContentContainer} from '../styles/app.styles';
import AboutMe from '../sections/about-me/about-me.section';
import Navigation from '../components/navigation/navigation.component';
import Hero from '../sections/hero/hero.section';
import Skills from '../sections/skills/skills.section';
import Aos from 'aos';
import Projects from '../sections/projects/projects.section';
import Experience from '../sections/experience/experience.section';
import Grid from '../components/grid/grid.component';
import Contact from '../sections/contact/contact.section';

function App() {
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <MainContainer>
        <Grid />
        <Navigation
          aboutMeRef={aboutMeRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          experienceRef={experienceRef}
          contactRef={contactRef}
        />
        <Hero />
        <ContentContainer>
          <AboutMe ref2={aboutMeRef} />
          <Skills ref2={skillsRef} />
          <Projects ref2={projectsRef} />
          <Experience ref2={experienceRef} />
          <Contact ref2={contactRef} />
        </ContentContainer>
      </MainContainer>
    </>
  );
}

export default App;
