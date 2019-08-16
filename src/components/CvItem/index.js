import React from 'react';

export const CvItem = ({ cvItem }) => {
  return (
    <li>
      <p>{cvItem.title}</p>
      <p>{cvItem.employer}</p>
      <p>{cvItem.period}</p>
      <p>{cvItem.location}</p>
    </li>
  );
};

export default CvItem;
