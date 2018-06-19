import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, About } from './components';

export default (
  <Switch>
    <Route exact path="/teste" component={Home} />
    <Route path="/about" component={About} />
  </Switch>
);
