import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import SubscribeForm from '../components/Common/SubscribeForm';
import Footer from '../components/_App/Footer';
 
const DeliveryReturns = ({ user }) => {
    return (
        <>
            <TopHeader />

            <Navbar 
                user={user}
            />

            <PageTitle
                pageTitle="Delivery & Returns" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Delivery & Returns"
            />

            <div className="delivery-returns-area ptb-100">
                <div className="container">
                    <div className="delivery-returns-content">
                        <h3>Overview</h3>
                        <p>Your order of $450.00 or more gets free standard delivery.</p>
                        <ul>
                            <li>Standard delivered 5-7 Business Days</li>
                            <li>Express delivered 3-5 Business Days</li>
                        </ul>
                        <p>Orders are processed and delivered Monday - Friday (excluding public holidays) <strong>Luan</strong> Members enjoy free returns.</p>
                        <h3>Confidential information</h3>
                        <p><strong>Luan</strong> accepts the following payment methods:</p>
                        <ul>
                            <li>Credit Card: <strong>Visa</strong>, <strong>MasterCard</strong>, <strong>Discover</strong>, <strong>American Express</strong>, <strong>JCB</strong>, <strong>Visa Electron</strong>. The total will be charged to your card when the order is shipped.</li>
                            <li><strong>Luan</strong> features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                            <li>PayPal: Shop easily online without having to enter your credit card details on the website.Your account will be charged once the order is completed. To register for a PayPal account, visit the website <a href="#" target="_blank">paypal.com.</a></li>
                        </ul>
                        <p>Orders are processed and delivered Monday - Friday (excluding public holidays) <strong>Luan</strong> Members enjoy free returns.</p>
                    </div>
                </div>
            </div>
 
            <SubscribeForm />

            <Footer />
        </>
    );
}

export default DeliveryReturns;