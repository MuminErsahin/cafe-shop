import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  const [gallery, setGallery] = useState([]);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [galleryRes, menuRes] = await Promise.all([
          axios.get("https://686186f88e74864084464b87.mockapi.io/gallery"),
          axios.get("https://686186f88e74864084464b87.mockapi.io/menu")
        ]);

        setGallery(galleryRes.data);
        setMenu(menuRes.data);
        setLoading(false);
      } catch (err) {
        console.error("API'den veri alınamadı:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <AppDataContext.Provider value={{ gallery, menu, loading }}>
      {children}
    </AppDataContext.Provider>
  );
};
