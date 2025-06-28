import React from 'react';
import '../CSS/Footer.css';

function Footer() {
  return (
   <section className="footer-section">
      <div className="footer-overlay">
        <img src="/footerlogo.png" alt="Footer Logo" className="footer-logo" />
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
