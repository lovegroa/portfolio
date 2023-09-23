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
          I'm on the lookout for exciting opportunities in London!
        </p>
        <br />
        <p data-aos="fade-left">
          I’ll be back in the UK and available to start from the 1st of February
          2024. If any opportunities arise before then and permit remote work,
          please do reach out!
        </p>

        <br />
        <p data-aos="fade-left">
          I am a dedicated developer with a passion for{' '}
          <strong style={{fontWeight: 'bold'}}>React</strong> and{' '}
          <strong style={{fontWeight: 'bold'}}>TypeScript</strong>. Within a
          short span, I transitioned from an award-winning career in Finance and
          FinTech marketing to fully embrace software development. This pivot
          was inspired by a lifelong hobby and love for coding, which I
          leveraged even during my marketing tenure to analyse vast datasets.
        </p>
        <br />
        <p data-aos="fade-left">
          2023 has been an adventurous year for me. I currently reside in Japan,
          and while I've thoroughly enjoyed my time working and living here,
          London remains my true home. It's where I intend to further my career
          and shape my future.
        </p>
        <br />
        <p data-aos="fade-left">
          While I've predominantly been a Full Stack Engineer, I've grown fond
          of Frontend development and aspire to specialise in this domain over
          the next few years. The rapid advancements in frontend technologies
          captivate me. Some frameworks and tools I'm eager to play with include
          the T3 stack, Astro, and Bun.
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
