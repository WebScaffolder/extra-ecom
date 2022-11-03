import React from 'react';
import ContactForm from './ContactForm';

const ContactPageContent = () => {
    return (
        <>
            <div className="contact-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact-content">
                                <h2>Howdy! Tell Us About Your Thinking</h2>
                                <p>Contact us with your details & ready to start. Lets provide us a message & contact us!</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="contact-image">
                                <img 
                                    src="/images/contact.png" 
                                    alt="contact-image" 
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-form-area">
                        <div className="row m-0">
                            <div className="col-lg-8 col-md-12 p-0">
                                {/* Contact Form */}
                                <ContactForm />
                            </div>

                            <div className="col-lg-4 col-md-12 p-0">
                                <div className="contact-info">
                                    <h3>Contact Information</h3>
                                    <ul className="info">
                                        <li>
                                            <i className="fas fa-map-marker-alt"></i>
                                            Altona Rd, Seaholme VIC 3018, Australia
                                        </li>
                                        <li>
                                            <i className="fas fa-mobile-alt"></i>
                                            <a href="tel:+1234567898">(+123) 456-7898</a>
                                        </li>
                                        <li>
                                            <i className="far fa-envelope"></i>
                                            <a href="mailto:hello@luan.com">hello@luan.com</a>
                                        </li>
                                    </ul>
                                    <h3>Follow Us</h3>
                                    <ul className="social-links">
                                        <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                                        <li><a href="https://www.twitter.com/" target="_blank">Twitter</a></li>
                                        <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                                        <li><a href="https://www.pinterest.com/" target="_blank">Pinterest</a></li>
                                        <li><a href="https://www.linkedin.com/" target="_blank">Linkedin</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPageContent;