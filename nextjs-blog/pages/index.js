// pages/index.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import NewsList from '../components/NewsList';
import CategoryMenu from '../components/CategoryMenu';
import Footer from '../components/Footer';

const apiUrl = 'https://newsapi.org/v2/top-headlines';
const apiKey = 'ff0cfc91f89c46b5ad77934c678704ed'

const Home = ({ newsData }) => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <CategoryMenu />
        <NewsList newsData={newsData} />
      </main>
      <Footer />
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
