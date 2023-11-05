import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import '../../assets/scss/animation/imageSilder.scss';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function ImageSlider({ imgs }) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={imgs[0]} alt='1'></img></SwiperSlide>
                <SwiperSlide><img src={imgs[1]} alt='2'></img></SwiperSlide>
                <SwiperSlide><img src={imgs[2]} alt='3'></img></SwiperSlide>
            </Swiper>
        </>
    );
}
