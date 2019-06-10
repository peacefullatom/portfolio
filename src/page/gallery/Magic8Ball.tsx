import { fill } from 'common';
import useInterval from 'hooks/useInterval';
import React, { useState } from 'react';
import { galleryDescriptionMagic8Ball } from './const';
import GalleryContainer from './Container';
import './Magic8Ball.scss';

interface IMagic8BallEntry {
  label: string;
  color: string;
}

const RechargeTimeout = 3e3;
const RechargeStep = 133;

const Magic8BallStateQuestion = 0;
const Magic8BallStateSeek = 1;
const Magic8BallStateAnswer = 2;
const Magic8BallStateRecharge = 3;

const Magic8BallQuestion: IMagic8BallEntry = {
  label: 'Ask a question.',
  color: 'white'
};

const lightgreen = 'lightgreen';
const yellow = 'yellow';
const red = 'red';

const Magic8BallAnswers: IMagic8BallEntry[] = [
  // affirmative
  { label: `It is certain.`, color: lightgreen },
  { label: `It is decidedly so.`, color: lightgreen },
  { label: `Without a doubt.`, color: lightgreen },
  { label: `Yes - definitely.`, color: lightgreen },
  { label: `You may rely on it.`, color: lightgreen },
  { label: `As I see it, yes.`, color: lightgreen },
  { label: `Most likely.`, color: lightgreen },
  { label: `Outlook good.`, color: lightgreen },
  { label: `Yes.`, color: lightgreen },
  { label: `Signs point to yes.`, color: lightgreen },
  // non-committal
  { label: `Reply hazy, try again.`, color: yellow },
  { label: `Ask again later.`, color: yellow },
  { label: `Better not tell you now.`, color: yellow },
  { label: `Cannot predict now.`, color: yellow },
  { label: `Concentrate and ask again.`, color: yellow },
  // negative
  { label: `Don't count on it.`, color: red },
  { label: `My reply is no.`, color: red },
  { label: `My sources say no.`, color: red },
  { label: `Outlook not so good.`, color: red },
  { label: `Very doubtful.`, color: red }
];

const Label = (label: IMagic8BallEntry): JSX.Element => {
  return (
    <div>
      <div className='magic8ball__label' style={{ color: label.color }}>
        {label.label}
      </div>
    </div>
  );
};

const bit = (value: string, key: number): JSX.Element => {
  const accentColors = [`charger__item_black`, `charger__item_yellow`];
  const accent = accentColors[Math.floor(Math.random() * accentColors.length)];
  const className = ['charger__item', accent];

  if (value === '1') {
    className.push('charger__item_active');
  }

  return <div key={key} className={className.join(' ')} />;
};

const bits = (value: string, key: number): JSX.Element => {
  return (
    <div key={key} className='charger__row d-flex'>
      {value.split('').map((item, index) => bit(item, index))}
    </div>
  );
};

const Charger = (props: { mark: number }): JSX.Element => {
  let { mark } = props;
  if (mark < 0) {
    mark = 0;
  }
  const data = fill(mark.toString())
    .split('')
    .map(item => fill(parseInt(item).toString(2)));
  return <div>{data.map((bit, key) => bits(bit, key))}</div>;
};

const mark = (): number => RechargeTimeout + Math.floor(Math.random() * RechargeStep);

const Magic8Ball: React.FC = () => {
  const [state, setState] = useState(Magic8BallStateQuestion);
  const [content, setContent] = useState(<Label {...Magic8BallQuestion} />);
  const [counter, setCounter] = useState(0);

  useInterval(() => {
    if (state === Magic8BallStateSeek || state === Magic8BallStateRecharge) {
      let currentCounter = counter - RechargeStep;
      if (currentCounter < 0) {
        currentCounter = 0;
      }
      setCounter(currentCounter);
      if (counter) {
        setContent(<Charger mark={counter} />);
      } else {
        if (state === Magic8BallStateSeek) {
          setState(Magic8BallStateAnswer);
          const answer = Math.floor(Math.random() * Magic8BallAnswers.length);
          setContent(<Label {...Magic8BallAnswers[answer]} />);
        }
        if (state === Magic8BallStateRecharge) {
          setState(Magic8BallStateQuestion);
          setContent(<Label {...Magic8BallQuestion} />);
        }
      }
    }
  }, RechargeStep);

  const updateState = (): void => {
    if (state === Magic8BallStateQuestion) {
      setState(Magic8BallStateSeek);
      setCounter(mark());
    }
    if (state === Magic8BallStateAnswer) {
      setState(Magic8BallStateRecharge);
      setCounter(mark());
    }
  };

  return (
    <GalleryContainer description={galleryDescriptionMagic8Ball}>
      <div className='magic8ball__container d-flex m-auto' onClick={() => updateState()}>
        {content}
      </div>
    </GalleryContainer>
  );
};

export default Magic8Ball;
