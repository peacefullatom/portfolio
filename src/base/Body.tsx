import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { baseLinks, defaultLink } from './const';

const Body: React.FC = () => {
  return (
    <div className='flex-shrink-0'>
      <Switch>
        <Route exact path={defaultLink.path} component={defaultLink.component} />
        {baseLinks.map((link, key) => (
          <Route key={key} path={link.path} component={link.component} />
        ))}
        <Redirect to={defaultLink.path} />
      </Switch>
    </div>
  );
};

export default Body;
