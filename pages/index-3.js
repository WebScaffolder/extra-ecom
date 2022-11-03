import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import HeroSlider from '../components/Index3/HeroSlider';
import Collection from '../components/Index/Collection';
import Offers from '../components/Index/Offers';
import Facility from '../components/Common/Facility';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import Partners from '../components/Common/Partners';
import LatestNews from '../components/Common/LatestNews';
import SubscribeForm from '../components/Common/SubscribeForm';
import BestSellingProducts from '../components/Products/BestSellingProducts';
import NewArrivalProducts from '../components/Products/NewArrivalProducts';
import Footer from '../components/_App/Footer';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';

const Index = ({ products, user }) => {
    return (
        <>
            <TopHeader />

            <Navbar 
                user={user} 
            />

            <HeroSlider />

            <Collection />

            <BestSellingProducts 
                products={products.slice(2, 10)} 
            />

            <div className="pb-70">
                <Offers />
            </div>

            <NewArrivalProducts 
                products={products.slice(0, 10)} 
            />

            <Facility />

            <FeedbackSlider />
            
            <Partners />

            <LatestNews />

            <SubscribeForm />
  
            <Footer />
        </>
    )
}

Index.getInitialProps = async ctx => {
    const page = ctx.query.page ? ctx.query.page : "1"

    const payload = {
        params: { 
            page, 
            limit: 1000
        }
    }

    const url = `${baseUrl}/api/v1/products`
    const response = await axios.get(url,payload)
    return response.data
}

export default Index;