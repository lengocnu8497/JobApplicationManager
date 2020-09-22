import React from 'react';
import Home from './layout/Home';
import Stephen from './layout/Stephen';
import Nu from './layout/Nu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>      
        <Switch>
          <Route exact path='/' component={Home}/>   
          <Route exact path='/stephen' component={Stephen}/>   
          <Route exact path='/nu' component={Nu}/>                             
        </Switch>        
    </BrowserRouter>   
  );
}

