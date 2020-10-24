import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SignIn from './SignIn';
import Kanban from './KanbanBoard';
import TaskBoard from './TaskBoard';

import { CookiesProvider } from 'react-cookie'; 

export default function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>  
          <Header/>
          <Switch>
            <Route exact path='/' component={SignIn}/> 
            <Route exact path='/kanban' component={Kanban}/>   
            <Route exact path='/task' component={TaskBoard}/>                                 
          </Switch> 
          <Footer/>       
      </BrowserRouter> 
    </CookiesProvider>  
  );
}

