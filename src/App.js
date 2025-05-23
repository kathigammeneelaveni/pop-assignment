import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your page components
import WelcomePage from './components/WelcomePage';
import CreateAccountPage from './components/CreateAccountPage';
import LoginPage from './components/LoginPage';
import PersonalDetailsPage from './components/PersonalDetailsPage';

function App() {
  return (
    <BrowserRouter>  
      <Routes>         
        <Route path="/" element={<WelcomePage />} />                   
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/personal-details" element={<PersonalDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
