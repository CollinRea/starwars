import React, { Component } from 'react';

export default class Starships extends Component {
  state = {results: []};
  componentDidMount(){
    const url = this.props.url;
    const context = this;
    async function fetchData() {
      const response = await fetch('https://swapi.co/api/' + url);
      const data = await response.json();
      await context.setState({
        count: data.count, 
        results: data.results,
        next: data.next,
        prev: data.previous
      });
    }
    fetchData();
  }
  render() {
    return (
      <div>
        <h2>Starships</h2>
        <p>{this.state.count}</p>
      </div>
    )
  }
}