import Body from 'base/Body';
import { baseLinks, defaultLink } from 'base/const';
import Footer from 'base/Footer';
import Header from 'base/Header';
import { me } from 'const';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Router } from 'react-router';
import './App.scss';

const links = [...baseLinks, defaultLink];
const history = createBrowserHistory();

history.listen(listener => {
  const { pathname } = listener;
  const url = links.find(link => !!pathname.match(new RegExp(link.path, 'i')));
  document.title = url ? url.label : me;
});

const App: React.FC = () => {
  return (
    <Router history={history}>
      <div className='d-flex flex-column h-100'>
        <Header />
        <Body />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
