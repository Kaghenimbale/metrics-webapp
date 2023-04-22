import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import HomeContainer from './components/Home/HomeContainer';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="details" element={<Details />} />
          <Route path="*" element={<h1>Something were Wrong!!!</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
