import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const FeedbackSlider = () => {
    return (
        <>
            <div className="feedback-area bg-image ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2><span>Trusted Customer Feedback</span></h2>
                    </div>

                    <Swiper 
                        navigation={true} 
                        modules={[Navigation]} 
                        className="feedback-slides"
                    > 
                        <SwiperSlide>
                            <div className="single-feedback-item">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <h3>Jasica Lora <span>- TV Model</span></h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-feedback-item">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <h3>David Conway <span>- TV Model</span></h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-feedback-item">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <h3>Joe Root <span>- TV Model</span></h3>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default FeedbackSlider;
