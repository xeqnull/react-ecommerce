import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

// TODO: remove after testing
const TestPage = () => (
  <div>
    <h1>HELLO</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={TestPage} />
        <Route path='/shop/jackets' component={TestPage} />
        <Route path='/shop/sneakers' component={TestPage} />
        <Route path='/shop/womens' component={TestPage} />
        <Route path='/shop/mens' component={TestPage} />

      </Switch>
    </div>
  );
}

export default App;
