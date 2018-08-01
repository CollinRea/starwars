import React, { Component } from 'react';

export default class People extends Component {
  state = {data: []}
  static getDerivedStateFromProps(nextProps, prevState) {
    const filteredData = nextProps.topics.filter((topic)=>(topic.name === nextProps.match.params.topic));
    if (filteredData.length > 0) {
      return {data: filteredData[0].data.results};
    } else {
      return prevState;
    }
  }
  render() {
    return (
      <div>
        <h2>People</h2>
        <p></p>
      </div>
    )
  }
}