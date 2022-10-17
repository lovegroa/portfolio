import React, {useEffect, useRef} from 'react';
import useOnScreen from '../../utils/functions/useOnScreen';
import {AboutMeContainer, AboutMeBoxContainer} from './about-me.styles';
import {Link} from 'react-scroll';

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
          I am a frontend focussed - Full Stack Developer. Currently, I’m
          working in London, but from the start of next year (2023), I’ll be
          moving to Japan with my partner. I’m actively looking for
          opportunities to work in Japan, and I’m currently learning Japanese.
          I’ve been coding for over ten years, but over the last year, I’ve
          completed a career change. In doing so, I have switched from coding as
          a hobby to a full-time profession.
        </p>
        <br />
        <p data-aos="fade-left">
          As cliché as it is, I am passionate about development. I enjoy
          building apps that meet specific needs in my life. I have built apps
          to; help me buy a house, manage my fantasy football team, and manage
          my cash flow, to name a few. I’ve spent my free time teaching myself
          JavaScript, TypeScript, Python, PHP, and VBA.
        </p>
        <br />
        <p data-aos="fade-left">
          Previously, I worked as an award-winning Marketer in Finance and
          FinTech. In my career as a Marketer, my ability to focus on the
          analytical elements has proved a real strength. Even as a marketer, I
          would code up tools where possible.
        </p>
        <br />
        <p data-aos="fade-left">
          Fundamentally, I’ve always centred myself around learning, and I’m
          always looking to improve, what I do and how I do it, whether it be
          new tools, languages, or even philosophies.
        </p>
        <br />
        <p data-aos="fade-left">
          If you are currently looking for a Full Stack Developer based in
          Japan, then please do say hi!
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
          <p data-aos="fade-left">You can contact me by clicking here.</p>
        </Link>
      </AboutMeBoxContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
