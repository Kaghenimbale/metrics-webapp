import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Home from '../components/Home/Home';

const mockStore = configureMockStore();

const store = mockStore({
  scores: {
    scoreItems: [
      {
        title: 'Liverpool - Nottingham Forest',
        competition: 'ENGLAND: Premier League',
        thumbnail: 'https://www.scorebat.com/og/m/og1197856.jpeg',
        videos: [
          { id: '64444f88d4c69', title: 'Highlights', embed: '<div></div>' },
        ],
      },
      {
        title: 'Manchester City - Sheffield United',
        competition: 'ENGLAND: FA Cup',
        thumbnail: 'https://www.scorebat.com/og/m/og1346477.jpeg',
        videos: [
          { id: '64442ae539158', title: 'Highlights', embed: '<div></div>' },
        ],
      },
      {
        title: 'Borussia Dortmund - Eintracht Frankfurt',
        competition: 'GERMANY: Bundesliga',
        thumbnail: 'https://www.scorebat.com/og/m/og1198171.jpeg',
        videos: [
          { id: '64442a4028724', title: 'Highlights', embed: '<div></div>' },
        ],
      },
    ],
    isLoading: false,
    isFetched: true,
  },
});

describe('Home Component', () => {
  it('renders with correct content', () => {
    render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>,
    );

    expect(screen.getByText('GERMANY: Bundesliga')).toBeInTheDocument();
    expect(screen.getByText('Current Stats')).toBeInTheDocument();
    expect(screen.getByText('Top World championship')).toBeInTheDocument();
  });

  it('renders the score lists correctly', () => {
    const { container } = render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>,
    );

    expect(container.querySelector('.game')).toBeInTheDocument();
  });
});
