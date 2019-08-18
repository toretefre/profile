import React from 'react';

export const Header = ({ location }) => {
  const path = location.pathname;
  return (
    <header>
      <h1>Tore Stensaker Tefre {path.includes('cv') && ' - CV'}</h1>
    </header>
  );
};

export default Header;
