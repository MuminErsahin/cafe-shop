import HeroSection from './components/HeroSection';
import AboutVefa from './components/AboutVefa';
import FeaturedMenu from './components/FeaturedMenu';
import GallerySection from './components/GallerySection';

import Navbar from './components/Navbar';
import Home from './components/Home';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    <div className="font-serif bg-cream">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HeroSection" element={<HeroSection />} />
        <Route path="/AboutVefa" element={<AboutVefa />} />
        <Route path="/FeaturedMenu" element={<FeaturedMenu />} />
        <Route path="/GallerySection" element={<GallerySection />} />
       
      </Routes>
       <Footer />
    </div>
  );
}

export default App;
