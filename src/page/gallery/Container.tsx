import React from 'react';
import { galleryDescription } from './const';
import { IGalleryContainerProps } from './types';

const GalleryContainer: React.FC<IGalleryContainerProps> = props => {
  return (
    <div className='row'>
      <div className='col d-flex'>{props.children}</div>
      {galleryDescription(props.description)}
    </div>
  );
};

export default GalleryContainer;
