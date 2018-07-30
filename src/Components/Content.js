import React from 'react';
import People from './People';
import Planets from './Planets';
import Films from './Films';
import Species from './Species';
import Vehicles from './Vehicles';
import Starships from './Starships';

const Content = (props) => {
  const match = props.match.params.topic;
  switch (match) {
    case 'people':
      return <People url={match} />
    case 'planets':
      return <Planets url={match} />
    case 'films':
      return <Films url={match} />
    case 'species':
      return <Species url={match} />
    case 'vehicles':
      return <Vehicles url={match} />
    case 'starships':
      return <Starships url={match} />
    default:
      return <h2>No Data Found.</h2>
  }
}

export default Content;