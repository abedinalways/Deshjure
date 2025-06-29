import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import slide01 from '../../assets/banner/banner1.png';
import slide02 from '../../assets/banner/banner2.png';
import slide03 from '../../assets/banner/banner3.png';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-4xl mb-2"
      >
        <SwiperSlide><img src={slide01} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide02} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide03} alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}