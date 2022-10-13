import React from 'react';
import {VerticalTimelineElement} from 'react-vertical-timeline-component';

export type TimelineElementData = {
  date: string;
  title: string;
  location: string;
  company: string;
  description: string[];
  icon: string;
  grade?: string;
};

const styles = {
  backgroundColor: 'rgba(0,0,0,0.5)',
  border: '0',
  borderRadius: '8px',
  boxShadow: 'rgba(151, 65, 252, 0.2) 0 15px 30px -5px',
  boxSizing: 'border-box',
  color: '#ffffff',
  fontSize: '20px',
  lineHeight: '1em',
  padding: '30px',
  textDecoration: 'none',
  userSelect: 'none',
  touchAction: 'manipulation',
  cursor: 'pointer',
};

export const TimelineElement = ({
  timelineElementData,
}: {
  timelineElementData: TimelineElementData;
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={styles}
      date={timelineElementData.date}
      iconStyle={{background: 'black', overflow: 'hidden'}}
      icon={<img style={{padding: '5px'}} src={timelineElementData.icon} />}
    >
      <h5>{timelineElementData.title}</h5>
      <h6>{timelineElementData.company}</h6>
      <h6>{timelineElementData.location}</h6>

      {timelineElementData.grade ? (
        <h5>Grade: {timelineElementData.grade}</h5>
      ) : (
        <></>
      )}
      <ul>
        {timelineElementData.description.map((description, index) => (
          <li style={{fontSize: '14px'}} key={index}>
            {description}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
