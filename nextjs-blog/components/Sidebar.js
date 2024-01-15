// components/Sidebar.js
import React, { useState, useEffect } from 'react';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  const [bitcoinArticles, setBitcoinArticles] = useState([]);
  const [goldArticles, setGoldArticles] = useState([]);
  const [weatherArticles, setWeatherArticles] = useState([]);

  useEffect(() => {
    // Fetch popular articles
    const fetchPopularArticles = async (category) => {
      try {
        const fetchedArticles = await fetchNewsArticles(category);
        switch (category) {
          case 'bitcoin':
            setBitcoinArticles(fetchedArticles);
            break;
          case 'gold':
            setGoldArticles(fetchedArticles);
            break;
          case 'weather':
            setWeatherArticles(fetchedArticles);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error(`Error fetching ${category} articles:`, error);
      }
    };

    fetchPopularArticles('bitcoin');
    fetchPopularArticles('gold');
    fetchPopularArticles('weather');
  }, []);

  // Function to fetch popular articles
  const fetchNewsArticles = async (category) => {
    const apiKey = 'ff0cfc91f89c46b5ad77934c678704ed';
    const apiUrl = `https://newsapi.org/v2/top-headlines?q=${category}&apiKey=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    // Extract article titles
    return data.articles.map((article) => article.title);
  };

  return (
    <aside className={styles.sidebar}>
      <h2>Bitcoin Popular Articles</h2>
      <ul>
        {bitcoinArticles.map((article, index) => (
          <li key={index}><a href="#">{article}</a></li>
        ))}
      </ul>

      <h2>Gold Popular Articles</h2>
      <ul>
        {goldArticles.map((article, index) => (
          <li key={index}><a href="#">{article}</a></li>
        ))}
      </ul>

      <h2>Weather Popular Articles</h2>
      <ul>
        {weatherArticles.map((article, index) => (
          <li key={index}><a href="#">{article}</a></li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
