import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Nav from './Nav';
import Content from './Content';

import '../Styles/App.css';

class App extends Component {
  state = {
    topicNames : [
      'People', 
      'Planets', 
      'Films', 
      'Species', 
      'Vehicles',
      'Starships'
    ],
    topics: [],
    isLoading: false
  };
  componentDidMount() {
    this.setState({isLoading: true})
    const promises = this.state.topicNames.map((topic) => {
      async function fetchData() {
        const url = topic.toLowerCase();
        const response = await fetch('https://swapi.co/api/' + url);
        const data = await response.json();
        return {...data, topic: url};
      }
      // Return promise to set state once all topics have resolved
      return fetchData();
    });
    Promise.all(promises).then((values)=> {
      this.setState({isLoading: false});
      values.forEach((topic)=> {
        this.setState({
          topics: [...this.state.topics, topic]
        })
      });
    });
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
              <Content {...props} topics={this.state.topics} />} 
             />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const Home = () => <h2>Select a topic to explore the world of Star Wars!</h2>;

export default App;
