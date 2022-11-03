import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import BlogDetailsContent from '../components/Blog/BlogDetailsContent';
import SubscribeForm from '../components/Common/SubscribeForm';
import Footer from '../components/_App/Footer';
 
const BlogDetails = ({ user }) => {
    return (
        <>
            <TopHeader />

            <Navbar 
                user={user} 
            />

            <BlogDetailsContent />
 
            <SubscribeForm />

            <Footer />
        </>
    );
}

export default BlogDetails;