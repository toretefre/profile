import React from 'react';
import { Link } from '@reach/router';
import links from './../../data/links';

export const Nav = () => {
  return (
    <nav>
      <ul className="navlist">
        {links
          .filter(item => !item.url.includes('http'))
          .map(item => (
            <li>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        {links
          .filter(item => item.url.includes('http'))
          .map(item => (
            <li>
              <a href={item.url}>{item.title} - ekstern lenke</a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Nav;
