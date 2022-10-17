import React from 'react';
import {Link} from 'react-scroll';
import {Chevron, ScrollDownContainer} from './scroll-down.styles';

const ScrollDown = () => {
  return (
    <ScrollDownContainer>
      <Link
        activeClass="active"
        to={'about-me'}
        spy={true}
        smooth={true}
        offset={-110}
        style={{
          cursor: 'pointer',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: '10',
        }}
      >
        <Chevron></Chevron>
        <Chevron></Chevron>
        <Chevron></Chevron>
      </Link>
    </ScrollDownContainer>
  );
};

export default ScrollDown;
