import React, { Component } from 'react';
import People from './People';
import Planets from './Planets';
import Films from './Films';
import Species from './Species';
import Vehicles from './Vehicles';
import Starships from './Starships';

class Content extends Component {
  render(){
    const match = this.props.match.params.topic;
    switch (match) {
      case 'people':
        return <People />
      case 'planets':
        return <Planets />
      case 'films':
        return <Films />
      case 'species':
        return <Species />
      case 'vehicles':
        return <Vehicles />
      case 'starships':
        return <Starships />
      default:
        return <h2>No Data Found.</h2>
    }
  }
}


// const Content = (props) => {
//   const match = props.match.params.topic;
//   switch (match) {
//     case 'people':
//       return <People url={match} />
//     case 'planets':
//       return <Planets url={match} />
//     case 'films':
//       return <Films url={match} />
//     case 'species':
//       return <Species url={match} />
//     case 'vehicles':
//       return <Vehicles url={match} />
//     case 'starships':
//       return <Starships url={match} />
//     default:
//       return <h2>No Data Found.</h2>
//   }
// }

export default Content;