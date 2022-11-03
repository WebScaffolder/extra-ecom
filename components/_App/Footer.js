import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-md-12">
                            <div className="single-footer-widget pr-5">
                                <Link href="/">
                                    <a className="logo">
                                        <img 
                                            src="/images/logo.png" 
                                            alt="logo" 
                                        />
                                    </a>
                                </Link>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

                                <ul className="social-links">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.pinterest.com/" target="_blank">
                                            <i className="fab fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                </ul>
                                <a href="https://goo.gl/maps/JzGnmC9syLKfV9Zm8" target="_blank" className="location">Check our shop in Google Map</a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-4">
                            <div className="single-footer-widget">
                                <h3>Help</h3>
                                <ul className="custom-links">
                                    <li>
                                        <Link href="/faq">
                                            <a>FAQ's</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/order-tracking">
                                            <a>Track Your Order</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/shipping">
                                            <a>Product Guides</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/shipping">
                                            <a>Shipping Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-4">
                            <div className="single-footer-widget">
                                <h3>Company</h3>
                                <ul className="custom-links">
                                    <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Location Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Careers</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/shop-full-width-1">
                                            <a>Gift Cards</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-4">
                            <div className="single-footer-widget">
                                <h3>Contact</h3>
                                
                                <div className="phone">
                                    <span>Email:</span>
                                    <a href="mailto:info@luan.com">info@luan.com</a> <br />
                                    <a href="mailto:support@luan.com">support@luan.com</a>
                                </div>
 
                                <div className="phone">
                                    <span>Phone:</span>
                                    <a href="tel:+1234567898">(+123) 456-7898</a> <br />
                                    <a href="tel:+1234567877">(+123) 456-7877</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-7 col-sm-7">
                                <p>Copyright &copy; {currentYear} Luan. All Rights Reserved By <a href="https://hibotheme.com/" target="_blank">HiboTheme</a></p>
                            </div>
                            <div className="col-lg-6 col-md-5 col-sm-5">
                                <div className="payment-type">
                                    <img 
                                        src="/images/payment.png" 
                                        alt="payment-type" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;