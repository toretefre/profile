import React from 'react';
import { Link } from '@reach/router';

export const LandingPage = () => {
  return (
    <main>
      <h1>Tore Stensaker Tefre</h1>

      <Link to="/cv">CV</Link>
    </main>
  );
};

export default LandingPage;
