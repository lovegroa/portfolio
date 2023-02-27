import styled from 'styled-components';

export const ContentContainer = styled.div`
  padding: 20px;
`;

const primary = 'white';
const secondary = 'black';
const tertiary = 'black';
const quaternary = 'black';
const quinary = 'black';

export const MainContainer = styled.div`
  width: 100vw;
  height: auto;
  overflow: hidden;

  /* background-image: url(/pattern.svg); */

  background-size: 20%;
  h1 {
    font-size: 10vw;
    text-align: center;
    margin: 0;
    text-shadow: 3px 3px 0 ${secondary}, 6px 6px 0 ${tertiary},
      9px 9px ${quaternary}, 12px 12px 0 ${quinary};
    /* font-family: bungee, sans-serif; */
    font-weight: 700;
    /* text-transform: uppercase; */
    font-size: calc(2rem + 5vw);
    text-align: center;
    margin: 0;
    color: ${primary};
    //color: transparent;
    //background-color: white;
    //background-clip: text;
    :first-of-type {
      animation-delay: -6s;
    }

    animation: shadows 12s ease-in infinite, move 12s ease-in infinite;
    letter-spacing: 0.4rem;
    animation-delay: -12s;
  }

  @keyframes shadows {
    0% {
      text-shadow: none;
    }
    10% {
      text-shadow: 3px 3px 0 ${secondary};
    }
    20% {
      text-shadow: 3px 3px 0 ${secondary}, 6px 6px 0 ${tertiary};
    }
    30% {
      text-shadow: 3px 3px 0 ${secondary}, 6px 6px 0 ${tertiary},
        9px 9px ${quaternary};
    }
    40% {
      text-shadow: 3px 3px 0 ${secondary}, 6px 6px 0 ${tertiary},
        9px 9px ${quaternary}, 12px 12px 0 ${quinary};
    }
    50% {
      text-shadow: 3px 3px 0 ${secondary}, 6px 6px 0 ${tertiary},
        9px 9px ${quaternary}, 12px 12px 0 ${quinary};
    }
    60% {
      text-shadow: 3px 3px 0 ${secondary}, 6px 6px 0 ${tertiary},
        9px 9px ${quaternary}, 12px 12px 0 ${quinary};
    }
    70% {
      text-shadow: 3px 3px 0 ${secondary}, 6px 6px 0 ${tertiary},
        9px 9px ${quaternary};
    }
    80% {
      text-shadow: 3px 3px 0 ${secondary}, 6px 6px 0 ${tertiary};
    }
    90% {
      text-shadow: 3px 3px 0 ${secondary};
    }
    100% {
      text-shadow: none;
    }
  }

  @keyframes move {
    0% {
      transform: translate(0px, 0px);
    }
    40% {
      transform: translate(-12px, -12px);
    }
    50% {
      transform: translate(-12px, -12px);
    }
    60% {
      transform: translate(-12px, -12px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  h2 {
    font-size: 40px;
    text-align: center;
    width: 100%;
    margin: 30px 0;
  }

  h3 {
    font-size: 38px;
    text-align: center;
    margin: 0 0 20px 0;
  }

  h4 {
    font-size: 24px;
    text-align: center;
    margin: 5px 0 5px 0;
  }

  h5 {
    font-size: 18px;
    text-align: center;
    margin: 5px 0 5px 0;
  }
  h6 {
    font-size: 14px;
    text-align: center;
    margin: 5px 0 5px 0;
  }

  p {
    font-size: 18px;
    font-weight: 200;
    letter-spacing: 1px;
  }

  pre {
    font-size: 16px;
    white-space: pre-line;
    font-family: inherit;
    padding: 0 20px;
    margin: 0;
  }
`;

export const SectionContainer = styled.section`
  position: relative;
  /* z-index: 1; */
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  color: white;
  /* padding: 20px 20px; */
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  overflow: hidden;
  padding: 100px 20px;
  p {
    margin: 0 20px;
    text-align: left;
    max-width: 800px;
  }

  main {
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const BoxContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
