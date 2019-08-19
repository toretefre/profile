import React from 'react';

export const CvItem = ({ cvItem }) => {
  const {
    title,
    placement,
    organization,
    period,
    location,
    description
  } = cvItem;
  return (
    <div
      className={
        placement.toLowerCase() === 'left'
          ? 'container left'
          : 'container right'
      }
    >
      <details>
        <summary>
          <h4>{title}</h4>
          <h4>{organization}</h4>
          <h5>{period}</h5>
          <h5 className="location">{location}</h5>
        </summary>
        {description}
      </details>
    </div>
  );
};

export default CvItem;
