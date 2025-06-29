import React, { useContext } from 'react';
import { AppDataContext } from '../context/AppDataContext'; 
import '../CSS/Footer.css';

function Footer() {
  const { gallery } = useContext(AppDataContext);
  const footerLogo = gallery.find(item => item.name === "footerLogo"); 

  return (
    <section className="footer-section">
      <div className="footer-overlay">
        {footerLogo && (
          <img
            src={footerLogo.imageUrl}
            alt="Footer Logo"
            className="footer-logo"
          />
        )}
        <div className="footer-info">
          <h4>İletişim</h4>
          <p>📍 Vefa Kitap Kafe & Antika, Ordu</p>
          <p>📞 +90 555 123 45 67</p>
          <p>📧 info@vefakafe.com</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
