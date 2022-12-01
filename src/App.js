import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import APropos from './pages/APropos';
import Accueil from './pages/Accueil';
import FicheLogement from './components/FicheLogement';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/annonce/:annonceId" element={<FicheLogement />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
