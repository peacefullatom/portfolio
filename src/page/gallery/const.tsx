import React from 'react';

export const galleryDescription = (value: string[]): JSX.Element => {
  return (
    <div className='col'>
      {value.map((item, key) => (
        <div key={key}>{item}</div>
      ))}
    </div>
  );
};

export const galleryDescriptionBinaryClock = [
  `The binary clock represents time in binary format (ain't it?).`,
  `Building a fast and minimalist solution was the primary goal.`,
  `So, despite its simple design that clock represents time in a 24-hour format including hours, minutes, seconds and even milliseconds.`,
  `Also, the same approach may be used to display the current date or any other numeric value, but due to lack of interactivity, it is a poor object to be demonstrated as a primary subject of the current gallery.`
];

export const galleryDescriptionDigitalClock = [
  `The digital clock is a way to demonstrate old fashioned pre-LED displays.`,
  `The point is to show the contour of an inactive segment, while the active segment glows brightly.`,
  `Its code base and layout are both intended to be as minimal as possible.`,
  `And design should be strict and simple yet readable.`
];

export const galleryDescriptionMagic8Ball = [
  `An incarnation of the old-good-classic decision maker toy.`,
  `All you need to do is to concentrate, ask a question (answer to which should be in a yes/no manner), tap the ball and wait until it finds an answer.`,
  `Also, one should keep in mind that the ball needs time to rest between decision making, so, don't be impatient and wait for a couple of seconds.`,
  `Its design relies on classic guidelines and its code is simple yet robust.`
];

export const galleryDescriptionFifteenPuzzle = [
  `The Fifteen Puzzle is a classic board game.`,
  `All you need to do is to place the tiles in ascending order.`,
  `You have unlimited moves and time to solve the puzzle, however, if you got stuck you can always restart the game using the reset button.`
];
