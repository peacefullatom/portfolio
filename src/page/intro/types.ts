import { treeOfLifeLeft, treeOfLifeRight } from './const';

export type TreeOfLifePosition = typeof treeOfLifeLeft | typeof treeOfLifeRight;

export interface ITreeOfLifeItem {
  date: Date;
  value: string;
  position: TreeOfLifePosition;
}
