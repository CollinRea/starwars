import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Starships extends Component {
  state = {data: []}
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data) {
      return {data: nextProps.data.results};
    } else {
      return prevState;
    }
  }
  render() {
    const starships = this.state.data.map((elem) => {
      const url = elem.url.substr(elem.url.indexOf("/starships/")+1);
      return [
        <Link to={url} key={url}>
          <div className="Content-cards">
            {elem.name}
          </div>
        </Link>
      ]
    });
    return (
      <div>
        <h2>Starships</h2>
        {starships.length ? starships : 'Loading...'}
      </div>
    )
  }
}