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
    </article>
  );
};

export default Cv;
