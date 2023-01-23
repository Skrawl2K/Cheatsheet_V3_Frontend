import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AddPage from './pages/AddPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/add' element={<AddPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
