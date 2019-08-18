import React, { Fragment } from 'react';
import Header from '../../components/Header';
import Nav from '../../components/Nav';

export const LandingPage = ({ location }) => {
  document.title = 'Tore Stensaker Tefre';

  return (
    <Fragment>
      <Header location={location} />
      <Nav location={location} />
      <article className="landingpage">
        <img
          id="landingimg"
          src="https://www.adressa.no/incoming/article15292846.ece/gjlmps/ALTERNATES/w980-default/doc6wna0n8vti8l6jiyedt.jpg"
          alt="Tore med PC"
        />
        <p className="centertext">
          Informatikkstudent, utvikler, DJ, og bordtennis-amatør. Har alltid med
          PC{' '}
          <span role="img" alt="blunkefjes" aria-label="blunkefjes">
            😉
          </span>
        </p>
      </article>
    </Fragment>
  );
};

export default LandingPage;
