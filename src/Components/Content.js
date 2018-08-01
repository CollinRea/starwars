import React from 'react';
import People from './People';
import Planets from './Planets';
import Films from './Films';
import Species from './Species';
import Vehicles from './Vehicles';
import Starships from './Starships';

const Content = (props) => {
  const match = props.match.params.topic;
  const filteredData = 
    props.topics.filter((topic) =>
      topic.topic === (props.filter || match));
  switch (match) {
    case 'people':
      return <People data={filteredData[0]}/>
    case 'planets':
      return <Planets data={filteredData[0]}/>
    case 'films':
      return <Films data={filteredData[0]}/>
    case 'species':
      return <Species data={filteredData[0]}/>
    case 'vehicles':
      return <Vehicles data={filteredData[0]}/>
    case 'starships':
      return <Starships data={filteredData[0]}/>
    default:
      return <h2>No Data Found.</h2>
  }
}

export default Content;