import React, { Component } from 'react';

export default class People extends Component {
  state = {data: []}
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data) {
      return {data: nextProps.data.results};
    } else {
      return prevState;
    }
  }
  render() {;
    return (
      <div>
        <h2>People</h2>
        <p>{this.state.data.length ? this.state.data[0].name : 'Loading...'}</p>
      </div>
    )
  }
}