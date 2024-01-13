
import React from 'react';

const NewsList = ({ newsData }) => {
  return (
    <section className="news-list">
      <h2>Latest News</h2>
      <ul>
        {newsData.map((article) => (
          <li key={article.id}>
            <img src={article.urlToImage} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsList;
