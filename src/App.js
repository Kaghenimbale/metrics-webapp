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
          <Route path="*" element={<h1>Something were Wrong!!!</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
