import React from 'react';
import CvItem from '../../components/CvItem';
import cvItems from '../../data/cvItems';

export const Cv = () => {
  return (
    <article>
      <h1>CV</h1>
      <h2>Tore Stensaker Tefre</h2>
      <table>
        <tbody>
          {cvItems.map(cvItem => (
            <CvItem
              key={cvItem.employer + cvItem.period + cvItem.title}
              cvItem={cvItem}
            />
          ))}
        </tbody>
      </table>
    </article>
  );
};

export default Cv;
