import { months } from 'const';
import React from 'react';
import { aboutExperience } from './const';
import AboutContainer from './Container';
import { IAboutExperience } from './types';

const date2string = (value: Date): string => [months[value.getMonth()], value.getFullYear()].join(' ');

const parseDate = (value?: Date): string => {
  if (value) {
    return date2string(value);
  }
  return 'Present';
};

const ExperienceBlock: React.FC<IAboutExperience> = props => {
  return (
    <div className='container-fluid mb-3 px-0'>
      <div className='row'>
        <div className='col-sm-6 col-md-3'>
          <h6>{props.company}</h6>
        </div>
        <div className='col-sm-6 col-md-9'>
          {parseDate(props.startDate)} - {parseDate(props.endDate)}
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <p>
            <i>{props.title}</i>
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          {props.description.map((entry, key) => (
            <p key={key}>{entry}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <AboutContainer title={'Experience'}>
      {aboutExperience
        .sort((a, b) => {
          if (a.startDate > b.startDate) {
            return -1;
          }
          if (a.startDate < b.startDate) {
            return 1;
          }
          return 0;
        })
        .map((entry, key) => (
          <ExperienceBlock key={key} {...entry} />
        ))}
    </AboutContainer>
  );
};

export default Experience;
