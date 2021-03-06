import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ContactLink } from './const';

export interface IContactLink {
  value: string;
  type: ContactLink;
}

export interface IContact {
  icon: IconDefinition;
  label: string;
  link?: IContactLink;
}
