import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Component/nav';
import home from './Component/home'
import Footer from './Component/footer'
import Goals from './Component/goals'
import Mission from './Component/mission'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/goals" component={Goals} />
            <Route path="/mission" component={Mission} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
