// components/NewsList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import NewsList from './NewsList';

describe('NewsList Component', () => {
  const mockNewsData = [
    { id: 1, title: 'Article 1', urlToImage: 'image1.jpg' },
    { id: 2, title: 'Article 2', urlToImage: 'image2.jpg' },
  ];

  it('renders without crashing', () => {
    const { container } = render(<NewsList newsData={mockNewsData} />);
    expect(container).toBeInTheDocument();
  });

  it('renders the correct number of articles', () => {
    const { getAllByAltText } = render(<NewsList newsData={mockNewsData} />);
    const articleImages = getAllByAltText(/Article/i);
    expect(articleImages).toHaveLength(mockNewsData.length);
  });

});
