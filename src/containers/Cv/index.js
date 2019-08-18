import React, { Fragment } from 'react';
import CvItem from '../../components/CvItem';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import cvItems from '../../data/cvItems';
import './cv.css';

export const Cv = ({ location }) => {
  document.title = 'Tore Stensaker Tefre - CV';

  return (
    <Fragment>
      <Header location={location} />
      <Nav location={location} />
      <article>
        <img
          src="https://media.licdn.com/dms/image/C4E03AQH5Pr16uq5F2A/profile-displayphoto-shrink_200_200/0?e=1571875200&v=beta&t=LHZdJj1fa9gXVBPMAh-DzzR-ZuoFXkJXSjWtcjw22oE"
          id="profilepic"
          alt="Profilbilde av Tore Stensaker Tefre"
        />
        <section className="wannatalk">
          <h3 className="centertext">Ta en prat?</h3>
          <h4 className="centertext">
            <a href="mailto:jobb@tefre.it">jobb@tefre.it</a> //{' '}
            <a href="tel:95 70 45 76">95 70 45 76</a>
          </h4>
        </section>
        <section className="timeline">
          {cvItems.map(cvItem => (
            <CvItem
              key={cvItem.employer + cvItem.period + cvItem.title}
              cvItem={cvItem}
            />
          ))}
        </section>
        <h5 className="centertext margintop">
          Detaljer finnes på{' '}
          <a href="https://tefre.dev" target="_blank" rel="noopener noreferrer">
            tefre.dev
          </a>
          , eventuelt på{' '}
          <a
            href="https://www.linkedin.com/in/tore/?locale=no_NO"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/tore
          </a>
        </h5>
      </article>
    </Fragment>
  );
};

export default Cv;
