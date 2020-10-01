import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  return (
    <BrowserRouter>  
        <Header/>
        <Switch>
          <Route exact path='/example' component={(() => <div>Hello There</div>)}/>                                
        </Switch> 
        <Footer/>       
    </BrowserRouter>   
  );
}

