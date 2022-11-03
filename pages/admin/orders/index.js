import React from 'react';
import PageTitle from '../../../components/Common/PageTitle';
import OrderArea from '../../../components/Orders/OrderArea';
import Navbar from '../../../components/_App/Navbar';
import Footer from '../../../components/_App/Footer';

const Index = ({ user }) => {
    return (
        <>
            <Navbar user={user} />

            <PageTitle
                pageTitle="Orders" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Orders"
            />

            <div className="ptb-100">
                <OrderArea />
            </div>

            <Footer />
        </>
    );
};

export default Index;
