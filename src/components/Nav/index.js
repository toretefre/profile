import React from 'react';
import { Link } from '@reach/router';

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hjem</Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
