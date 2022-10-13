import React from 'react';
import {HeroSection} from './hero.styles';

const Hero = () => {
  return (
    <HeroSection>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div style={{zIndex: '3'}}>
        <h1>Hi,</h1>
        <h1>I'm Alex</h1>
      </div>
    </HeroSection>
  );
};

export default Hero;
