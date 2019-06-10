import { pad } from 'common';
import useInterval from 'hooks/useInterval';
import React, { useEffect, useState } from 'react';
import { galleryDescriptionDigitalClock } from './const';
import GalleryContainer from './Container';
import './DigitalClock.scss';

const DigitalClockDigits = [
  [[1, 1], [1, 0, 1], [1, 1]], // 0
  [[0, 0], [0, 0, 0], [1, 1]], // 1
  [[0, 1], [1, 1, 1], [1, 0]], // 2
  [[0, 0], [1, 1, 1], [1, 1]], // 3
  [[1, 0], [0, 1, 0], [1, 1]], // 4
  [[1, 0], [1, 1, 1], [0, 1]], // 5
  [[1, 1], [1, 1, 1], [0, 1]], // 6
  [[0, 0], [1, 0, 0], [1, 1]], // 7
  [[1, 1], [1, 1, 1], [1, 1]], // 8
  [[1, 0], [1, 1, 1], [1, 1]] // 9
];

const barClass = (type: string, active: number): string => {
  return ['digitalClock__bar', type, active ? 'digitalClock__bar_active' : ''].join(' ');
};

const colonClass = (active: boolean): string => {
  return ['digitalClock__dot', active ? 'digitalClock__dot_active' : ''].join(' ');
};

const WideColumn = (props: { bars: number[] }): JSX.Element => {
  const [topBar, middleBar, bottomBar] = props.bars;
  const type = 'digitalClock__bar_horizontal';
  return (
    <div className='digitalClock__column digitalClock__column_wide'>
      <div className={barClass(type, topBar)} />
      <div className={barClass(type, middleBar)} />
      <div className={barClass(type, bottomBar)} />
    </div>
  );
};

const Column = (props: { bars: number[] }): JSX.Element => {
  const [topBar, bottomBar] = props.bars;
  const type = 'digitalClock__bar_vertical';
  return (
    <div className='digitalClock__column'>
      <div className={barClass(type, topBar)} />
      <div className={barClass(type, bottomBar)} />
    </div>
  );
};

const Digit = (props: { digit: number }): JSX.Element => {
  const [leftColumn, middleColumn, rightColumn] = DigitalClockDigits[props.digit];

  return (
    <div className='digitalClock__digit d-flex'>
      <Column bars={leftColumn} />
      <WideColumn bars={middleColumn} />
      <Column bars={rightColumn} />
    </div>
  );
};

const dial = (value: string): JSX.Element[] => {
  return value.split('').map((digit, key) => <Digit key={key} digit={parseInt(digit)} />);
};

const colon = (active: boolean): JSX.Element => {
  return (
    <div className='digitalClock__column digitalClock__column_dense'>
      <div className={colonClass(active)} />
      <div className={colonClass(active)} />
    </div>
  );
};

const DigitalClock: React.FC = () => {
  const [now, setNow] = useState(new Date());
  const [hours, setHours] = useState(now.getHours());
  const [minutes, setMinutes] = useState(now.getMinutes());
  const [seconds, setSeconds] = useState(now.getSeconds());
  const [milliseconds, setMilliseconds] = useState(now.getMilliseconds());
  const [colonActive, setColonActive] = useState(false);

  useInterval(() => setNow(new Date()), 133);
  useInterval(() => setColonActive(!colonActive), 500);

  useEffect(() => {
    setHours(now.getHours());
  }, [now]);

  useEffect(() => {
    setMinutes(now.getMinutes());
  }, [now]);

  useEffect(() => {
    setSeconds(now.getSeconds());
  }, [now]);

  useEffect(() => {
    setMilliseconds(now.getMilliseconds());
  }, [now]);

  return (
    <GalleryContainer description={galleryDescriptionDigitalClock}>
      <div className='digitalClock d-flex m-auto'>
        {dial(pad(hours))}
        {colon(colonActive)}
        {dial(pad(minutes))}
        {colon(colonActive)}
        {dial(pad(seconds))}
        {colon(colonActive)}
        {dial(pad(milliseconds))}
      </div>
    </GalleryContainer>
  );
};

export default DigitalClock;
