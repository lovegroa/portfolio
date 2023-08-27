import styled from 'styled-components';

export const GridContainer = styled.div`
  z-index: 2;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  /* background-image: url(/pattern.svg); */

  .hover {
    background-color: rgba(0, 0, 0, 0);
    transition: 0.1s;
    border: none;
  }
`;

export const Cell = styled.div`
  width: calc(100vw / 20);
  height: calc(100vh / 10);

  @media screen and (max-width: 600px) {
    width: calc(100vw / 5);
    height: calc(100vh / 10);
  }

  background-color: rgba(255, 255, 255, 0.5);
  /* border: 1px solid black; */
  transition: background-color 120s;
  /* transform: rotate(${Math.random() * -180}deg); */

  :hover {
    /* transform: rotate(${Math.random() * 180}deg); */
    background-color: rgba(0, 0, 0, 0);
    transition: 0.1s;
    border: none;
  }
`;
