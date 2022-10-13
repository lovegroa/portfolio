import styled from 'styled-components';

export const HeroSection = styled.section`
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
  flex-direction: column;

  h1 {
    z-index: 5;
    text-align: left;
  }

  .bg {
    animation: slide 30s ease-in-out infinite alternate;
    /* background-image: linear-gradient(-60deg, black 50%, rgb(100, 100, 100) 50%
    ); */

    background-image: linear-gradient(
      144deg,
      #5b42f3 25%,
      #000000 50%,
      #00005a 25%
    );
    bottom: 0;
    left: -50%;
    opacity: 0.5;
    position: fixed;
    right: -50%;
    top: 0;
    z-index: 0;
  }

  .bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 40s;
  }

  .bg3 {
    animation-duration: 50s;
  }

  @keyframes slide {
    0% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(25%);
    }
  }
`;
