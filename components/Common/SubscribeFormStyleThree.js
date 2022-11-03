import React from 'react';

const SubscribeFormStyleThree = () => {
    return (
        <>
            <div className="subscribe-area ptb-100">
                <div className="container">
                    <div className="subscribe-text">
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
        </>
    );
}

export default SubscribeFormStyleThree;