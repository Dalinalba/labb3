
import React from 'react';
import CommentSection from './CommentSection';
import LoadingSpinner from './LoadingSpinner';
import NewsItem from './NewsItem';

const NewsList = ({ newsData, loading }) => {
    if (loading) {
        return <LoadingSpinner/>;
      }
  return (
    <section className="news-list">
      <h2>Latest News</h2>
      <ul>
        {newsData.map((article) => (
          <li key={article.id}>
            <img src={article.urlToImage} alt={article.title} />
            <NewsItem article={article} />
            <CommentSection/>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsList;
