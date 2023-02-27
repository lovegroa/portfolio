import React, {useEffect, useRef} from 'react';
import useOnScreen from '../../utils/functions/useOnScreen';
import {AboutMeContainer, AboutMeBoxContainer} from './about-me.styles';
import {Link} from 'react-scroll';
import {
  ButtonContainer,
  CheckItOutButton,
} from '../../components/project/project.styles';

const AboutMe = ({ref2}) => {
  const ref = useRef(null);
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

  //help

  return (
    <AboutMeContainer ref={ref} id="about-me">
      <AboutMeBoxContainer>
        <h2 data-aos="fade-down">About me</h2>
      </AboutMeBoxContainer>
      <AboutMeBoxContainer>
        <p data-aos="fade-left">
          I'm currently on the lookout for exciting opportunities to work and
          play in Tokyo! I've been pursuing my love for coding for over ten
          years now, and I've recently turned my passion into a full-time
          profession working this past year as a{' '}
          <strong style={{fontWeight: 'bold', whiteSpace: 'nowrap'}}>
            {' '}
            Full Stack Developer
          </strong>
          . Creating apps that solve real-life problems is a thrill for me, and
          I've built some pretty cool stuff so far - like an app that helps me
          manage my fantasy football team, or one that helps me keep track of my
          cash flow.
        </p>
        <br />
        <p data-aos="fade-left">
          But don't let my love for coding fool you - I'm a fun-loving person at
          heart! When I'm not geeking out over programming languages like
          <strong style={{fontWeight: 'bold'}}> TypeScript</strong>,{' '}
          <strong style={{fontWeight: 'bold'}}> React</strong>, and{' '}
          <strong style={{fontWeight: 'bold'}}> SQL</strong>, you can usually
          find me exploring new parts of the city, trying out new restaurants.
          I'm also learning Japanese right now.
        </p>
        <br />
        <p data-aos="fade-left">
          I used to be an award-winning marketer in Finance and FinTech, and my
          analytical skills have always been a strong suit of mine. I even wrote
          code to analyze and manipulate large datasets back when I was a
          marketer! But my true passion lies in coding and constantly learning
          new skills. I'm always on the lookout for exciting new tools and
          philosophies that can help me become an even better developer.
        </p>
        <br />

        <Link
          activeClass="active"
          to={'contact'}
          spy={true}
          smooth={true}
          offset={-110}
          style={{cursor: 'pointer'}}
        >
          <ButtonContainer>
            <CheckItOutButton role="button">
              <span>Get in touch!</span>
            </CheckItOutButton>
          </ButtonContainer>
        </Link>
      </AboutMeBoxContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
