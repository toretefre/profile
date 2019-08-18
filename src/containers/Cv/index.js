import React, { useEffect } from 'react';
import CvItem from '../../components/CvItem';
import cvItems from '../../data/cvItems';

export const Cv = () => {
  useEffect(() => (document.title = 'CV - Tore Stensaker Tefre'), []);

  return (
    <article>
      <ul>
        {cvItems.map(cvItem => (
          <CvItem
            key={cvItem.employer + cvItem.period + cvItem.title}
            cvItem={cvItem}
          />
        ))}
      </ul>
      <section className="wannatalk">
        <h3 className="centertext">Ta en prat?</h3>
        <h4 className="centertext">
          Send en e-post til <a href="mailto:jobb@tefre.it">jobb@tefre.it</a>
        </h4>
      </section>
    </article>
  );
};

export default Cv;
