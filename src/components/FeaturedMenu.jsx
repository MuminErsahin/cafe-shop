import React, { useContext } from 'react';
import { AppDataContext } from '../context/AppDataContext';
import '../CSS/FeatureMenu.css';

function FeaturedMenu() {
  const { menu, loading } = useContext(AppDataContext);

  if (loading) return <p>Yükleniyor...</p>;

  const hotDrinks = menu.filter(item => item.type === "drink" && item.subcategory === "hot");
  const coldDrinks = menu.filter(item => item.type === "drink" && item.subcategory === "cold");
  const mocktails = menu.filter(item => item.type === "drink" && item.subcategory === "mocktail");
  const eats = menu.filter(item => item.type === "eats");
  const desserts = menu.filter(item => item.type === "dessert");

  return (
    <section className="menu-section">
      <div className="menu-overlay">
        <h2>☕ Sıcak İçecekler</h2>
        <ul>
          {hotDrinks.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>

        <h2>🧊 Soğuk İçecekler</h2>
        <ul>
          {coldDrinks.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>

        <h2>🍹 Mocktailler</h2>
        <ul>
          {mocktails.map(item => (
            <li key={item.id}>
              {item.name}
              {item.description && <span> – {item.description}</span>}
            </li>
          ))}
        </ul>

        <h2>🥪 Yiyecekler</h2>
        <ul>
          {eats.map(item => (
            <li key={item.id}>
              {item.name}
              {item.description && <span> – {item.description}</span>}
            </li>
          ))}
        </ul>

        <h2>🍰 Tatlılar</h2>
        <ul>
          {desserts.map(item => (
            <li key={item.id}>
              {item.name}
              {item.description && <span> – {item.description}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FeaturedMenu;
