import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { AppDataContext } from '../context/AppDataContext';

import 'swiper/css';
import 'swiper/css/pagination';
import '../CSS/Carousel.css';

export default function Carousel() {
  const { gallery } = useContext(AppDataContext);

  // "vefa" ile başlayan isimli görselleri filtrele
  const sliderImages = gallery.filter(item =>
    item.name?.toLowerCase().startsWith('vefa')
  );

  return (
    <div className="carousel-wrapper">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        {sliderImages.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.imageUrl} alt={item.name} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
