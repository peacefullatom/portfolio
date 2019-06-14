import React from 'react';
import AboutContainer from './Container';

const Me: React.FC = () => {
  return (
    <AboutContainer title={'Me'}>
      <div className='row'>
        <div className='col'>Hello! My name is Yuriy, I'm from Russia.</div>
      </div>
      <div className='row'>
        <div className='col'>I'm looking for an interesting job as well as a new experience :)</div>
      </div>
    </AboutContainer>
  );
};

export default Me;
