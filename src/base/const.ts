import About from 'page/About';
import Contact from 'page/Contact';
import Gallery from 'page/Gallery';
import Intro from 'page/Intro';
import { ILink } from 'types';

export const defaultLink: ILink = { path: '/', label: 'Intro', component: Intro };

export const baseLinks: ILink[] = [
  { path: '/gallery', label: 'Gallery', component: Gallery },
  { path: '/about', label: 'About', component: About },
  { path: '/contact', label: 'Contact', component: Contact }
];
