import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';


import Header from './Header';

describe('Header', () => {
  test('renders logo', () => {
    render(<Router><Header /></Router>);
    const logoElement = screen.getByText('Menu');
    expect(logoElement).toBeTruthy();
  });

  test('renders Home link', () => {
    render(<Router><Header /></Router>);
    const homeLinkElement = screen.getByText(/Home/i);
    expect(homeLinkElement).toBeTruthy();
  });

  test('renders Create link', () => {
    render(<Router><Header /></Router>);
    const createLinkElement = screen.getByText(/Create/i);
    expect(createLinkElement).toBeTruthy();
  });

  test('renders Blog link', () => {
    render(<Router><Header /></Router>);
    const blogLinkElement = screen.getByText(/Blog/i);
    expect(blogLinkElement).toBeTruthy();
  });
});
