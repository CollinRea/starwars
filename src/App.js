import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Nav from './Nav';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
          <Link to="/"><div id="home"></div></Link>
            <Nav/>
          </header>
          <div className="App-content">
            <Route exact path="/" component={Home} />
            <Route path="/:topic" component={Content} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const Home = () => <h2>Select a topic to explore the world of Star Wars!</h2>;

const Content = ({match}) => <h2>{match.params.topic}</h2>;

export default App;
