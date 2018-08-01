import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default class People extends Component {
  state = {data: []}
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data) {
      return {data: nextProps.data.results};
    } else {
      return prevState;
    }
  }
  render() {
    const people = this.state.data.map((elem) => {
      const url = elem.url.substr(elem.url.indexOf("/people/")+1);
      return [
        <Link to={url}>
          <div className="Content-cards">
            {elem.name}
          </div>
        </Link>
      ]
    });
    return (
      <div className="Content">
        <h2>People</h2>
        {people.length ? people : 'Loading...' }
      </div>
    )
  }
}