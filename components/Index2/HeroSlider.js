import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const HeroSlider = () => {
    return (
        <>
            <div className="home-wrapper-area">
                <div className="container-fluid">
                    <Swiper 
                        navigation={true} 
                        modules={[Navigation]} 
                        className="home-wrapper-slides"
                    >
                        <SwiperSlide>
                            <div className="single-banner-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="content">
                                            <span className="sub-title">New Arrival!</span>
                                            <h1>SUMMER COLLECTION <span>-50%</span></h1>
                                            <Link href="/shop-left-sidebar-1">
                                                <a className="default-btn">
                                                    <i className="fas fa-store"></i> SHOP NOW
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12">
                                        <div className="image">
                                            <img 
                                                src="/images/banner/banner1.jpg" 
                                                alt="banner-image" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-banner-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="content">
                                            <span className="sub-title">New Arrival!</span>
                                            <h1>WINTER COLLECTION <span>-20%</span></h1>
                                            <Link href="/shop-left-sidebar-1">
                                                <a className="default-btn">
                                                    <i className="fas fa-store"></i> SHOP NOW
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12">
                                        <div className="image">
                                            <img 
                                                src="/images/banner/banner2.jpg" 
                                                alt="banner-image" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                
                {/* Shape Images */}
                <div className="shape1">
                    <img 
                        src="/images/shape/shape1.png" 
                        alt="shape" 
                    />
                </div>
                <div className="shape3">
                    <img 
                        src="/images/shape/shape3.png" 
                        alt="shape" 
                    />
                </div>
            </div>
        </>
    );
}

export default HeroSlider;
