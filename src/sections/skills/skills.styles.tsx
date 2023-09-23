import styled from 'styled-components';
import {BoxContainer, SectionContainer} from '../../styles/app.styles';

export const SkillsContainer = styled(SectionContainer)`
  flex-direction: column-reverse;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export const SkillsBoxContainer = styled(BoxContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
