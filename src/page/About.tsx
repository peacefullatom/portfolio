import React from 'react';
import Experience from './about/Experience';
import Me from './about/Me';
import Readings from './about/Readings';
import Skills from './about/Skills';
import { pageBaseClassName } from './const';

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
