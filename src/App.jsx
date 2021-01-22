import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from './container/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';
import Orders from './container/Orders/Orders';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' exact component={BurgerBuilder} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;


