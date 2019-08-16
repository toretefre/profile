import React from 'react';
import CvItem from '../../components/CvItem';
import cvItems from '../../data/cvItems';

export const Cv = () => {
  return (
    <article>
      <h1>CV</h1>
      <h2>Tore Stensaker Tefre</h2>
      <ul>
        {cvItems.map(cvItem => (
          <CvItem
            key={cvItem.employer + cvItem.period + cvItem.title}
            cvItem={cvItem}
          />
        ))}
      </ul>
    </article>
  );
};

export default Cv;
