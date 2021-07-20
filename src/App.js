import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/home.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Authentication from './pages/authentication/authentication.component';

// TODO: remove after testing
const TestPage = () => (
  <div>
    <h1>HELLO</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/shop/hats' component={TestPage} />
        <Route path='/shop/jackets' component={TestPage} />
        <Route path='/shop/sneakers' component={TestPage} />
        <Route path='/shop/womens' component={TestPage} />
        <Route path='/shop/mens' component={TestPage} />
        <Route path='/authentication' component={Authentication} />
      </Switch>
    </div>
  );
}

export default App;
