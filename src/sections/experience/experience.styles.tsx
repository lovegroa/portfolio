import styled from 'styled-components';
import {SectionContainer} from '../../app.styles';

export const ExperienceContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;

  ul {
    list-style-position: outside;
    padding: 0;
    li {
      padding: 5px 0;
    }
  }

  .funky {
    /* align-items: center; */
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #ffffff;
    /* display: flex; */
    /* font-family: Phantomsans, sans-serif; */
    font-size: 20px;
    /* justify-content: center; */
    line-height: 1em;
    /* max-width: 100%; */
    /* min-width: 140px; */
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;

    /* CSS */

    :active,
    :hover {
      outline: 0;
    }

    span {
      background-color: rgb(5, 6, 45);
      padding: 16px 24px;
      border-radius: 6px;
      width: 100%;
      height: 100%;
      transition: 300ms;
    }

    :hover span {
      background: none;
    }
  }
`;
