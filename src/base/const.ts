import { faBootstrap, faGitSquare, faReact, faSass, faYarn } from '@fortawesome/free-brands-svg-icons';
import About from 'page/about/About';
import Contact from 'page/contact/Contact';
import Gallery from 'page/gallery/Gallery';
import Intro from 'page/intro/Intro';
import { ILink } from 'types';
import { IFooter } from './types';

export const defaultLink: ILink = { path: '/', label: 'Intro', component: Intro };
export const contactLink: ILink = { path: '/contact', label: 'Contact', component: Contact };

export const baseLinks: ILink[] = [
  { path: '/gallery', label: 'Gallery', component: Gallery },
  { path: '/about', label: 'About', component: About },
  contactLink
];

export const footerLinks: IFooter[] = [
  { icon: faReact, link: 'https://reactjs.org/' },
  { icon: faBootstrap, link: 'https://getbootstrap.com/' },
  { icon: faGitSquare, link: 'https://git-scm.com/' },
  { icon: faSass, link: 'https://sass-lang.com/' },
  { icon: faYarn, link: 'https://yarnpkg.com/' }
];
