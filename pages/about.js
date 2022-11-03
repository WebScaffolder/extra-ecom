import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import AboutContent from '../components/About/AboutContent';
import TeamMember from '../components/Common/TeamMember';
import Facility from '../components/Common/Facility';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import Partners from '../components/Common/Partners';
import SubscribeForm from '../components/Common/SubscribeForm';
import Footer from '../components/_App/Footer';
 
const About = ({ user }) => {
    return (
        <>
            <TopHeader />

            <Navbar 
                user={user} 
            />

            <PageTitle
                pageTitle="About Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About Us"
            />

            <AboutContent />

            <TeamMember />

            <Facility />

            <FeedbackSlider />

            <Partners />

            <SubscribeForm />

            <Footer />
        </>
    );
}

export default About;