import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Game from './pages/Game';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Game} />
      </Switch>
    </BrowserRouter>
  );
}
