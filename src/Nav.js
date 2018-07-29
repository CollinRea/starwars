import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    const names = [
      'People', 
      'Planets', 
      'Films', 
      'Species', 
      'Vehicles',
      'Starships'
    ];
    return (
      <div className="Nav"> 
        <Links topics={names}/>
      </div>
    );
  }
}

const Links = ({topics}) => {
  const links = topics.map((topic) => (
    <NavLink key={topic + 'Topic'} topic={topic} />
  ))
  return (
    <ul>
      {links}
    </ul>
  )
}

const NavLink = ({topic}) => {
  const topicURL = '/' + topic.toLowerCase();
  return (
    <li>
      <Link to={topicURL}>{topic}</Link>
    </li>
  )
} 