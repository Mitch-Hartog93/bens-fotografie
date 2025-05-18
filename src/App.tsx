import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GalleryPage from './pages/GalleryPage';

function App() {
  useEffect(() => {
    document.title = "Ben's Fotografie | Professional Photography";
  }, []);

  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Gallery />
              <About />
              <Contact />
            </>
          } />
          <Route path="/gallery/:category" element={<GalleryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;