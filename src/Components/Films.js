import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Films extends Component {
  state = {data: []}
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data) {
      return {data: nextProps.data.results};
    } else {
      return prevState;
    }
  }
  render() {
    const films = this.state.data.map((elem) => {
      const url = elem.url.substr(elem.url.indexOf("/films/")+1);
      return [
        <Link to={url} key={url}>
          <div className="Content-cards">
            {elem.title}
          </div>
        </Link>
      ]
    });
    return (
      <div>
        <h2>Films</h2>
        {films.length ? films : 'Loading...'}
      </div>
    )
  }
}