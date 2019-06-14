import React from 'react';
import { IAboutContainerProps } from './types';

const AboutContainer: React.FC<IAboutContainerProps> = props => {
  return (
    <div className='container-fluid my-3'>
      <div className='row'>
        <div className='col'>
          <h4>{props.title}</h4>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default AboutContainer;
