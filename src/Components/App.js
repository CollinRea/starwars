import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Nav from './Nav';
import Content from './Content';

import '../Styles/App.css';

class App extends Component {
  render() {
    const topics = [
      'People', 
      'Planets', 
      'Films', 
      'Species', 
      'Vehicles',
      'Starships'
    ];
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <div id="home"></div>
            </Link>
            <Nav topics={topics} />
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

export default App;
