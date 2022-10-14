import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import APropos from './pages/APropos';
import Accueil from './pages/Accueil';
import Page404 from './pages/Page404';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
