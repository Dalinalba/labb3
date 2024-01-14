// nextjs-blog/components/SearchBar.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(<SearchBar onSearch={() => {}} />);

    // Check if the input and button are rendered
    const inputElement = getByPlaceholderText('Search for news...');
    const buttonElement = getByText('Search');

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onSearch when the button is clicked', () => {
    const mockOnSearch = jest.fn();
    const { getByPlaceholderText, getByText } = render(<SearchBar onSearch={mockOnSearch} />);

    // Simulate user typing in the input
    const inputElement = getByPlaceholderText('Search for news...');
    fireEvent.change(inputElement, { target: { value: 'React' } });

    // Simulate user clicking the search button
    const buttonElement = getByText('Search');
    fireEvent.click(buttonElement);

    // Check if onSearch is called with the correct search term
    expect(mockOnSearch).toHaveBeenCalledWith('React');
  });
});
