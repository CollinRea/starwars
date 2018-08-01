import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className="Nav"> 
      <Links {...props} />
    </div>
   );
}

const Links = ({topics}) => {
  const links = topics.map((topic) => (
    <NavLink 
      key={topic.name + 'Topic'} 
      topic={topic}
    />
  ))
  return (
    <ul>
      {links}
    </ul>
  )
}

const NavLink = ({topic}) => {
  const topicURL = topic.url || '/' + topic.name.toLowerCase();
  return (
    <li>
      <Link to={topicURL}>
        {topic.name}
      </Link>
    </li>
  )
} 

export default Nav;