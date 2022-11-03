import React from 'react';

const FacilityStyleThree = () => {
    return (
        <>
            <div className="facility-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-facility-box">
                                <div className="icon bg-f5f5f5">
                                    <i className="fas fa-truck"></i>
                                </div>
                                <h3>Free Shipping</h3>
                                <span>Orders over $200</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-facility-box">
                                <div className="icon bg-f5f5f5">
                                    <i className="far fa-credit-card"></i>
                                </div>
                                <h3>Secure Payment</h3>
                                <span>100% secure payment</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-facility-box">
                                <div className="icon bg-f5f5f5">
                                    <i className="fas fa-gift"></i>
                                </div>
                                <h3>Gift Certificate</h3>
                                <span>Buy now $500 to $1000</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-facility-box">
                                <div className="icon bg-f5f5f5">
                                    <i className="fas fa-headphones-alt"></i>
                                </div>
                                <h3>24/7 Support</h3>
                                <span>Ready support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FacilityStyleThree;
