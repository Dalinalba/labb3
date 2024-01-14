// components/CommentSection.test.js
import React from 'react';
import { render } from '@testing-library/react';
import CommentSection from './CommentSection';

describe('CommentSection Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<CommentSection />);
    expect(container).toBeInTheDocument();
  });
});
