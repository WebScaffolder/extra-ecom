import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import FeedbackContent from '../components/Feedback/FeedbackContent';
import SubscribeForm from '../components/Common/SubscribeForm';
import Footer from '../components/_App/Footer';
 
const Feedback = ({ user }) => {
    return (
        <>
            <TopHeader />

            <Navbar 
                user={user}
            />

            <PageTitle
                pageTitle="Customer Feedback" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Feedback"
            />

            <FeedbackContent />
 
            <SubscribeForm />

            <Footer />
        </>
    );
}

export default Feedback;