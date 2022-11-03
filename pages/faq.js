import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import FaqContent from '../components/FAQ/FaqContent';
import SubscribeForm from '../components/Common/SubscribeForm';
import Footer from '../components/_App/Footer';
 
const FAQ = ({ user }) => {
    return (
        <>
            <TopHeader />

            <Navbar 
                user={user}
            />

            <PageTitle
                pageTitle="Frequently Asked Questions" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQ"
            />

            <FaqContent />
 
            <SubscribeForm />

            <Footer />
        </>
    );
}

export default FAQ;