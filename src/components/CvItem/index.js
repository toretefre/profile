import React from 'react';

export const CvItem = ({ cvItem }) => {
  const { title, employer, period, location, description } = cvItem;
  return (
    <li>
      <h3>{title}</h3>
      <h4>{employer}</h4>
      <h4>{period}</h4>
      <h4>{location}</h4>
      <p>{description}</p>
    </li>
  );
};

export default CvItem;
