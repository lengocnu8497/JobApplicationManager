import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import Header from './Header';
import Footer from './Footer';
import Kanban from './KanbanBoard';
import TaskBoard from './TaskBoard';
import Card from './InfoRepository';

import { CookiesProvider } from 'react-cookie'; 

export default function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Switch>
<<<<<<< HEAD
          { /* Unauthenticated view */ }
          <Route exact path={["/"]}>
              <Route exact path='/' component={SignIn}/>                                     
          </Route>
          { /* Authenticated view */ }
          <Route exact path={["/task", "/kanban" ]}>
            <Header/>
              <Switch>
                  <Route exact path='/task' component={TaskBoard}/> 
                  <Route exact path='/kanban' component={Kanban}/>                                       
              </Switch>
            <Footer/>                                      
          </Route>
          { /* Wrong url view */ }
          <Route path="*" component={NotFoundPage}/>

        </Switch>
      </BrowserRouter>
    </CookiesProvider>
=======
          <Route exact path='/repoCard' component={Card}/>   
          <Route exact path='/kanban' component={Kanban}/>   
          <Route exact path='/task' component={TaskBoard}/>                                 
        </Switch> 
        <Footer/>       
    </BrowserRouter>   
>>>>>>> f0e489c59d4d98ae7528e4b7b9f0860308a6ef04
  );
}

const NotFoundPage = () => <h1>404 Page Not Found</h1>;