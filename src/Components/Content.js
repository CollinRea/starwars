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
      return <People {...props} />
    case 'planets':
      return <Planets {...props} />
    case 'films':
      return <Films {...props} />
    case 'species':
      return <Species {...props} />
    case 'vehicles':
      return <Vehicles {...props} />
    case 'starships':
      return <Starships {...props} />
    default:
      return <h2>No Data Found.</h2>
  }
}

export default Content;