import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Kanban from './KanbanBoard';

export default function App() {
  return (
    <BrowserRouter>  
        <Header/>
        <Switch>
          <Route exact path='/kanban' component={Kanban}/>                                
        </Switch> 
        <Footer/>       
    </BrowserRouter>   
  );
}

