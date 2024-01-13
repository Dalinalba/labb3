// src/app/components/AdBanner.js
import React from 'react';

const AdBanner = () => {
  return (
    <div className="ad-banner">
      <h5>Advertisement</h5>
      {/* Add your ad content or embed your ad code here */}
      <img
        src="https://via.placeholder.com/300x250" // Placeholder image, replace with your actual ad content
        alt="Advertisement"
      />
    </div>
  );
};

export default AdBanner;
