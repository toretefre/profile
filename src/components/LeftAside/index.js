import React from 'react';
import { Link } from '@reach/router';

export const LeftAside = () => {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/">Hjem</Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>
      </ul>
    </aside>
  );
};

export default LeftAside;
