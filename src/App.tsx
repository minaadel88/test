import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ParticleText from './components/ParticleText';
import Features from './components/Features';
import Stats from './components/Stats';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroBanner />
        <ParticleText />
        <Features />
        <Stats />
      </main>
    </div>
  );
}

export default App;