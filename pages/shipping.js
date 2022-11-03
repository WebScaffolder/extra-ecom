import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import SubscribeForm from '../components/Common/SubscribeForm';
import Footer from '../components/_App/Footer';
 
const Shipping = ({ user }) => {
    return (
        <>
            <TopHeader />

            <Navbar user={user} />

            <PageTitle
                pageTitle="Shipping" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Shipping"
            />

            <div className="shipping-area ptb-100">
                <div className="container">
                    <div className="shipping-content">
                        <h3>Shipping Information</h3>
                        <p>Shop More. Save More.</p>
                        <ul>
                            <li>5% discount of $1000 - $1500.</li>
                            <li>25% discount of $50000 - $100000.</li>
                            <li>50% discount of $1000000 - $10000000.</li>
                        </ul>
                        <h3>Shipping Times</h3>
                        <p>Shop More. Save More.</p>
                        <ul>
                            <li>Flat Rate Shipping - on orders over $50</li>
                            <li>2nd Day Air - UPS</li>
                            <li>Next Day Air - UPS</li>
                            <li>Prices may vary due to weight.</li>
                        </ul>
                        <h3>Security and storage</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus.</p>
                        <ol>
                            <li>Credit Card: <strong>Visa</strong>, <strong>MasterCard</strong>, <strong>Discover</strong>, <strong>American Express</strong>, <strong>JCB</strong>, <strong>Visa Electron</strong>. The total will be charged to your card when the order is shipped.</li>
                            <li><strong>Luan</strong> features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                            <li>PayPal: Shop easily online without having to enter your credit card details on the website.Your account will be charged once the order is completed. To register for a PayPal account, visit the website <a href="#" target="_blank">paypal.com.</a></li>
                        </ol>
                        <p>Last updated: June 25, 2021 at 24:00 pm</p>
                    </div>
                </div>
            </div>
 
            <SubscribeForm />

            <Footer />
        </>
    );
}

export default Shipping;