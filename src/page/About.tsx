import React from 'react';
import Experience from './about/Experience';
import Me from './about/Me';
import Readings from './about/Readings';
import Skills from './about/Skills';

const About: React.FC = () => {
  return (
    <div className=''>
      <Me />
      <hr></hr>
      <Skills />
      <hr></hr>
      <Experience />
      <hr></hr>
      <Readings />
    </div>
  );
};

export default About;
