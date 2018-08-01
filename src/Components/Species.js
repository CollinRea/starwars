import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Species extends Component {
  state = {data: []}
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data) {
      return {data: nextProps.data.results};
    } else {
      return prevState;
    }
  }
  render() {
    const species = this.state.data.map((elem) => {
      const url = elem.url.substr(elem.url.indexOf("/species/")+1);
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
        <h2>Species</h2>
        {species.length ? species : 'Loading...'}
      </div>
    )
  }
}