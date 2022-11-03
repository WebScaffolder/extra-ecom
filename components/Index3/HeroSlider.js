import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const HeroSlider = () => {
    return (
        <>
            <div className="home-area">
                <div className="container-fluid">
                    <Swiper 
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="home-slides"
                    >
                        <SwiperSlide>
                            <div className="banner-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-12">
                                        <div className="content">
                                            <span className="sub-title">New Inspiration 2021!</span>
                                            <h1>CLOTHING MADE FOR YOU!</h1>
                                            <p>Trending from men and women style collection</p>
                                            <Link href="/shop-right-sidebar-1">
                                                <a className="default-btn">
                                                    <i className="fas fa-store"></i> SHOP NOW
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-12">
                                        <div className="image">
                                            <img 
                                                src="/images/banner/banner3.png" 
                                                alt="banner-image" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="banner-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-12">
                                        <div className="content">
                                            <span className="sub-title">New Arrival 2021!</span>
                                            <h1>MADE FOR YOU CLOTHING!</h1>
                                            <p>Trending from men and women style collection</p>
                                            <Link href="/shop-right-sidebar-1">
                                                <a className="default-btn">
                                                    <i className="fas fa-store"></i> SHOP NOW
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-12">
                                        <div className="image">
                                            <img 
                                                src="/images/banner/banner4.png" 
                                                alt="banner-image" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </>
    );
}

export default HeroSlider;
