import React, { useContext } from 'react';
import { AppDataContext } from '../context/AppDataContext'; 
import '../CSS/Location.css';

function Location() {
  const { gallery } = useContext(AppDataContext);
  const locationImage = gallery.find(item => item.name === "locationImage"); 

  const handleDirectionClick = () => {
    window.open(
      'https://www.google.com/maps/dir/?api=1&destination=Vefa+Kitap+Kafe+Antika',
      '_blank'
    );
  };

  return (
    <div className="location-container">
      {locationImage && (
        <img
          src={locationImage.imageUrl}
          alt="Cafe Location"
          className="location-image"
        />
      )}
      <div className="location-info">
        <h2>Ziyaret Etmek İster misiniz?</h2>
        <p>
          Ordu merkezde tarihi atmosferi, kahvesi ve kitaplarıyla sizi bekliyor.
        </p>
        <button onClick={handleDirectionClick} className="direction-button">
          Yol Tarifi Al
        </button>
      </div>
    </div>
  );
}

export default Location;
