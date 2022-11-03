import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import Footer from '../components/_App/Footer';

const CustomerService = ({ user }) => {
    return (
        <>
            <Navbar 
                user={user}
            />

            <PageTitle
                pageTitle="Customer Service" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Customer Service"
            />

            <div className="customer-service-area ptb-100">
                <div className="container">
                    <div className="customer-service-content">
                        <h4>Shipping Times and Costs</h4>
                        <p><strong>1.</strong> Complimentary ground shipping within 1 to 7 business days<br />
                            <strong>2.</strong> In-store collection available within 1 to 7 business days<br />
                            <strong>3.</strong> Next-day and Express delivery options also available<br />
                            <strong>4.</strong> Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items
                            <strong>5.</strong> See the delivery FAQs for details on shipping methods, costs and delivery times
                        </p>
                        <h4>Payment Methods</h4>
                        <p><strong>Fearn</strong> accepts the following payment methods:</p>
                        <ul>
                            <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                            <li><strong>Fearn</strong> features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                            <li>PayPal: Shop easily online without having to enter your credit card details on the website.Your account will be charged once the order is completed. To register for a PayPal account, visit the website <a href="#" target="_blank">paypal.com.</a></li>
                        </ul>
                        <h4>Exchanges, Returns and Refunds</h4>
                        <p>Items returned within 14 days of their original shipment date in same as new condition will be eligible for a full refund or store credit. Refunds will be charged back to the original form of payment used for purchase. Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</p>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default CustomerService;