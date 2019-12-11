import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Component/nav';
import home from './Component/home'
import Footer from './Component/footer'
import About from './Component/about'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
