// pages/category/[category].js
import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import NewsList from '../../components/NewsList';
import Footer from '../../components/Footer';

const Category = ({ newsData, category }) => {
  return (
    <div>
      <Header />
      <main>
        <h1>{category} News</h1>
        <NewsList newsData={newsData} />
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const { category } = params;
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ff0cfc91f89c46b5ad77934c678704ed`;
  const response = await fetch(apiUrl);
  const newsData = await response.json();

  return {
    props: {
      newsData: newsData.articles,
      category,
    },
  };
}

export async function getStaticPaths() {
  // Define the categories for which pages should be generated
  const categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  // Generate paths for each category
  const paths = categories.map((category) => ({
    params: { category },
  }));

  return { paths, fallback: false };
}

export default Category;
