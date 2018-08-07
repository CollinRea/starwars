import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className="Nav"> 
      {props.children}
      <Links {...props} />
    </div>
   );
}

const Links = ({topics}) => {
  const links = topics.map((topic) => (
    <NavListItem 
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

const NavListItem = ({topic}) => {
  const topicURL = topic.url || '/' + topic.name.toLowerCase();
  return (
    <li>
      <NavLink activeClassName="selected" to={topicURL}>
        {topic.name}
      </NavLink>
    </li>
  )
} 

export default Nav;