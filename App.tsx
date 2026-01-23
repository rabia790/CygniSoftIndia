
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Pillars from './components/Pillars';
import Blueprint from './components/Blueprint';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Pillars />
        <Blueprint />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
