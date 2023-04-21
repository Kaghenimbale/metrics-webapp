import './App.css';
import Details from './components/Details/Details';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
