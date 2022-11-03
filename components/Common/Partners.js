import React from 'react';

const Partners = () => {
    return (
        <>
            <div className="partner-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-12">
                            <div className="partner-title">
                                <h4>Our Trusted Branding Partners</h4>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12">
                            <div className="partners-list justify-content-center align-items-center">
                                <div className="partner-item">
                                    <a href="#" className="d-inline-block" target="_blank">
                                        <img src="/images/partner/partner1.png" alt="partner" />
                                    </a>
                                </div>
                                <div className="partner-item">
                                    <a href="#" className="d-inline-block" target="_blank">
                                        <img src="/images/partner/partner2.png" alt="partner" />
                                    </a>
                                </div>
                                <div className="partner-item">
                                    <a href="#" className="d-inline-block" target="_blank">
                                        <img src="/images/partner/partner3.png" alt="partner" />
                                    </a>
                                </div>
                                <div className="partner-item">
                                    <a href="#" className="d-inline-block" target="_blank">
                                        <img src="/images/partner/partner4.png" alt="partner" />
                                    </a>
                                </div>
                                <div className="partner-item">
                                    <a href="#" className="d-inline-block" target="_blank">
                                        <img src="/images/partner/partner5.png" alt="partner" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Partners;
