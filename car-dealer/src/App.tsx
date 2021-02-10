import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './about/about';
import './App.css';
import CardRegistration from './car-registration/car-registration';
import Home from './home/home';
import NavMenu from './layouts/nav-layout/nav-menu';

const App: React.FC = () => {
  return (
    <Router>
      <NavMenu />
      <div className='d-flex body-content'>
        <Route exact path="/" component={Home} />
        <Route path="/card-registration" component={CardRegistration} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
