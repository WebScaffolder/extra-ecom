import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageTitle from '../../components/Common/PageTitle';
import Footer from '../../components/_App/Footer';
import ProductForm from '../../components/Product/ProductForm';

const Product = ({ user }) => {
    return (
        <>
            <Navbar user={user} />
            
            <PageTitle
                pageTitle="Create Product" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Create Product"
            />

            <div className="profile-authentication-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <ProductForm />
                        </div>
                    </div>
                </div>
            </div>
  
            <Footer />
        </>
    )
}

export default Product;