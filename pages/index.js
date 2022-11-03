import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/Index/MainBanner';
import Partners from '../components/Common/Partners';
import Collection from '../components/Index3/Collection';
import FeaturedProducts from '../components/Products/FeaturedProducts';
import FacilityStyleThree from '../components/Common/FacilityStyleThree';
import TrendingProductsStyle from '../components/Products/TrendingProductsStyle';
import FeedbackStyleThree from '../components/Common/FeedbackStyleThree';
import SubscribeFormStyleThree from '../components/Common/SubscribeFormStyleThree';
import Footer from '../components/_App/Footer';
import baseUrl from '../utils/baseUrl'
import axios from 'axios'

const Index3 = ({ products, user }) => {
    return (
        <>
            <TopHeader />

            <Navbar 
                user={user} 
            />

            <MainBanner 
                products={products.slice(0, 7)}  
            />

            <Partners />

            <Collection />

            <FeaturedProducts 
                products={products.slice(0, 6)} 
            />

            <FacilityStyleThree />

            <hr />
  
            <TrendingProductsStyle 
                products={products.slice(0, 2)} 
            />

            <FeedbackStyleThree />

            <SubscribeFormStyleThree />
  
            <Footer />
        </>
    )
}

Index3.getInitialProps = async ctx => {
    const page = ctx.query.page ? ctx.query.page : "1"

    const payload = {
        params: { 
            page, 
            limit: 100
        }
    }

    const url = `${baseUrl}/api/v1/products`
    const response = await axios.get(url,payload)
    return response.data
}

export default Index3;