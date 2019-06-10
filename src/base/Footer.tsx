import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return <div className='footer mt-auto py-3 pr-3 d-flex justify-content-end flex-shrink-0'>&copy; {year} Yuriy Markov</div>;
};

export default Footer;
