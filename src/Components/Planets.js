import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Planets extends Component {
  state = {data: []}
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data) {
      return {data: nextProps.data.results};
    } else {
      return prevState;
    }
  }
  render() {
    const planets = this.state.data.map((elem) => {
      const url = elem.url.substr(elem.url.indexOf("/planets/")+1);
      return [
        <Link to={url}>
          <div className="Content-cards">
            {elem.name}
          </div>
        </Link>
      ]
    });
    return (
      <div>
        <h2>Planets</h2>
        {planets.length ? planets : 'Loading...'}
      </div>
    )
  }
}