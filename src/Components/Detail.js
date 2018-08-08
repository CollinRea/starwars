import React, { Component } from 'react';

export default class Detail extends Component {
  state = {
    data: {}
  };
  componentDidMount() {
    const backBtn = document.querySelector('.go-back');
    backBtn.style.cssText = "transform: translate(-150px);";
    this.loadStateFromUrlMatch();
  }
  loadStateFromUrlMatch = async () => {
    const url = 'https://swapi.co/api' + this.props.match.url; 
    const resp = await fetch(url);
    const data = await resp.json();
    this.setState({data});
  }
  componentWillUnmount() {
    const backBtn = document.querySelector('.go-back');
    backBtn.style.cssText = "transform: translate(150px);";
  }
  render() {
    const dataDisplay = Object.keys(this.state.data).map((key, index) => {
      return <p key={key + index}>{key} : {this.state.data[key]}</p>
    })
    return dataDisplay;
  }
}