import BinaryClock from './gallery/BinaryClock';
import DigitalClock from './gallery/DigitalClock';
import FifteenPuzzle from './gallery/FifteenPuzzle';
import Magic8Ball from './gallery/Magic8Ball';

export const navGalleryBinaryClock = 'binary-clock';
export const navGalleryRedirect = navGalleryBinaryClock;

export const navGallery = [
  { path: navGalleryBinaryClock, label: 'Binary clock', component: BinaryClock },
  { path: 'digital-clock', label: 'Digital clock', component: DigitalClock },
  { path: 'magic-8-ball', label: 'Magic 8 ball', component: Magic8Ball },
  { path: 'fifteen-puzzle', label: 'Fifteen puzzle', component: FifteenPuzzle }
];
