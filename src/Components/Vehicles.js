import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Vehicles extends Component {
  state = {data: []}
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data) {
      return {data: nextProps.data.results};
    } else {
      return prevState;
    }
  }
  render() {
    const vehicles = this.state.data.map((elem) => {
      const url = elem.url.substr(elem.url.indexOf("/vehicles/")+1);
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
        <h2>Vehicles</h2>
        {vehicles.length ? vehicles : 'Loading...'}
      </div>
    )
  }
}