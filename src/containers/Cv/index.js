import React, { Fragment } from 'react';
import CvItem from '../../components/CvItem';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import cvItems from '../../data/cvItems';
import './cv.css';

export const Cv = ({ location }) => {
  document.title = 'CV - Tore Stensaker Tefre';

  return (
    <Fragment>
      <Header location={location} />
      <Nav location={location} />
      <article>
        <section className="wannatalk">
          <h3 className="centertext">Ta en prat?</h3>
          <h4 className="centertext">
            Send en e-post til <a href="mailto:jobb@tefre.it">jobb@tefre.it</a>
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
      </article>
    </Fragment>
  );
};

export default Cv;
