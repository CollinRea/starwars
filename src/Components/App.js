import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Nav from './Nav';
import Content from './Content';

import '../Styles/App.css';

class App extends Component {
  state = {
    topicNames : [
      'people', 
      'planets', 
      'films', 
      'species', 
      'vehicles',
      'starships'
    ],
    topics: []
  };
  componentDidMount() {
    const context = this;
    context.state.topicNames.forEach((topic) => {
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
  componentDidUpdate(_, prevState){
    console.log({prevState});
  }
  handleClick = (e) => {
    this.setState({filter: e.target.innerHTML});
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <div id="home"></div>
            </Link>
            <Nav 
              topics={this.state.topicNames.sort()} 
              onClick={this.handleClick}
             />
          </header>
          <div className="App-content">
            <Route exact path="/" component={Home} />
            <Route path="/:topic" render={(props) => 
              <Content {...props} topics={this.state.topics}/>} 
             />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const Home = () => <h2>Select a topic to explore the world of Star Wars!</h2>;

export default App;
