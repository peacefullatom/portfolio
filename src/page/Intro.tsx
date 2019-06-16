import React from 'react';
import { pageBaseClassName } from './const';

const Intro: React.FC = () => {
  return (
    <div className={pageBaseClassName}>
      <p>Hello, my name is Yuriy.</p>
      <p>Welcome to my home page.</p>
      <p>I am a web-developer.</p>
    </div>
  );
};

export default Intro;
