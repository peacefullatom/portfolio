import { ITreeOfLifeItem } from './types';

export const treeOfLifeLeft = 'left';
export const treeOfLifeRight = 'right';

export const introTreeOfLife: ITreeOfLifeItem[] = [
  { date: new Date(1981, 11), position: treeOfLifeLeft, value: `Suddenly, I was born!` },
  { date: new Date(1984, 5), position: treeOfLifeRight, value: `My parents moved to Russia.` },
  { date: new Date(1986, 5), position: treeOfLifeLeft, value: `Learned to ride my bicycle!` },
  { date: new Date(1987, 8), position: treeOfLifeLeft, value: `Went for school.` },
  { date: new Date(1990, 10), position: treeOfLifeRight, value: `My parents bought me first PC!` },
  { date: new Date(1991, 7), position: treeOfLifeRight, value: `The Soviet Union collapsed!` },
  { date: new Date(1995, 3), position: treeOfLifeLeft, value: `Went to London to learn English.` },
  { date: new Date(1996, 0), position: treeOfLifeRight, value: `Worked as loader.` },
  { date: new Date(1997, 1), position: treeOfLifeLeft, value: `Bought my first PC.` },
  { date: new Date(1998, 7), position: treeOfLifeRight, value: `Black August - it's when russian ruble was divided by zero!` },
  { date: new Date(1999, 8), position: treeOfLifeLeft, value: `Went for college.` },
  { date: new Date(1999, 9), position: treeOfLifeRight, value: `Employed as furniture assembler.` },
  { date: new Date(2000, 6), position: treeOfLifeLeft, value: `Earned first money as software developer.` },
  { date: new Date(2001, 4), position: treeOfLifeRight, value: `Employed as website seller.` },
  { date: new Date(2002, 8), position: treeOfLifeLeft, value: `Went for university.` },
  { date: new Date(2004, 5), position: treeOfLifeRight, value: `Employed as network engineer.` },
  { date: new Date(2005, 11), position: treeOfLifeLeft, value: `Met my wife.` },
  { date: new Date(2007, 8), position: treeOfLifeLeft, value: `Wedding!` },
  { date: new Date(2008, 3), position: treeOfLifeRight, value: `Employed as network operations center engineer.` },
  { date: new Date(2008, 7), position: treeOfLifeLeft, value: `Got my driver's license.` },
  { date: new Date(2008, 8), position: treeOfLifeLeft, value: `Bought my first car.` },
  { date: new Date(2010, 2), position: treeOfLifeLeft, value: `My first son was born.` },
  { date: new Date(2011, 9), position: treeOfLifeLeft, value: `Bought my first apartment.` },
  { date: new Date(2012, 3), position: treeOfLifeRight, value: `Employed as software developer.` },
  { date: new Date(2013, 7), position: treeOfLifeLeft, value: `My second and third sons were born (twins!).` },
  { date: new Date(2014, 1), position: treeOfLifeRight, value: `Worked on Olympic Games.` },
  { date: new Date(2014, 2), position: treeOfLifeRight, value: `Employed as front-end developer.` },
  { date: new Date(2016, 10), position: treeOfLifeLeft, value: `Bought my second apartment.` },
  { date: new Date(2017, 3), position: treeOfLifeRight, value: `Employed as senior front-end developer.` },
  { date: new Date(2017, 5), position: treeOfLifeLeft, value: `My fourth son was born.` },
  { date: new Date(2017, 11), position: treeOfLifeLeft, value: `Bought my first van.` },
  { date: new Date(2018, 10), position: treeOfLifeRight, value: `Employed as projects manager.` }
];
