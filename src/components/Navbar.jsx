import React, { useContext } from 'react';
import { AppDataContext } from '../context/AppDataContext';
import '../CSS/Navbar.css';

export default function Navbar() {
  const { gallery } = useContext(AppDataContext);
  const logo = gallery.find(item => item.name === 'logo');

  return (
    <nav className="navbar">
      <div className="logo">
        {logo && (
          <img src={logo.imageUrl} alt="Vefa Logo" width="190" />
        )}
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/AboutVefa">About</a></li>
        <li><a href="/FeaturedMenu">Menu</a></li>
        <li><a href="/GallerySection">Gallery</a></li>
        {/* İstersen burayı kaldırabilirsin */}
        {/* <li><a href="/ContactAndHours">Contact</a></li> */}
      </ul>
    </nav>
  );
}
