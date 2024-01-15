// pages/index.js
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Hero from '../components/Hero';
import NewsList from '../components/NewsList';
import CategoryMenu from '../components/CategoryMenu';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';
import AdBanner from '../components/AdBanner';
import styles from '../styles/Sidebar.module.css';


const apiUrl = 'https://newsapi.org/v2/top-headlines';
const apiKey = 'ff0cfc91f89c46b5ad77934c678704ed'

const Home = ({ newsData }) => {
    const [filteredNews, setFilteredNews] = useState(newsData);

  const handleSearch = (searchTerm) => {
    // Perform search logic here, update filteredNews accordingly
    if (!searchTerm.trim()) {
        // If search term is empty, show all news
        setFilteredNews(newsData);
      } else {
        // Filter news based on the search term
        const filteredResults = newsData.filter((article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        console.log('filteredResults:', filteredResults); // Log filtered results
        setFilteredNews(filteredResults);
      }
  };
  return (

    <div className={styles.mainContainer}>
        <Sidebar />

      <main className={styles.newsContainer}>
      <Header />
        <Hero />
        <CategoryMenu />
        <div>
          <Link href="/category/sports">Sports</Link>
          <br />
          <Link href="/category/business">Business</Link>
          <br />
          <Link href="/category/science">Science</Link>
          <br />
          {/* Add link to the country page */}
          <div>
            <h2>Choose news country</h2>
            <Link href="/country/us">Go to US News</Link>
            <br />
            <Link href="/country/gb">Go to GB News</Link>
          </div>
        </div>
        <br />
        <h2>Search news</h2>
        <SearchBar onSearch={handleSearch} />
        <NewsList newsData={filteredNews} />
        <Footer />
      </main>
      <AdBanner />

    </div>
  );
};


export async function getStaticProps() {
    const response = await fetch(`${apiUrl}?country=us&apiKey=${apiKey}`);
    const newsData = await response.json();

    return {
      props: {

        newsData: newsData.articles,
      },
    };
  }

export default Home;
