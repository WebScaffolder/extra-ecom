import React from 'react';

const SubscribeFormStyleTwo = () => {
    return (
        <>
            <div className="subscribe-area">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-lg-5 col-md-12 p-0">
                            <div className="subscribe-image">
                                <img src="/images/subscribe-img.jpg" alt="subscribe-img" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 p-0">
                            <div className="subscribe-content">
                                <h2>Sign up now & get 10% off</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <form className="newsletter-form">
                                    <input 
                                        type="email" 
                                        className="input-newsletter" 
                                        placeholder="Enter your email address" 
                                        name="EMAIL" 
                                        required
                                    />
                                    <button type="submit">
                                        <i className="far fa-paper-plane"></i> SUBSCRIBE NOW
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SubscribeFormStyleTwo;
