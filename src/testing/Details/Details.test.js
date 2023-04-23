import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import Details from '../../components/Details/Details';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureMockStore();

const store = mockStore({
  scores: {
    itemFilter: [
      {
        title: 'Liverpool - Nottingham Forest',
        competition: 'ENGLAND: Premier League',
        competitionUrl: 'https://www.example.com',
        date: '2023-04-23T12:34:56Z',
        matchviewUrl: 'https://www.example.com/matchview',
        videos: [
          { id: '64444f88d4c69', title: 'Highlights', embed: '<div></div>' },
        ],
      },
    ],
  },
});

describe('Details component', () => {
  it('renders the expected text', () => {
    render(
      <Provider store={store}>
        <Router>
          <Details />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Today Games(1)')).toBeInTheDocument();
    expect(screen.getByText('Liverpool - Nottingham Forest')).toBeInTheDocument();
    expect(screen.getByText('ENGLAND: Premier League')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('Highlights')).toBeInTheDocument();
  });
  it('renders the score lists correctly', () => {
    const { container } = render(
      <Router>
        <Provider store={store}>
          <Details />
        </Provider>
      </Router>,
    );

    expect(container.querySelector('.game')).toMatchSnapshot();
  });
});
