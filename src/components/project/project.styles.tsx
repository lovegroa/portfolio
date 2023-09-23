import styled from 'styled-components';
import {BoxContainer, SectionContainer} from '../../styles/app.styles';

export const CheckItOutButton = styled.button`
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  /* font-family: Phantomsans, sans-serif; */
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
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
    font-weight: 500;
  }

  :hover span {
    background: none;
  }
`;

export const ProjectDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;

  h4,
  h5 {
    text-align: center;
    margin: 0;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

type ProjectContainerProps = {
  flexDirection: 'row' | 'row-reverse';
};
export const ProjectContainer = styled(SectionContainer)<ProjectContainerProps>`
  flex-direction: ${({flexDirection}) => flexDirection};
  padding: 50px 20px;
  /* background: white; */
  /* color: black; */
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ProjectBoxContainer = styled(BoxContainer)`
  padding: 1rem;
  img {
    object-fit: cover;
    width: 100%;
    max-height: 50vh;
  }
`;

export const FrontendContainer = styled.div`
  width: 50%;
  ul {
    border-right: 1px solid white;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    list-style: none;
    padding: 5px 20px;

    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  li {
    margin: 0 10px;
  }
`;
export const BackendContainer = styled.div`
  width: 50%;
  ul {
    /* border-left: 1px solid white; */

    display: flex;
    flex-wrap: wrap;
    margin: 0;
    list-style: none;
    padding: 5px 20px;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  li {
    margin: 0 10px;
  }
`;
export const TechStackContainer = styled.div`
  width: 100%;
  display: flex;
  h5 {
    padding: 10px;
  }
`;
export const TechStackOuterContainer = styled.div`
  width: 100%;
`;
export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
