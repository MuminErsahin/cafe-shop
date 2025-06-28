import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import '../CSS/Carousel.css';

export default function Carousel() {
  return (
    <div className="carousel-wrapper">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        <SwiperSlide><img src="/vefa1.jpg" alt="vefa1" /></SwiperSlide>
        <SwiperSlide><img src="/vefa2.jpg" alt="vefa2" /></SwiperSlide>
        <SwiperSlide><img src="/vefa3.jpg" alt="vefa3" /></SwiperSlide>
        <SwiperSlide><img src="/vefa4.jpg" alt="vefa4" /></SwiperSlide>
        <SwiperSlide><img src="/vefa5.jpg" alt="vefa5" /></SwiperSlide>
        <SwiperSlide><img src="/vefa6.jpg" alt="vefa6" /></SwiperSlide>
        <SwiperSlide><img src="/vefa7.jpg" alt="vefa7" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
