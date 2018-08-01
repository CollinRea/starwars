import React, { Component } from 'react';

export default class Films extends Component {
  state = {data: []}
  static getDerivedStateFromProps(nextProps, prevState) {
    const filteredData = nextProps.data.filter((topic)=>(topic.name === nextProps.match.params.topic));
    if (filteredData.length > 0) {
      return {data: filteredData[0].data.results};
    } else {
      return prevState;
    }
  }
  render() {
    return (
      <div>
        <h2>Films</h2>
        <p></p>
      </div>
    )
  }
}