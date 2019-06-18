import { months } from 'const';
import React from 'react';
import { introTreeOfLife } from './const';
import './TreeOfLife.scss';
import { ITreeOfLifeItem } from './types';

const TreeOfLifeBlock: React.FC<ITreeOfLifeItem> = props => {
  const tree = 'tree';
  const block = `${tree}__block`;
  const position = `${tree}_${props.position}`;
  const date = `${tree}__date`;
  const content = `${tree}__content`;

  const date2str = (value: Date): string => [months[value.getMonth()], value.getFullYear()].join(' ');

  return (
    <div className={`${block} ${position}`}>
      <div className={content}>
        <div className={date}>{date2str(props.date)}</div>
        {props.value}
      </div>
    </div>
  );
};

const TreeOfLife: React.FC = () => {
  return (
    <div className='my-3'>
      {introTreeOfLife
        .sort((a, b) => {
          if (a.date.getTime() > b.date.getTime()) {
            return -1;
          }
          if (a.date.getTime() < b.date.getTime()) {
            return 1;
          }
          return 0;
        })
        .map((item, key) => (
          <TreeOfLifeBlock key={key} {...item} />
        ))}
    </div>
  );
};

export default TreeOfLife;
