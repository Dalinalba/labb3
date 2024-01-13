// src/app/components/SocialMediaShare.js
import React from 'react';

const SocialMediaShare = ({ articleTitle, articleUrl }) => {
  const handleShareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(articleTitle)}&via=YourTwitterHandle`;
    window.open(twitterUrl, '_blank');
  };

  const handleShareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
    window.open(facebookUrl, '_blank');
  };

  const handleShareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(articleUrl)}&title=${encodeURIComponent(articleTitle)}`;
    window.open(linkedInUrl, '_blank');
  };

  return (
    <div className="social-media-share">
      <button onClick={handleShareOnTwitter}>Share on Twitter</button>
      <button onClick={handleShareOnFacebook}>Share on Facebook</button>
      <button onClick={handleShareOnLinkedIn}>Share on LinkedIn</button>
    </div>
  );
};

export default SocialMediaShare;
