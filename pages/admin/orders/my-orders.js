import React from 'react';
import PageTitle from '../../../components/Common/PageTitle';
import MyOrderArea from '../../../components/Orders/MyOrderArea';
import Navbar from '../../../components/_App/Navbar';
import Footer from '../../../components/_App/Footer';

const MyOrder = ({user}) => {
    return (
        <>
            <Navbar user={user}/>

            <PageTitle
                pageTitle="My Orders" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="My Orders"
            />

            <div className="ptb-100">
                <MyOrderArea />
            </div>

            <Footer />
        </>
    );
};

export default MyOrder;
