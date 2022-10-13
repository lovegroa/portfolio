import React from 'react';
import {Link} from 'react-scroll';
import {
  NavContainerLeft,
  NavContainerRight,
  NavigationContainer,
  NavigationInnerContainer,
} from './navigation.styles';

const Navigation = ({
  aboutMeRef,
  skillsRef,
  projectsRef,
  experienceRef,
  contactRef,
}) => {
  const navItems = [
    {
      to: 'about-me',
      label: 'About me',
      id: 'about-me-nav',
      ref: aboutMeRef,
    },
    {
      to: 'skills',
      label: 'Skills',
      id: 'skills-nav',
      ref: skillsRef,
    },
    {
      to: 'projects',
      label: 'Projects',
      id: 'projects-nav',
      ref: projectsRef,
    },
    {
      to: 'experience',
      label: 'Experience',
      id: 'experience-nav',
      ref: experienceRef,
    },
    {
      to: 'contact',
      label: 'Contact',
      id: 'contact-nav',
      ref: contactRef,
    },
  ];

  return (
    <NavigationContainer data-aos="fade-down" data-aos-anchor="#about-me">
      <NavigationInnerContainer>
        <NavContainerLeft>
          <h4>Alex Lovegrove</h4>
        </NavContainerLeft>
        <NavContainerRight>
          <ul>
            {navItems.map(({to, label, id, ref}, index) => (
              <div id={id} ref={ref} key={index}>
                <Link
                  activeClass="active"
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={-110}
                  onClick={() => {
                    console.log('test');
                    ref.current.scrollIntoView({
                      behavior: 'smooth',
                      inline: 'center',
                    });
                  }}
                >
                  <li>{label}</li>
                </Link>
              </div>
            ))}
          </ul>
        </NavContainerRight>
      </NavigationInnerContainer>
    </NavigationContainer>
  );
};

export default Navigation;
