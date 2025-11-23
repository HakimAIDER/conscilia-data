import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Values from './components/Values';
import Expertise from './components/Expertise';
import About from './components/About';
import Jobs from './components/Jobs';
import Training from './components/Training';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Clients from './components/Clients';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the intro animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] bg-brand-dark flex flex-col items-center justify-center text-white">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-t-4 border-l-4 border-brand-primary animate-spin mb-8"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-16 h-16 bg-gradient-brand rounded-full animate-pulse"></div>
          </div>
        </div>
        <h1 className="text-3xl font-heading font-bold animate-pulse">
          CONSILIA<span className="text-brand-secondary">DATA</span>
        </h1>
        <p className="mt-4 text-brand-light/60 text-sm tracking-[0.3em] uppercase animate-fade-in-up">Value to your data</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-dark animate-fade-in-up">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Values />
      <Expertise />
      <Jobs />
      <Training />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;