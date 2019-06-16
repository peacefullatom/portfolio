import { faGithub, faInstagram, faLinkedin, faSkype, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { IContact } from './Contact.types';

export const contactLinkMail = 'mail';
export const contactLinkHref = 'href';
export type ContactLink = typeof contactLinkMail | typeof contactLinkHref;

export const contactList: IContact[] = [
  { icon: faPhoneSquareAlt, label: '+79504696434', link: { value: 'tel:+79504696434', type: contactLinkHref } },
  { icon: faEnvelope, label: 'peacefullatom@gmail.com', link: { value: 'peacefullatom@gmail.com', type: contactLinkMail } },
  { icon: faGithub, label: 'peacefullatom', link: { value: 'https://github.com/peacefullatom', type: contactLinkHref } },
  { icon: faLinkedin, label: 'Yuriy Markov', link: { value: 'https://www.linkedin.com/in/yuriy-markov-797434b3', type: contactLinkHref } },
  { icon: faSkype, label: 'y.i.markov', link: { value: 'skype:y.i.markov?chat', type: contactLinkHref } },
  { icon: faTelegram, label: '@yuriy_markov', link: { value: 'tg://resolve?domain=@yuriy_markov', type: contactLinkHref } },
  { icon: faTwitter, label: 'Yuriy Markov', link: { value: 'https://twitter.com/markov_yuriy', type: contactLinkHref } },
  { icon: faInstagram, label: 'Yuriy Markov', link: { value: 'https://www.instagram.com/peacefullatom/', type: contactLinkHref } }
];
