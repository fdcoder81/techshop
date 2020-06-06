import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import ProductPage from './components/product-page/ProductPage';
import ShoppingCart from './components/shopping-cart/ShoppingCart';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={ProductPage} />
        <Route path='/cart' component={ShoppingCart} />
      </Switch>
    </div>
  );
}

export default App;
