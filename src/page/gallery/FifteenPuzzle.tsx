import React, { useEffect, useState } from 'react';
import { galleryDescriptionFifteenPuzzle } from './const';
import GalleryContainer from './Container';
import './FifteenPuzzle.scss';

interface IFifteenPuzzleTile {
  value: number;
  index: number;
  correct: boolean;
  movable?: boolean;
  swap?: number;
}

const yStep = 4;
const xStep = 1;
const initialTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
const cheatTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15];

const getTiles = (tiles: number[], solved?: boolean): IFifteenPuzzleTile[] => {
  let emptyTile = -1;
  const result: IFifteenPuzzleTile[] = tiles.map((tile, index) => {
    if (!tile) {
      emptyTile = index;
    }
    return {
      value: tile,
      correct: initialTiles[index] === tile,
      index
    };
  });

  if (!solved) {
    [
      { step: -xStep, check: (value: number) => !!((value + 1) % 4) },
      { step: -yStep },
      { step: xStep, check: (value: number) => !!(value % 4) },
      { step: yStep }
    ].forEach(item => {
      const tile = emptyTile + item.step;
      if (tile >= 0 && tile < tiles.length) {
        result[tile].movable = item.check ? item.check(tile) : true;
        result[tile].swap = -item.step;
      }
    });
  }

  return result;
};

const shuffle = (array: number[]): number[] => array.slice().sort(() => (Math.random() >= 0.5 ? +1 : -1));

const extract = (array: IFifteenPuzzleTile[]): number[] => array.slice().map(item => item.value);

const FifteenPuzzle: React.FC = () => {
  const [tiles, setTiles] = useState(getTiles(shuffle(initialTiles)));
  const solved = tiles.every((tile, index) => tile.value === initialTiles[index]);

  useEffect(() => {
    if (solved) {
      setTiles(getTiles(extract(tiles), solved));
    }
  }, [solved, tiles]);

  const swap = (tile: IFifteenPuzzleTile): void => {
    if (!solved && tile.movable && typeof tile.swap === 'number') {
      tiles[tile.index + tile.swap].value = tile.value;
      tiles[tile.index].value = 0;
      setTiles(getTiles(extract(tiles)));
    }
  };

  const restart = (): void => setTiles(getTiles(shuffle(initialTiles)));

  const label = (tile: IFifteenPuzzleTile): string => {
    return tile.value ? tile.value.toString() : ' ';
  };

  const className = (tile: IFifteenPuzzleTile): string => {
    const list = ['fifteenPuzzle__tile', 'd-flex'];
    if (tile.correct && tile.value) {
      list.push('fifteenPuzzle__tile_correct');
    }
    if (tile.movable && !solved) {
      list.push('fifteenPuzzle__tile_movable');
    }
    return list.join(' ');
  };

  const click = (tile: IFifteenPuzzleTile): void => {
    if (!solved && tile.movable) {
      swap(tile);
    }
  };

  const cheat = (): void => setTiles(getTiles(cheatTiles));

  return (
    <GalleryContainer description={galleryDescriptionFifteenPuzzle}>
      <div className='fifteenPuzzle d-flex m-auto justify-content-center'>
        {tiles.map((tile, key) => (
          <div key={key} className={className(tile)} onClick={() => click(tile)}>
            {label(tile)}
          </div>
        ))}
        <button
          type='button'
          className='btn btn-primary my-3'
          onClick={event => {
            if (event.ctrlKey && !solved) {
              cheat();
            } else {
              restart();
            }
          }}
        >
          Reset
        </button>
      </div>
    </GalleryContainer>
  );
};

export default FifteenPuzzle;
