import React from 'react';

export const LandingPage = () => {
  document.title = 'Tore Stensaker Tefre';

  return (
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
  );
};

export default LandingPage;
