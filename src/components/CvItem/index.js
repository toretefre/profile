import React from 'react';

export const CvItem = ({ cvItem }) => {
  const { title, employer, period, location, description } = cvItem;
  return (
    <li className="cvitem">
      <h3>{title}</h3>
      <h4>{employer}</h4>
      <h4>{period}</h4>
      <h4>{location}</h4>
      {description}
    </li>
  );
};

export default CvItem;
