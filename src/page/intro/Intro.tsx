import { baseLinks } from 'base/const';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ILink } from 'types';
import { pageBaseClassName } from '../const';

const Link: React.FC<ILink> = props => {
  return <NavLink to={props.path}>{props.children}</NavLink>;
};

const Intro: React.FC = () => {
  const [gallery, about, contact] = baseLinks;
  return (
    <div className={pageBaseClassName}>
      <div className='row'>
        <div className='col-sm-6'>
          <p>Hello, my name is Yuriy.</p>
          <p>Welcome to my home page.</p>
          <p>I am a web developer.</p>
          <p>
            You can browse <Link {...gallery}>my gallery</Link>.
          </p>
          <p>
            Or you can learn a bit more <Link {...about}>about me</Link>.
          </p>
          <p>
            Here one can find a way to <Link {...contact}>contact me</Link>.
          </p>
        </div>
        <div className='col-sm-6'>
          <p>Here is the story of my life (short version).</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
