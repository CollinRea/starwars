import React, { Component } from 'react';
import People from './People';

export default class Content extends Component {
  state = {results: []};
  componentDidMount(){
    const url = this.props.match.url;
    const context = this;
    async function fetchData() {
      const response = await fetch('https://swapi.co/api' + url);
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
    const match = this.props.match.params.topic;
    let componentToRender = <h2>Loading...</h2>;
    switch (match) {
      case 'people':
        componentToRender = <People />
        break;
      default:
        componentToRender = <h2>No Data Found.</h2>
    }
    return (
      <div>{componentToRender}</div>
    )
  }
}