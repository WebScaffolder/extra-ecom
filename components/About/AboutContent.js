import React from 'react';
import Link from 'next/link';

const AboutContent = () => {
    return (
        <>
            <div className="about-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="about-content">
                                <h2>About <strong>Luan</strong> Store</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="about-text">
                                <p><strong>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="about-image">
                                <img 
                                    src="/images/about.jpg" 
                                    alt="about-image" 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="funfacts-area">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-6 col-sm-3">
                                <div className="single-funfacts-box">
                                    <div className="icon">
                                        <i className="fas fa-shopping-bag"></i>
                                    </div>
                                    <h3>Products for sale</h3>
                                    <span className="number">25.6K</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6 col-sm-3">
                                <div className="single-funfacts-box">
                                    <div className="icon">
                                        <i className="fas fa-store-alt"></i>
                                    </div>
                                    <h3>Sellers active on store</h3>
                                    <span className="number">1.2M</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6 col-sm-3">
                                <div className="single-funfacts-box">
                                    <div className="icon">
                                        <i className="fas fa-shopping-basket"></i>
                                    </div>
                                    <h3>Buyers active on store</h3>
                                    <span className="number">25.2M</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6 col-sm-3">
                                <div className="single-funfacts-box">
                                    <div className="icon">
                                        <i className="far fa-credit-card"></i>
                                    </div>
                                    <h3>Monthly gross sales</h3>
                                    <span className="number">$10.8M</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutContent;