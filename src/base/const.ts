import About from 'page/about/About';
import Contact from 'page/contact/Contact';
import Gallery from 'page/gallery/Gallery';
import Intro from 'page/intro/Intro';
import { ILink } from 'types';

export const defaultLink: ILink = { path: '/', label: 'Intro', component: Intro };

export const baseLinks: ILink[] = [
  { path: '/gallery', label: 'Gallery', component: Gallery },
  { path: '/about', label: 'About', component: About },
  { path: '/contact', label: 'Contact', component: Contact }
];
