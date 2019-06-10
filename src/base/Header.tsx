import { me } from 'const';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { baseLinks, defaultLink } from './const';

const Header: React.FC = () => {
  const toggler = React.createRef<HTMLButtonElement>();
  const navbar = React.createRef<HTMLDivElement>();
  const click = () => {
    if (toggler.current && navbar.current) {
      toggler.current.classList.toggle('collapsed');
      navbar.current.classList.toggle('show');
    }
  };

  return (
    <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark'>
      <NavLink to={defaultLink.path} className='navbar-brand'>
        {me}
      </NavLink>
      <button className='navbar-toggler' type='button' onClick={click} ref={toggler}>
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' ref={navbar}>
        <ul className='navbar-nav mr-auto'>
          {baseLinks.map((link, key) => (
            <li key={key} className='nav-item'>
              <NavLink to={link.path} className='nav-link' activeClassName='active' onClick={click}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
