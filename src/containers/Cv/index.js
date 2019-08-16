import React from 'react';
import cvItems from '../../data/cvItems';

export const Cv = () => {
  return (
    <article>
      <h1>CV</h1>
      <h2>Tore Stensaker Tefre</h2>
      <table>
        <thead>
          <tr>
            <th>Periode</th>
            <th>Organisasjon</th>
            <th>Aktivitet</th>
            <th>Sted</th>
          </tr>
        </thead>
        <tbody>
          {cvItems.map(item => (
            <tr>
              <td>{item.title}</td>
              <td>{item.employer}</td>
              <td>{item.period}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};

export default Cv;
