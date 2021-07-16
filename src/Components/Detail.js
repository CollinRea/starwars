import React, { Component } from 'react';
import DetailTemplates from '../detailTemplates';

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
    const url = 'https://swapi.dev/api' + this.props.match.url; 
    const resp = await fetch(url);
    const data = await resp.json();
    this.setState({data});
  }
  componentWillUnmount() {
    const backBtn = document.querySelector('.go-back');
    backBtn.style.cssText = "transform: translate(150px);";
  }
  getTemplate = (data) => {
     switch (this.props.match.params.topic) {
      case 'people':
        return DetailTemplates.personTemplate(data);
      case 'planets':
        return DetailTemplates.planetTemplate(data);
      case 'films':
        return DetailTemplates.filmTemplate(data);
      case 'species':
        return DetailTemplates.speciesTemplate(data);
      case 'vehicles':
        return DetailTemplates.vehicleTemplate(data);
      case 'starships':
        return DetailTemplates.starshipTemplate(data);
      default:
        return <div>Loading...</div>;
    }
  }
  render() {
    const dataDisplay = this.getTemplate(this.state.data);
    return (
      <div className="details-container">
        {dataDisplay}
      </div>
    )
  }
}
