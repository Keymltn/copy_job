import React, { useRef, useState } from 'react';
import './Carousel.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import truck from '../../assets/photos/unsplash_20qcctvyR1Q.png'

const Carousel = () => {
    return (
        <div className='carousel'>
            <div className="container_big">
                <div className="carousel_div">
                    <h2 className="carousel_div_title">Фоточки</h2>
                    <div className="carousel_div_carousel">
                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                            <SwiperSlide><img src={truck} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={truck} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={truck} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={truck} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={truck} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={truck} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={truck} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={truck} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={truck} alt="" /></SwiperSlide>
                        </Swiper> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel