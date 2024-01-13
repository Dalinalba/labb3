
import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ newsData }) => {
  return (
    <section className="news-list">
      <h2>Latest News</h2>
      <ul>
        {newsData.map((article) => (
          <li key={article.id}>
            <img src={article.urlToImage} alt={article.title} />
            <NewsItem article={article} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsList;
