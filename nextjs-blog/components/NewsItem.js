// src/app/components/NewsItem.js
import React, { useState } from 'react';
import SocialMediaShare from './SocialMediaShare';

const NewsItem = ({ article }) => {
    const [showShare, setShowShare] = useState(false);

  const toggleShare = () => {
    setShowShare(!showShare);
  };
  return (
    <div className="news-item">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
      <button onClick={toggleShare}>Share</button>
      {showShare && <SocialMediaShare articleTitle={article.title} articleUrl={article.url} />}
    </div>
  );
};

export default NewsItem;
