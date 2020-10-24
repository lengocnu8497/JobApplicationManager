import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Kanban from './KanbanBoard';
import TaskBoard from './TaskBoard';
import Card from './InfoRepository';

export default function App() {
  return (
    <BrowserRouter>  
        <Header/>
        <Switch>
          <Route exact path='/repoCard' component={Card}/>   
          <Route exact path='/kanban' component={Kanban}/>   
          <Route exact path='/task' component={TaskBoard}/>                                 
        </Switch> 
        <Footer/>       
    </BrowserRouter>   
  );
}

