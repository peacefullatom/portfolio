import { ReactNode } from 'react';

export interface IAboutContainerProps {
  children: ReactNode;
  title: string;
}

export interface IAboutSkills {
  title: string;
  items: string[];
}

export interface IAboutExperience {
  startDate: Date;
  endDate?: Date;
  company: string;
  title: string;
  description: string[];
}

export interface IAboutReading {
  title: string;
  linkHref: string;
  linkLabel: string;
  description: string[];
}
