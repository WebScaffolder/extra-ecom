import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import BlogGrid from '../components/Blog/BlogGrid';
import SubscribeForm from '../components/Common/SubscribeForm';
import Footer from '../components/_App/Footer';
 
const Blog = ({ user }) => {
    return (
        <>
            <TopHeader />

            <Navbar 
                user={user} 
            />

            <PageTitle
                pageTitle="Blog Grid" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Grid"
            />

            <BlogGrid />
 
            <SubscribeForm />

            <Footer />
        </>
    );
}

export default Blog;