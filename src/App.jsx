import HeroSection from './components/HeroSection';
import AboutVefa from './components/AboutVefa';
import FeaturedMenu from './components/FeaturedMenu';
import GallerySection from './components/GallerySection';
import ContactAndHours from './components/ContactAndHours';

import Home from './components/Home';

import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="font-serif bg-cream">
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HeroSection" element={<HeroSection />} />
        <Route path="/AboutVefa" element={<AboutVefa />} />
        <Route path="/FeaturedMenu" element={<FeaturedMenu />} />
        <Route path="/GallerySection" element={<GallerySection />} />
        <Route path="/ContactAndHours" element={<ContactAndHours />} />
      </Routes>
    </div>
  );
}

export default App;
