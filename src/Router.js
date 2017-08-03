import React from 'react';

import { Router as ReactRouter, Route } from 'react-router';

import App from './App';
import Ingredients from './components/Ingredients'
import Recipes from './components/Recipes'

function Router({ history }) {
  return (
    <ReactRouter history={history}>
      <Route path="/" component={App}>
        <Route path="/ingredients" component={Ingredients}> </Route>
        <Route path="/recipes" component={Recipes}> </Route>
      </Route>
    </ReactRouter>
  );
}

export default Router;
