import React, {useEffect, useRef} from 'react';
import Project from '../../components/project/project.component';
import useOnScreen from '../../utils/functions/useOnScreen';
import {ProjectsContainer} from './projects.styles';

const Projects = ({ref2}) => {
  const ref = useRef<HTMLDivElement>(null);

  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      if (ref2) {
        if (ref2.current) {
          console.log(ref2.current);
          ref2.current.scrollIntoView({inline: 'center'});
        }
      }
    }
  }, [isVisible, ref2]);

  const projects = [
    {
      title: 'Pacman',
      description: `
      This was my first project as part of the General Assembly course, it is built entirely with Vanilla JS.

      The AI in the game uses a path finding algorithm to identify the shortest route to Pacman, this is represented by the numbers at each junction which show how many spaces away from Pacman the junction is. 
      
      The AI then look at the junctions and select the junction with the lowest number.
      
      The difficulty modifier adds a level of randomness to the AI's path selection, (100 = no randomness, 0 = pure randomness).
      `,
      frontend: ['Vanilla JS'],
      backend: ['N/A'],
      img: '/pacman.png',
      link: 'https://lovegroa.github.io/pacman/',
      buttonText: 'Check it out',
    },
    {
      title: '❤️ Money',
      description: `
      I created this tool to manage my personal finances, the tool is used for cash-flow planning.

      The tool projects a forecast, and illustrates an individuals cash flow against a desired target.

      The user can use a slider to increase/decrease the amount they would like to save and see in real time the impact of this on their cash flow.

      The user can swipe left and right to see breakdowns by account.

      You can login to a demo version of the tool, by using the following credentials:

      Username: TEST
      Password: TEST

      Annoyingly, Heroku has decided to remove it's free tier, I am in the process of rehosting.
      `,
      frontend: ['Chart.js', 'Bootstrap', 'VanillaJS', 'Flask'],
      backend: ['Django', 'Mongo DB'],
      img: '/heart-money.png',
      //   link: 'https://heart-money.herokuapp.com/',
      link: '',
      buttonText: 'Rehosting soon!',
    },
    {
      title: 'FPL Vidi',
      description: `
      This is my most recent project, I'm creating a tool, which allows Fantasy Premier League (FPL) managers to see their performance in real-time.

      The tool uses the official FPL api to capture live data, and shows each user their mini-leagues, and how they are performing within each league.

      Whilst fixtures are being actively played, the 'vidiprinter' provides minute by minute updates on each players performance, only showing players relevant to that league.

      Annoyingly, Heroku has decided to remove it's free tier, I am in the process of rehosting.
      `,
      frontend: ['TypeScript', 'React', 'Redux', 'Axios', 'Styled Components'],
      backend: ['TypeScript', 'Express', 'Axios'],
      img: '/fpl-vidi.png',
      //   link: 'https://fpl-vidi.netlify.app/',
      link: '',
      buttonText: 'Rehosting soon!',
    },
  ];

  return (
    <ProjectsContainer ref={ref} id="projects">
      <h2 data-aos="fade-down">Projects</h2>
      {projects.map((project, index) => (
        <Project key={index} project={project} index={index} />
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
