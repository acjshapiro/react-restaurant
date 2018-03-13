import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Menu_Item from './components/Menu_Item';


const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/menu" component={Menu} />
      <Route path="/menu_Items/:id" component={Menu_Item} />
      <Route component={NoMatch} />
    </Switch>  
  </div> 
);

export default App;