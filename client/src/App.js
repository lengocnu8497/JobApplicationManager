import React from 'react';
import Home from './layout/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>      
        <Switch>
          <Route exact path='/' component={Home}/>                                      
        </Switch>        
    </BrowserRouter>   
  );
}

