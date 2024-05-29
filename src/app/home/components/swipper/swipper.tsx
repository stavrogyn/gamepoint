'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';


// Install Swiper modules
SwiperCore.use([Pagination, Navigation]);


type CarouselProps = {
  images: StaticImageData[];
};

export const Carousel = ({ images }: CarouselProps) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image src={image} alt={`Slide ${index}`} style={{ width: '100%'}} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
