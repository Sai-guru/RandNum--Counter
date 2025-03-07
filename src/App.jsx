// App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RandomNumber from './RandNum';
import Counter from './Counter';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<RandomNumber />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
}
