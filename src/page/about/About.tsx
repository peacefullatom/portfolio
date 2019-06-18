import React from 'react';
import Experience from './Experience';
import Me from './Me';
import Readings from './Readings';
import Skills from './Skills';
import { pageBaseClassName } from '../const';

const About: React.FC = () => {
  return (
    <div className={pageBaseClassName}>
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
