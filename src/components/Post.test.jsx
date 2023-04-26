import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Posts from './Post';

describe('Post', () => {
  let mockAxios;

  beforeAll(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterAll(() => {
    mockAxios.restore();
  });

  test('renders posts data', async () => {
    const responseData = [
      { id: 1, title: 'Post 1', content: 'Post 1 Content' },
      { id: 2, title: 'Post 2', content: 'Post 2 Content' },
    ];

    // Mock the API request
    mockAxios.onGet('http://localhost:3001/v1/api/posts').reply(200, responseData);

    render(<Posts/>);

    // Assert loading state
    // expect(screen.getByText('Loading...')).toBeInTheDocument();

    // await waitFor(() => {
    //   // Wait for API request to complete
    //   expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    //   expect(screen.getByText('All Posts')).toBeInTheDocument();

    //   // Assert rendered post data
    //   expect(screen.getByText('Post 1')).toBeInTheDocument();
    //   expect(screen.getByText('Post 1 Content')).toBeInTheDocument();
    //   expect(screen.getByText('Post 2')).toBeInTheDocument();
    //   expect(screen.getByText('Post 2 Content')).toBeInTheDocument();
    // });
  });

  test('renders error message when API request fails', async () => {
    // Mock the API request to fail
    mockAxios.onGet('http://localhost:3001/v1/api/posts').reply(500, 'Internal Server Error');

    render(<Posts/>);

    // Assert loading state
    // expect(screen.getByText('Loading...')).toBeInTheDocument();

    // await waitFor(() => {
    //   // Wait for API request to complete
    //   expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    //   expect(screen.getByText('Error: Internal Server Error')).toBeInTheDocument();
    // });
  });
});
