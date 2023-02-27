import React from 'react';
import {
  ProjectBoxContainer,
  ProjectContainer,
  ProjectDetailsContainer,
  FrontendContainer,
  BackendContainer,
  TechStackContainer,
  TechStackOuterContainer,
  DescriptionContainer,
  CheckItOutButton,
  ButtonContainer,
} from './project.styles';

type ProjectType = {
  title: string;
  description: string;
  frontend: string[];
  backend: string[];
  img: string;
  link: string;
  buttonText: string;
};

const Project = ({project, index}: {project: ProjectType; index: number}) => {
  const isOdd = index % 2 !== 0;
  const fade = isOdd ? 'fade-left' : 'fade-right';

  return (
    <ProjectContainer flexDirection={isOdd ? 'row-reverse' : 'row'}>
      <ProjectBoxContainer data-aos="zoom-in-up">
        <h3>{project.title}</h3>
        <img data-aos={fade} src={project.img} />
      </ProjectBoxContainer>
      <ProjectBoxContainer>
        <pre>{project.description}</pre>

        <ProjectDetailsContainer>
          <DescriptionContainer data-aos={fade}>
            <ButtonContainer>
              <a href={project.link} target="_blank">
                <CheckItOutButton role="button">
                  <span>{project.buttonText}</span>
                </CheckItOutButton>
              </a>
            </ButtonContainer>
          </DescriptionContainer>
          <TechStackOuterContainer data-aos={fade}>
            <h4>Tech Stack</h4>
            <TechStackContainer>
              <FrontendContainer>
                <h5>Frontend</h5>
                <ul>
                  {project.frontend.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </FrontendContainer>
              <BackendContainer>
                <h5>Backend</h5>
                <ul>
                  {project.backend.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </BackendContainer>
            </TechStackContainer>
          </TechStackOuterContainer>
        </ProjectDetailsContainer>
      </ProjectBoxContainer>
    </ProjectContainer>
  );
};

export default Project;
