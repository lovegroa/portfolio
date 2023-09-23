import React, {useEffect, useRef} from 'react';
import Project, {ProjectType} from '../../components/project/project.component';
import useOnScreen from '../../utils/functions/useOnScreen';
import {ProjectsContainer} from './projects.styles';
import {
  ButtonContainer,
  CheckItOutButton,
} from '../../components/project/project.styles';

const Projects = ({ref2}) => {
  const ref = useRef<HTMLDivElement>(null);

  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      if (ref2) {
        if (ref2.current) {
          ref2.current.scrollIntoView({inline: 'center'});
        }
      }
    }
  }, [isVisible, ref2]);

  const projects: ProjectType[] = [
    {
      title: 'Pacman',
      description: ``,
      frontend: ['Vanilla JS', 'React', 'Typescript'],
      backend: ['Sheety', 'GitHub Pages'],
      img: '/pacman.png',
      link: 'https://lovegroa.github.io/pacman/',
      buttonText: 'Check it out',
      pacman: true,
      component: (
        <div style={{padding: '20px'}} data-aos="fade-down">
          <p style={{all: 'unset', fontSize: '16px'}}>
            This was my first project as a part of the General Assembly course.
            The original version was built entirely using vanilla JS and can be
            accessed{' '}
            <a
              style={{textDecoration: 'underline', cursor: 'pointer'}}
              href="https://lovegroa.github.io/pacman/"
            >
              here
            </a>
          </p>
          <br />
          <br />
          <p style={{all: 'unset', fontSize: '16px'}}>
            This version playable here has been recreated as a React component.
            This transition presented numerous challenges. One of the primary
            issues was managing the render lifecycle. It was essential for me to
            track the user input without triggering a rerender immediately, then
            applying the move the next time the interval ticked, which would, in
            turn, cause a rerender. This challenge deepened my understanding of
            how refs work in React.
          </p>
          <br />
          <br />
          <p style={{all: 'unset', fontSize: '16px'}}>
            The ghosts utilise a pathfinding algorithm, with a touch of
            randomness added to decrease the difficulty.{' '}
            <strong style={{fontWeight: 'bold'}}>
              However, beware of the red ghost at the end; it always follows the
              shortest path!
            </strong>
          </p>
          <br />
          <br />
          <p style={{all: 'unset', fontSize: '16px'}}>
            Interestingly, the pathfinding algorithm I employed is known as
            Dijkstra's algorithm—though I wasn't aware of this during
            development. This algorithm determines the shortest path in a
            weighted graph. Beginning from an initial node, it iteratively
            selects the closest unvisited node, updating the distances of
            neighboring nodes, until every node has been visited. In this game's
            context, the nodes represent the corners and the sprites.
          </p>
        </div>
      ),
    },
    {
      title: 'Cashola',
      description: ``,
      frontend: ['React', 'Typescript', 'GTS', 'ChartJS', 'Redux', 'MUI'],
      backend: ['Firebase', 'Firestore', 'Netlify'],
      img: '/Cashola.png',
      link: 'https://finance-production-a61f.up.railway.app/',
      //   link: '',
      buttonText: 'Check it out',
      pacman: false,
      component: (
        <div style={{padding: '20px'}} data-aos="fade-down">
          <p style={{all: 'unset', fontSize: '16px'}}>
            This is a tool that I have recreated three times, the first
            iteration was built using PHP with SQL. The second was built using
            Python, Flask, Django and MongoDB and currently it is running with
            React, MUI and Firebase. The site uses Redux to manage almost all of
            the state
          </p>
          <br />
          <br />
          <p style={{all: 'unset', fontSize: '16px'}}>
            The tool allows the user to simply manage their cashflow. The user
            can set a target and see how much disposable cash they have to
            spend. This is a tool built out of personal need.
          </p>
          <br />
          <br />
          <p style={{all: 'unset', fontSize: '16px'}}>
            If you'd like to play around and see how the tool works you can do
            that with the following credentials: <br />
            <br />
          </p>
          <div style={{display: 'flex'}}>
            <ButtonContainer style={{width: '50%'}}>
              <a href="https://cashola.netlify.app/">
                <CheckItOutButton role="button">
                  <span>Check it out</span>
                </CheckItOutButton>
              </a>
            </ButtonContainer>
            <p style={{all: 'unset', fontSize: '16px', width: '50%'}}>
              Username: <span>test2@test.com</span>
              <br />
              Password: <span>test1234</span>
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'DiPA',
      description: ``,
      frontend: [
        'TypeScript',
        'React',
        'Redux',
        'Axios',
        'Styled Components',
        'Tableau',
      ],
      backend: ['TypeScript', 'Express', 'Node', 'AWS', 'Docker'],
      img: '/DiPA.png',
      //   link: 'https://fpl-vidi.netlify.app/',
      link: '',
      buttonText: 'Rehosting soon!',
      pacman: false,
      component: (
        <div style={{padding: '20px'}} data-aos="fade-down">
          <p style={{all: 'unset', fontSize: '16px'}}>
            DiPA is a tool used to present Media Audits to clients. I built the
            UI from scratch using Typescript React, working with the external
            designer in Figma.
          </p>
          <br />
          <br />
          <p style={{all: 'unset', fontSize: '16px'}}>
            Using Tableau's API the tool is interactive and allows users to
            inspect the data in a variety of ways.
          </p>
          <br />
          <br />
          <p style={{all: 'unset', fontSize: '16px'}}>
            The app was containerized using Docker, with the stored image saved
            in AWS's Elastic Container Registry (ECR). The app was then launched
            on an AWS EC2 instance using the image from the ECR.
            <br />
          </p>
        </div>
      ),
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
