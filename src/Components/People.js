import React, { Component } from 'react';
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
      return {
        name: elem.name, 
        url: elem.url.substr(elem.url.indexOf("/people/")+1)
      }
    });
    return (
      <div>
        <h2>People</h2>
        <Nav topics={people}/>
      </div>
    )
  }
}