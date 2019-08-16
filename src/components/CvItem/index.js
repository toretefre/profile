import React from 'react';

export const CvItem = ({ cvItem }) => {
  return (
    <tr>
      <td>{cvItem.title}</td>
      <td>{cvItem.employer}</td>
      <td>{cvItem.period}</td>
      <td>{cvItem.location}</td>
    </tr>
  );
};

export default CvItem;
