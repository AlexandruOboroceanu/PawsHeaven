import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSingup from './Components/LoginSingup/LoginSingup.jsx';
import Mainpage from './Pages/FirstPage';
import AdoptionPage from './Pages/AddoptionPage';
import HiringForm from './Pages/HiringForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSingup />} />
        <Route path="/main" element={<Mainpage />} />
        <Route path="/adoptionpage" element={<AdoptionPage />} />
        <Route path="/hiringform" element={<HiringForm />} />
      </Routes>
    </Router>
  );
}

export default App;