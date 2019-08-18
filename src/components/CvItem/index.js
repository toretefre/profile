import React from 'react';

export const CvItem = ({ cvItem }) => {
  const {
    title,
    school,
    employer,
    organization,
    period,
    location,
    description
  } = cvItem;
  return (
    <div
      className={
        (school && 'container left') ||
        (organization && 'container left') ||
        (employer && 'container right')
      }
    >
      <div className="content">
        <h3>{title}</h3>
        <h4>
          {school && school}
          {employer && employer}
          {organization && organization}
        </h4>
        <h5>{period}</h5>
        <h5>{location}</h5>
        {description}
      </div>
    </div>
  );
};

export default CvItem;
