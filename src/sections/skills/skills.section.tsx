import React, {useEffect, useRef, useState} from 'react';
import RadarChart, {
  CompChartData,
} from '../../components/radar-chart/radar-chart.component';
import useOnScreen from '../../utils/functions/useOnScreen';
import {SkillsBoxContainer, SkillsContainer} from './skills.styles';

const Skills = ({ref2}) => {
  const ref = useRef<HTMLDivElement>(null);

  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      if (ref2) {
        if (ref2.current) {
          console.log(ref2.current);
          ref2.current.scrollIntoView({inline: 'center'});
        }
      }
    }
  }, [isVisible, ref2]);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref) {
      if (ref.current) {
        setWidth(ref.current.clientWidth);
      }
    }
  }, []);

  const skills: CompChartData = [
    ['TypeScript', 8],
    ['JavaScript', 9],
    ['CSS', 9],
    ['HTML', 9],
    ['React', 9],
    ['Express', 7],
    ['Node', 8],
    ['Swagger', 8],
    ['Terraform', 4],
    ['AWS', 4],
    ['Docker', 4],
    ['Python', 7],
    ['Jenkins', 5],
    ['Visual Basic', 7],
    ['SQL', 7],
    ['NoSQL', 8],
  ];

  return (
    <SkillsContainer id="skills">
      <SkillsBoxContainer ref={ref} data-aos="zoom-in-up">
        <RadarChart width={width} chartData={skills} />
      </SkillsBoxContainer>
      <SkillsBoxContainer>
        <h2 data-aos="fade-down">Skills</h2>
      </SkillsBoxContainer>
    </SkillsContainer>
  );
};

export default Skills;
