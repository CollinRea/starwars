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
  render() {
    const match = this.props.match.params.topic;
    let componentToRender = <h2>Loading...</h2>;
    switch (match) {
      case 'people':
        componentToRender = <People />
        break;
      case 'planets':
        componentToRender = <Planets />
        break;
      case 'films':
        componentToRender = <Films />
        break;
      case 'species':
        componentToRender = <Species />
        break;
      case 'vehicles':
        componentToRender = <Vehicles />
        break;
      case 'starships':
        componentToRender = <Starships />
        break;
      default:
        componentToRender = <h2>No Data Found.</h2>
    }
    return (
      <div>{componentToRender}</div>
    )
  }
}