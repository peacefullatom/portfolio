import React from 'react';
import { aboutSkills } from './const';
import AboutContainer from './Container';
import { IAboutSkills } from './types';

const SkillsBlock: React.FC<IAboutSkills> = props => {
  return (
    <div className='row'>
      <div className='col-sm-6 col-md-3'>
        <h6>{props.title}</h6>
      </div>
      <div className='col-sm-6 col-md-9'>
        <p>{props.items.join(', ')}</p>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <AboutContainer title={'Skills'}>
      {aboutSkills.map((skill, key) => (
        <SkillsBlock key={key} {...skill} />
      ))}
    </AboutContainer>
  );
};

export default Skills;
