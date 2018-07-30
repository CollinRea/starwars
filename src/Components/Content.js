import React, { Component } from 'react';
import People from './People';
import Planets from './Planets';
import Films from './Films';
import Species from './Species';
import Vehicles from './Vehicles';
import Starships from './Starships';

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
  componentToRender(){
    const match = this.props.match.params.topic;
    switch (match) {
      case 'people':
        return <People />
      case 'planets':
        return <Planets />
      case 'films':
        return <Films />
      case 'species':
        return <Species />
      case 'vehicles':
        return <Vehicles />
      case 'starships':
        return <Starships />
      default:
        return <h2>No Data Found.</h2>
    }
  }
  render() {
    let componentToRender = this.componentToRender() || <h2>Loading...</h2>;
    return (
      <div>{componentToRender}</div>
    )
  }
}