import React from 'react';
import { render, screen } from '@testing-library/react';
import Upload from './upload';

test('renders learn react link', () => {
  render(<Upload />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});