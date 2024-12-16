import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSingup from './Components/LoginSingup/LoginSingup.jsx';
import Mainpage from './Pages/FirstPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSingup />} />
        <Route path="/main" element={<Mainpage />} />
      </Routes>
    </Router>
  );
}

export default App;