import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import ContactPageContent from '../components/Contact/ContactPageContent';
import SubscribeFormStyleTwo from '../components/Common/SubscribeFormStyleTwo';
import Footer from '../components/_App/Footer';
 
const Contact = ({ user }) => {
    return (
        <>
            <TopHeader />

            <Navbar 
                user={user}
            />

            <PageTitle
                pageTitle="Contact Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact Us"
            />

            <ContactPageContent />

            <div className="pb-100">
                <SubscribeFormStyleTwo />
            </div>

            <Footer />
        </>
    );
}

export default Contact;