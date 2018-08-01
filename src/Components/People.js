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
        <div className="Content-cards">
          <Link to={url}>{elem.name}</Link>
        </div>
      ]
    });
    return (
      <div className="Content">
        <h2>People</h2>
        {people}
      </div>
    )
  }
}