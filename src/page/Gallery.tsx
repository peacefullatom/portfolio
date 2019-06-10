import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import { navGallery, navGalleryRedirect } from './Gallery.const';

const Gallery: React.FC<RouteComponentProps> = ({ match }: RouteComponentProps) => {
  return (
    <div className='container-fluid my-3'>
      <nav className='nav nav-pills justify-content-center my-3'>
        {navGallery.map((route, key) => (
          <NavLink className='nav-item nav-link' key={key} to={`${match.path}/${route.path}`} activeClassName='active'>
            {route.label}
          </NavLink>
        ))}
      </nav>
      <Switch>
        {navGallery.map((route, key) => (
          <Route key={key} path={`${match.path}/${route.path}`} component={route.component} />
        ))}
        <Redirect to={`${match.path}/${navGalleryRedirect}`} />
      </Switch>
    </div>
  );
};

export default Gallery;
