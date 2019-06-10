import { RouteComponentProps } from 'react-router';

export interface ILink {
  path: string;
  label: string;
  component: React.FC | React.FC<RouteComponentProps>;
}
