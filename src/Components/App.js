import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Nav from './Nav';
import Content from './Content';

import '../Styles/App.css';

class App extends Component {
  state = {
    topics:[]
  };
  componentDidMount() {
    const topics = [
      'people', 
      'planets', 
      'films', 
      'species', 
      'vehicles',
      'starships'
    ];
    const context = this;
    topics.forEach((topic) => {
      async function fetchData() {
        const response = await fetch('https://swapi.co/api/' + topic);
        const data = await response.json();
        await context.setState({
          topics: [
            ...context.state.topics, {
              name: topic,
              data: {
                count: data.count, 
                results: data.results,
                next: data.next,
                prev: data.previous
              }
            }
          ]
        });
      }
      fetchData();
    });
  }
  render() {
    const topics = [
      'people', 
      'planets', 
      'films', 
      'species', 
      'vehicles',
      'starships'
    ];
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <div id="home"></div>
            </Link>
            <Nav topics={topics.sort()} />
          </header>
          <div className="App-content">
            <Route exact path="/" component={Home} />
            <Route path="/:topic" render={(props) => 
              (<Content {...props} data={this.state.topics}/>)} 
             />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const Home = () => <h2>Select a topic to explore the world of Star Wars!</h2>;

export default App;
