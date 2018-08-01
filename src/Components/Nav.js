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
      key={topic + 'Topic'} 
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
  const topicURL = '/' + topic.toLowerCase();
  return (
    <li>
      <Link to={topicURL}>
        {topic}
      </Link>
    </li>
  )
} 

export default Nav;