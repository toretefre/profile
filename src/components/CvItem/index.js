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
      <div className="content">
        <h3>{title}</h3>
        <h4>{organization}</h4>
        <h5>{period}</h5>
        <h5 className="location">{location}</h5>
        {description}
      </div>
    </div>
  );
};

export default CvItem;
