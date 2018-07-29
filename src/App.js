import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Nav from './Nav';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App"> 
          <header className="App-header">
            <Nav/>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
