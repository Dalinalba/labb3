// components/SocialMediaShare.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SocialMediaShare from './SocialMediaShare';

describe('SocialMediaShare Component', () => {
  const mockTitle = 'Test Article';
  const mockUrl = 'https://example.com/test-article';

  it('renders correctly', () => {
    const { getByText } = render(<SocialMediaShare articleTitle={mockTitle} articleUrl={mockUrl} />);

    // Check if the buttons are rendered
    const twitterButton = getByText('Share on Twitter');
    const facebookButton = getByText('Share on Facebook');
    const linkedInButton = getByText('Share on LinkedIn');

    expect(twitterButton).toBeInTheDocument();
    expect(facebookButton).toBeInTheDocument();
    expect(linkedInButton).toBeInTheDocument();
  });

  it('opens Twitter share link when "Share on Twitter" button is clicked', () => {
    const { getByText } = render(<SocialMediaShare articleTitle={mockTitle} articleUrl={mockUrl} />);
    const twitterButton = getByText('Share on Twitter');

    fireEvent.click(twitterButton);

    // You can add assertions here based on your expected behavior,
    // such as checking if window.open is called with the correct Twitter share URL.
    // This may require using a mocking library like jest.mock for window.open.
  });

  it('opens Facebook share link when "Share on Facebook" button is clicked', () => {
    const { getByText } = render(<SocialMediaShare articleTitle={mockTitle} articleUrl={mockUrl} />);
    const facebookButton = getByText('Share on Facebook');

    fireEvent.click(facebookButton);

    // Similar to the previous test, add assertions here.
  });

  it('opens LinkedIn share link when "Share on LinkedIn" button is clicked', () => {
    const { getByText } = render(<SocialMediaShare articleTitle={mockTitle} articleUrl={mockUrl} />);
    const linkedInButton = getByText('Share on LinkedIn');

    fireEvent.click(linkedInButton);

    // Similar to the previous tests, add assertions here.
  });
});
