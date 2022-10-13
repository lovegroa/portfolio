import styled from 'styled-components';
import {BoxContainer, SectionContainer} from '../../app.styles';

export const SkillsContainer = styled(SectionContainer)`
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export const SkillsBoxContainer = styled(BoxContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
