import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { pageBaseClassName } from './const';
import { contactLinkMail, contactList } from './Contact.const';
import './Contact.scss';
import { IContact, IContactLink } from './Contact.types';

const contactLink = (props: IContactLink): string => (props.type === contactLinkMail ? 'mailto:' : '') + props.value;

const ContactValue: React.FC<IContact> = props => {
  if (props.link) {
    return (
      <a href={contactLink(props.link)} target='_blank' rel='noopener noreferrer'>
        {props.label}
      </a>
    );
  }
  return <>{props.label}</>;
};

const ContactBlock: React.FC<IContact> = props => {
  return (
    <div className='col-sm-12 col-md-6 col-lg-3 mb-3 d-flex align-items-center'>
      <FontAwesomeIcon icon={props.icon} className='fa-fw fa-2x mr-2 contact__icon' />
      <ContactValue {...props} />
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <div className={pageBaseClassName}>
      <div className='row'>
        {contactList.map((item, key) => (
          <ContactBlock key={key} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
