import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import BlogWithRightSidebar from '../components/Blog/BlogWithRightSidebar';
import SubscribeFormStyleTwo from '../components/Common/SubscribeFormStyleTwo';
import Footer from '../components/_App/Footer';
 
const BlogRightSidebar = ({ user }) => {
    return (
        <>
            <TopHeader />

            <Navbar 
                user={user} 
            />

            <PageTitle
                pageTitle="Blog Right Sidebar" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog"
            />

            <BlogWithRightSidebar />

            <div className="pb-100">
                <SubscribeFormStyleTwo />
            </div>

            <Footer />
        </>
    );
}

export default BlogRightSidebar;