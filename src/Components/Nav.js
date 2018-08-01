import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className="Nav"> 
      <Links {...props} />
    </div>
   );
}

const Links = ({topics, onClick}) => {
  const links = topics.map((topic) => (
    <NavLink 
      key={topic + 'Topic'} 
      topic={topic}
      onClick={onClick} 
    />
  ))
  return (
    <ul>
      {links}
    </ul>
  )
}

const NavLink = ({topic, onClick}) => {
  const topicURL = '/' + topic.toLowerCase();
  return (
    <li>
      <Link 
        to={topicURL} 
        onClick={(e)=>onClick(e)}>
        {topic}
      </Link>
    </li>
  )
} 

export default Nav;