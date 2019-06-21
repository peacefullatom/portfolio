import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { footerLinks } from './const';
import './Footer.scss';
import { IFooter } from './types';

const FooterLink: React.FC<IFooter> = props => {
  return (
    <a href={props.link} target='_blank' rel='noopener noreferrer'>
      <FontAwesomeIcon icon={props.icon} className='mx-1 footer__icon' />
    </a>
  );
};

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className='footer mt-auto py-3 px-3 d-flex justify-content-between flex-shrink-0'>
      <div>
        {footerLinks.map((link, key) => (
          <FooterLink key={key} {...link} />
        ))}
      </div>
      <div>&copy; {year} Yuriy Markov</div>
    </div>
  );
};

export default Footer;
