import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Nav from './Nav';
import Content from './Content';

import '../Styles/App.css';

class App extends Component {
  state = {
    topicNames : [
      {name: 'People'}, 
      {name: 'Planets'}, 
      {name: 'Films'}, 
      {name: 'Species'}, 
      {name: 'Vehicles'},
      {name: 'Starships'}
    ],
    topics: [],
    schemas: []
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    const promises = this.state.topicNames.map((topic) => {
      async function fetchData() {
        const subject = topic.name.toLowerCase()
        const response = await fetch('https://swapi.co/api/' + subject);
        const data = await response.json();
        return {...data, topic: subject};
      }
      // Return promise to set state once all topics have resolved
      return fetchData();
    });
    Promise.all(promises).then((values)=> {
      values.forEach((topic)=> {
        this.setState({
          topics: [...this.state.topics, topic]
        })
      });
    });

    const schemas = this.state.topicNames.map((topic) => {
      async function fetchData() {
        const subject = topic.name.toLowerCase()
        const response = 
          await fetch('https://swapi.co/api/' + subject + '/schema');
        const schema = await response.json();
        return {...schema, subject: subject};
      }
      // Return promise to set state once all topics have resolved
      return fetchData();
    });
    Promise.all(schemas).then((values)=> {
      values.forEach((topic)=> {
        this.setState({
          schemas: [...this.state.schemas, topic]
        })
      });
    });
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleToTop = () => {
    window.scrollTo(0, 0);
  }
  handleGoBack = () => {
    window.history.back();
  }
  handleScroll = (e) => {
    const upBtn = document.querySelector('.scroll-up');
    if (window.scrollY >= 200) {
      upBtn.style.cssText = "transform: translate(150px);"
    } else {
      upBtn.style.cssText = "transform: translate(-150px);"
    }
  }
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <header className="App-header">
              <Link to="/">
                <div id="home"></div>
              </Link>
            </header>
            <Nav topics={this.state.topicNames.sort()}>
              <div 
                className="btn scroll-up"
                style={{"visbility":"hidden"}}
                onClick={this.handleToTop}>
                Up
              </div>
              <div 
                className="btn go-back" 
                onClick={this.handleGoBack}>
                Back
              </div>
            </Nav>
            <div className="App-content">
              <Route exact path="/" component={Home} />
              <Route exact path="/:topic" render={(props) => 
                <Content 
                  {...props} 
                  topics={this.state.topics}/>} 
              />
              <Route 
                path="/:topic/:id" 
                render={(props) => <Detail {...props}/>}
              />
            </div>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

const Home = () => <h2>Select a topic to explore the world of Star Wars!</h2>;

class Detail extends Component {
  state = {};
  componentDidMount() {
    const backBtn = document.querySelector('.go-back');
    backBtn.style.cssText = "transform: translate(-150px);";
    this.loadStateFromUrlMatch();
  }
  loadStateFromUrlMatch = async () => {
    const url = 'https://swapi.co/api' + this.props.match.url; 
    const resp = await fetch(url);
    const data = await resp.json();
    this.setState({data});
  }
  componentWillUnmount() {
    const backBtn = document.querySelector('.go-back');
    backBtn.style.cssText = "transform: translate(150px);";
  }
  render() {
    return <h2>Under Construction</h2>
  }
}

export default App;
