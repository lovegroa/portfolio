import React, {useEffect, useRef} from 'react';
import {VerticalTimeline} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  TimelineElement,
  TimelineElementData,
} from '../../components/timeline-element/timeline-element.component';
import useOnScreen from '../../utils/functions/useOnScreen';

import {ExperienceContainer} from './experience.styles';

const Experience = ({ref2}) => {
  const ref = useRef(null);
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

  const timelineElements: TimelineElementData[] = [
    {
      title: 'Software engineer',
      company: 'Evolany',
      location: 'Tokyo, Japan',
      description: [
        'Archeticted and configured a React based frontend to replace the exsiting any.js internal library',
        'Implemented new deployment processes including precommit rules using Husky, CI/CD using CircleCI with automated testing, using Vitest and Playwrite',
        'Leading a team to create Anybot Overseas, an international version of the core japanese chatbot product',
        'Developed Line mini apps for clients',
      ],
      date: 'May 2023 - present',
      icon: '/work.svg',
    },
    {
      title: 'Full Stack Developer',
      company: 'MediaSense',
      location: 'London, UK',
      description: [
        "Designed, developed and maintained apps to support the business' core initiatives",
        'Hired as part of an innovate UK grant awarded by the UK Government',
        'Delivered a UI as part of this project, significantly ahead of the deadline, and was scored top marks by the government',
        'Engineered the frontend utilizing TypeScript, React and also Redux for state management',
        'Also worked on the backend, developing the API using Node, Express and Swagger',
        'Released the tool with Docker via AWS',
        'The tool is now being pitched to very well known FMCG brands',
      ],
      date: 'March 2022 - January 2023',
      icon: '/work.svg',
    },
    {
      title: 'Software Development Immersive',
      grade: 'Pass',
      company: 'General Assembly',
      location: 'Remote',
      description: [
        'I learnt how to develop full stack applications with both JavaScript and Python',
        'Over the duration of the course I delivered 4 Projects:',
        'Project 1: Pacman - vanillaJS',
        'Project 2: Movie Search Tool - React, SASS',
        'Project 3: What is the best - React, SASS, React-Spring, Express, MongoDB',
        'Project 4: Group Travel Tool - React, SASS, Python, Django, SQL',
      ],
      date: 'December 2021 - March 2022',
      icon: '/education.svg',
    },
    {
      title: 'Marketing Manager',
      company: 'FE fundinfo',
      location: 'London, UK',
      description: [
        'Managed a team that developed marketing campaigns for FE Investments & FE Analytics across a variety of different channels',
        'My team generated 840 marketing qualified leads (above target), supporting the growth of FE Investments from £4bn to £5bn AUM',
        'Created and ran multiple “Go to market” and “Tactical” marketing campaigns using various digital channels and mediums',
        'Coordinated adjacent sales teams, to align activities and quickly follow up on leads, to create revenue opportunities',
        'Organized a roadshow with over 200 attendees across the UK, leading to over 80 leads',
        'Interviewed, hired and trained up a new team to support the Financial Adviser marketing activities',
        'Managed a budget, ensuring it was spent effectively to achieve objectives',
        'Part of the marketing leadership team, working on high-level plans and projects',
      ],
      date: 'March 2021 - November 2021',
      icon: '/work.svg',
    },
    {
      title: 'Rising Star Award in Financial Services Marketing',
      company: 'Gramercy Institute',
      location: 'London, UK',
      description: [],
      date: 'January 2020',
      icon: '/star.svg',
    },
    {
      title: 'Associate Director, Marketing',
      company: 'UBS',
      location: 'London, UK',
      description: [
        'Set and implemented the marketing strategy for the UK Wholesale business',
        'Delivered growth every year in a highly saturated market (approx. 12% YOY)',
        'Responsible for Content, Digital, PR and Events marketing for the UK Wholesale Market',
        'Conducted product launches across multiple print and digital channels including email, social, PPC/SEA and other forms of paid promotion',
        'Developed content across mediums to promote products in focus, including animation, whitepapers, print and digital advertisements',
        'Created new processes to automate content creation for standard documents such as fund factsheets',
        'Managed a budget of $400,000 and ensured it was spent effectively to achieve objectives',
        'Maintained the UK website and designed templates for a new global website',
        'Planned and ran 20+ events per year, with high profile speakers (both in-person and virtual)',
        'Liaised with external agencies for public relations, media planning, content creation, events, and other purposes',
      ],
      date: 'May 2017 - March 2021',
      icon: '/work.svg',
    },
    {
      title: 'Investment Management Certificate',
      grade: 'Pass',
      company: 'CFA',
      location: 'London, UK',
      description: ['The Investment Environment', 'Investments in Practice'],
      date: 'January 2017 - February 2017',

      icon: '/education.svg',
    },
    {
      title: 'Marketing Executive',
      company: 'GAM Investments',
      location: 'London, UK',
      description: [
        'Liaised closely with global compliance offices, data groups and the technical marketing team to develop presentation content',
        'Proactively identified, analyzed and improved existing cross-function business processes with the use of VBA macros',
        'Worked with investment teams to create content for a wide variety of market-based products for both institutional and retail investors',
        'Conducted ESG based negative screening analysis of equity-based product holdings and highlighted potential threats to investments teams',
        'Administrated the presentations library and populated the RfP database',
      ],
      date: 'May 2016 - May 2017',
      icon: '/work.svg',
    },
    {
      title: 'Strategic Programs and Partnerships Coordinator',
      company: 'UBS',
      location: 'London, UK',
      description: [
        'Designed, implemented, and maintained a Salesforce CRM platform enabling colleagues across two organisations to track data',
        'Drafted content to present the firms programs externally and internally including a new microsite and intranet articles',
        'Reviewed wireframes and QA tested functionality of a new education-oriented social networking portal',
        "Arranged multiple high-touch, high-impact events including the Project Entrepreneur Launch, Attended by UBS's senior executive leadership",
        'Coordinated a day-long trip for 150 students and 30 executives on a private tour of the White House with senior political figures',
        'Trained six team members to use Salesforce and created original user guides and tutorials to ensure user adoption',
      ],
      date: 'March 2015 - March 2016',
      icon: '/work.svg',
    },
    {
      title: 'MA Entrepreneurial Leadership in Global Business',
      grade: 'Merit',
      company: 'University of Chester via the Mountbatten Institute',
      location: 'New York, USA',
      description: [
        'Dissertation: A Review and Redesign of the UBS Small Business Mentoring Program.',
      ],
      date: 'March 2015 - March 2016',

      icon: '/education.svg',
    },
    {
      title: 'Account Executive',
      company: 'Really B2B',
      location: 'Portsmouth, UK',
      description: [
        'Created and sent international B2B lead generation campaigns for Wiley, Miele, Zipcar and many other major companies',
        'Broadcasted over 50,000 emails a week with an average open rate of 23%',
        'Purchased, cleaned and segmented over 70,000 records of data using vlookups, pivot tables and VBA macros',
        'Researched trends for social media-based campaigns, to reinforce clients as thought leaders within their industries',
      ],
      date: 'September 2014 - March 2015',

      icon: '/work.svg',
    },
    {
      title: 'Beginners Mandarin & Chinese Business Culture',
      company: 'Study China Program',
      location: 'Zhejiang, China',
      description: [
        'Selected (10% acceptance rate) to participate in a cultural trip to China sponsored and funded by the UK Government',
      ],
      date: 'April 2014',

      icon: '/education.svg',
    },

    {
      title: 'International Business Expansion Plan Competition',
      company: 'X-Culture Project',
      location: 'Coventry, UK',
      description: [
        'Finished in the top 20% of over 2000 students, creating a strategy for Daimler to enter the premium small vehicle market in India',
        'Worked as part of an international team consisting of 7 members across 4 continents, overcoming communication & cultural barriers',
      ],
      date: 'September 2013 - November 2013',

      icon: '/education.svg',
    },

    {
      title: 'Marketing and Finance Assistant',
      company: 'AstralPool UK',
      location: 'Fareham, UK',
      description: [
        'Created and published internal and external media, including company promotions and monthly newsletters',
        "Organized the company's presence at trade specific exhibitions, creating bespoke content and attending multiple key industry events",
        'Maintained the purchase ledger, ensuring invoices were processed and paid when due',
      ],
      date: 'May 2012 - August 2013',

      icon: '/work.svg',
    },

    {
      title: 'BA (Hons) Marketing',
      grade: 'First',
      company: 'Coventry University',
      location: 'Coventry, UK',
      description: [
        'Dissertation: Do online negative peer reviews effect brand loyalty in the restaurant industry?',
      ],
      date: 'September 2010 - May 2014',

      icon: '/education.svg',
    },
  ];

  return (
    <ExperienceContainer ref={ref} id="experience">
      <h2>Experience</h2>
      <VerticalTimeline animate={true}>
        {timelineElements.map((element, index) => (
          <TimelineElement key={index} timelineElementData={element} />
        ))}
      </VerticalTimeline>
    </ExperienceContainer>
  );
};

export default Experience;
