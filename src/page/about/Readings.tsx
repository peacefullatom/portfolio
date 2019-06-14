import React from 'react';
import { aboutReading } from './const';
import AboutContainer from './Container';
import { IAboutReading } from './types';

const ReadingsBlock: React.FC<IAboutReading> = props => {
  return (
    <div className='container-fluid mb-3 px-0'>
      <div className='row'>
        <div className='col-sm-6 col-md-3'>
          <h6>{props.title}</h6>
        </div>
        <div className='col-sm-6'>
          <a href={props.linkHref} target='_blank' rel='noopener noreferrer'>
            {props.linkLabel}
          </a>
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

const Readings: React.FC = () => {
  return (
    <AboutContainer title={'Readings'}>
      {aboutReading.map((entry, key) => (
        <ReadingsBlock key={key} {...entry} />
      ))}
    </AboutContainer>
  );
};

export default Readings;
