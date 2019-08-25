import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import CardRegistration from './car-registration/car-registration';
import Home from './home/home'
import NavMenu from './layouts/nav-layout/nav-menu';

const App: React.FC = () => {
  return (
    <Router>
      <NavMenu />

      <div className='d-flex justify-content-center body-content'>
        <Route exact path="/" component={Home} />
        <Route path="/card-registration" component={CardRegistration} />
      </div>
    </Router>
  );
}

export default App;
