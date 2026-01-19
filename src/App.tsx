import { useState, useEffect } from 'react';
import TorchIntro from './components/TorchIntro';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Team from './components/Team';
import Patrons from './components/Patrons';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TorchIntro loading time
    const timer = setTimeout(() => setLoading(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-950 min-h-screen">
      {loading ? (
        <TorchIntro />
      ) : (
        <main className="relative w-full">
          <Hero />
          <About />
          <Schedule />
          <Patrons /> 
          <Team />
          <Footer />
        </main>
      )}
    </div>
  );
}

export default App;