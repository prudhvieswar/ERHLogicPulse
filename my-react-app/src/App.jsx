import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
