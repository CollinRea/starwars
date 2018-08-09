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
  getTemplate = (data) => {
     switch (this.props.match.params.topic) {
      case 'people':
        return personTemplate(data);
      case 'planets':
        return planetTemplate(data);
      case 'films':
        return filmTemplate(data);
      case 'species':
        return speciesTemplate(data);
      case 'vehicles':
        return vehicleTemplate(data);
      case 'starships':
        return starshipTemplate(data);
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

const personTemplate = (data) => {
  const dataDisplay = (
    <div className="details-container">
      <h1 className="details-title">{data.name}</h1>
      <table className="details-specifics">
        <tbody>
          <tr>
            <td>Height: </td>
            <td>{data.height}</td>
          </tr>
          <tr>
            <td>Mass: </td>
            <td>{data.mass}</td>
          </tr>
          <tr>
            <td>Hair Color: </td>
            <td>{data.hair_color}</td>
          </tr>
          <tr>
            <td>Skin Color: </td>
            <td>{data.skin_color}</td>
          </tr>
          <tr>
            <td>Eye Color: </td>
            <td>{data.eye_color}</td>
          </tr>
          <tr>
            <td>Birth Year: </td>
            <td>{data.birth_year}</td>
          </tr>
          <tr>
            <td>Gender: </td>
            <td>{data.gender}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return dataDisplay;
}

const planetTemplate = (data) => {
  const dataDisplay = Object.keys(data).map((key, index) => {
    return <p key={key + index}>{key} : {data[key]}</p>
  });
  return dataDisplay;
}

const filmTemplate = (data) => {
  const dataDisplay = Object.keys(data).map((key, index) => {
    return <p key={key + index}>{key} : {data[key]}</p>
  });
  return dataDisplay;
}

const speciesTemplate = (data) => {
  const dataDisplay = Object.keys(data).map((key, index) => {
    return <p key={key + index}>{key} : {data[key]}</p>
  });
  return dataDisplay;
}

const vehicleTemplate = (data) => {
  const dataDisplay = Object.keys(data).map((key, index) => {
    return <p key={key + index}>{key} : {data[key]}</p>
  });
  return dataDisplay;
}

const starshipTemplate = (data) => {
  const dataDisplay = Object.keys(data).map((key, index) => {
    return <p key={key + index}>{key} : {data[key]}</p>
  });
  return dataDisplay;
}