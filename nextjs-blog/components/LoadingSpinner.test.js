// components/LoadingSpinner.test.js
import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner Component', () => {
  it('renders without errors', () => {
    render(<LoadingSpinner />);
  });

  it('renders the loading spinner', () => {
    const { container } = render(<LoadingSpinner />);
    const spinnerElement = container.querySelector('.loading-spinner');
    expect(spinnerElement).toBeInTheDocument();
  });

  it('renders the SVG spinner', () => {
    const { container } = render(<LoadingSpinner />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });
});
