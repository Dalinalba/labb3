// pages/country/[country].js
import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import NewsList from '../../components/NewsList';
import Footer from '../../components/Footer';

const apiUrl = 'https://newsapi.org/v2/top-headlines';
const apiKey = 'ff0cfc91f89c46b5ad77934c678704ed';

const Country = ({ newsData, country }) => {
  return (
    <div>
      <Header />
      <main>
        <h1>Top Headlines in {country}</h1>
        <NewsList newsData={newsData} />
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const { country } = params;
  const apiUrlForCountry = `${apiUrl}?country=${country}&apiKey=${apiKey}`;
  const response = await fetch(apiUrlForCountry);
  const newsData = await response.json();

  return {
    props: {
      newsData: newsData.articles,
      country,
    },
  };
}

export async function getStaticPaths() {
  // Define the countries for which pages should be generated
  const countries = ['us', 'gb', 'ca', 'au', 'in']; // Add more countries as needed

  // Generate paths for each country
  const paths = countries.map((country) => ({
    params: { country },
  }));

  return { paths, fallback: false };
}

export default Country;
