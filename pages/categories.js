import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import BlogCategories from '../components/Blog/BlogCategories';
import SubscribeForm from '../components/Common/SubscribeForm';
import Footer from '../components/_App/Footer';
 
const Categories = ({ user }) => {
    return (
        <>
            <TopHeader />

            <Navbar 
                user={user} 
            />

            <PageTitle
                pageTitle="Categories" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Categories"
            />

            <BlogCategories />
 
            <SubscribeForm />

            <Footer />
        </>
    );
}

export default Categories;