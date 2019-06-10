import { fill, pad } from 'common';
import useInterval from 'hooks/useInterval';
import React, { useEffect, useState } from 'react';
import './BinaryClock.scss';
import { galleryDescriptionBinaryClock } from './const';
import GalleryContainer from './Container';

const BinaryClock: React.FC = () => {
  const [now, setNow] = useState(new Date());
  const [hours, setHours] = useState(now.getHours());
  const [minutes, setMinutes] = useState(now.getMinutes());
  const [seconds, setSeconds] = useState(now.getSeconds());
  const [milliseconds, setMilliseconds] = useState(now.getMilliseconds());

  useInterval(() => setNow(new Date()), 133);

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

  const format = (value: number): string[] =>
    pad(value)
      .split('')
      .map(digit => fill(parseInt(digit).toString(2)));

  const bit = (value: string, key: number): JSX.Element => {
    const base = 'binaryClock__item';
    let className = base;

    if (value === '1') {
      className = `${base} ${base}_active`;
    }

    return <div key={key} className={className} />;
  };

  const bits = (value: string, key: number): JSX.Element => {
    return (
      <div key={key} className='binaryClock__block'>
        {value.split('').map((item, index) => bit(item, index))}
      </div>
    );
  };

  return (
    <GalleryContainer description={galleryDescriptionBinaryClock}>
      <div className='binaryClock d-flex m-auto'>
        <div className='d-flex'>{format(hours).map((hour, key) => bits(hour, key))}</div>
        <div className='d-flex'>{format(minutes).map((minute, key) => bits(minute, key))}</div>
        <div className='d-flex'>{format(seconds).map((second, key) => bits(second, key))}</div>
        <div className='d-flex'>{format(milliseconds).map((millisecond, key) => bits(millisecond, key))}</div>
      </div>
    </GalleryContainer>
  );
};

export default BinaryClock;
