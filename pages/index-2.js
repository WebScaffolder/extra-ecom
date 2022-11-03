import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import HeroSlider from '../components/Index2/HeroSlider';
import FacilityStyleTwo from '../components/Common/FacilityStyleTwo';
import NewArrivalProductsTwo from '../components/Products/NewArrivalProductsTwo';
import TrendingProducts from '../components/Products/TrendingProducts';
import Offers from './../components/Index2/Offers';
import Collection from '../components/Index2/Collection';
import FeedbackStyleTwo from '../components/Common/FeedbackStyleTwo';
import SubscribeFormStyleTwo from '../components/Common/SubscribeFormStyleTwo';
import Partners from '../components/Common/Partners';
import Footer from '../components/_App/Footer';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';

const Index2 = ({ products, user }) => {
    return (
        <>
            <TopHeader />

            <Navbar 
                user={user} 
            />

            <HeroSlider />

            <FacilityStyleTwo />
 
            <NewArrivalProductsTwo 
                products={products} 
            />

            <Offers />
  
            <TrendingProducts 
                products={products.slice(0, 5)} 
            />
           
            <Collection />
  
            <FeedbackStyleTwo />
 
            <SubscribeFormStyleTwo />

            <Partners />
            
            <Footer />
        </>
    );
};

Index2.getInitialProps = async (ctx) => {
    const page = ctx.query.page ? ctx.query.page : '1';

    const payload = {
        params: {
            page,
            limit: 1000,
        },
    };

    const url = `${baseUrl}/api/v1/products`;
    const response = await axios.get(url, payload);
    return response.data;
};

export default Index2;
