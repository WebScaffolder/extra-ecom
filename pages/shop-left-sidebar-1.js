import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import Sidebar from '../components/Products/Sidebar';
import SubscribeForm from '../components/Common/SubscribeForm';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { toast } from "react-hot-toast";

const ShopLeftSidebar = ({ products, user }) => {
    const dispatch = useDispatch();

    const addToCart = (product) => {
        let productObj = {};
        productObj['productId'] = product.id;
        productObj['title'] = product.title;
        productObj['price'] = product.price;
        productObj['img_url'] = product.img_url;
        productObj['quantity'] = 1;
        dispatch({
            type: 'ADD_TO_CART',
            data: productObj,
        });

        toast.success("Added new item into cart");
    };

    return (
        <>
            <Navbar user={user} />

            <PageTitle
                pageTitle="Shop Left Sidebar" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Products"
            />

            <div className="products-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="left-sidebar">
                                <Sidebar />
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className='dravo-grid-sorting row align-items-center'>
                                <div className='col-lg-7 col-md-6 result-count'>
                                    <div className='d-flex align-items-center'>
                                        <p>
                                            We found <span className='count'>{products.length}</span> products available for you!
                                        </p>
                                    </div>
                                </div>

                                <div className='col-lg-5 col-md-6 ordering'>
                                    <div className='select-box'>
                                        <label>Sort By:</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option>Default</option>
                                            <option>Popularity</option>
                                            <option>Latest</option>
                                            <option>Price: low to high</option>
                                            <option>Price: high to low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='row justify-content-center'>
                                {products.length > 0 && products.map((product) => (
                                    <div className='col-lg-6 col-sm-6 col-md-6' key={product.id}>
                                        <div className='single-products-box'>
                                            <Link href={`/product/${product.id}`}>
                                                <a className='d-block'>
                                                    <img 
                                                        src={product.img_url} 
                                                        alt='product image' 
                                                    />
                                                </a>
                                            </Link>

                                            <ul className="products-button">
                                                <li>
                                                    <Link href={`/product/${product.id}`}>
                                                        <a>
                                                            <i className="fas fa-search-plus"></i>
                                                            <span className="tooltip-label">View Details</span>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <button type='button'>
                                                        <i className="far fa-heart"></i>
                                                        <span className="tooltip-label">Add to Wishlist</span>
                                                    </button>
                                                </li>
                                            </ul>
 
                                            <div className='content'>
                                                <h3>
                                                    <Link href={`/product/${product.id}`}>
                                                        <a>{product.title}</a>
                                                    </Link>
                                                </h3>
                                                <Link href='#'>
                                                    <a
                                                        className='add-to-cart-btn'
                                                            onClick={(e) => {
                                                            e.preventDefault();
                                                            addToCart(product);
                                                        }}
                                                    >
                                                        Add to cart <i className="fas fa-cart-plus"></i>
                                                    </a>
                                                </Link>
                                                <div className='price'>
                                                    <span className='new-price'>${product.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* <div className='col-lg-12 col-sm-12 col-md-12'>
                                    <div className="pagination-area">
                                        <div className="nav-links">
                                            <a href="#" className="previous page-numbers" title="Next Page">
                                                <i className="fas fa-arrow-left"></i>
                                            </a>
                                            <span className="page-numbers current">1</span>
                                            <a href="#" className="page-numbers">2</a>
                                            <a href="#" className="page-numbers">3</a>
                                            <a href="#" className="page-numbers">4</a>
                                            <a href="#" className="next page-numbers" title="Next Page">
                                                <i className="fas fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SubscribeForm />
       
            <Footer />
        </>
    )
}

ShopLeftSidebar.getInitialProps = async (ctx) => {
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

export default ShopLeftSidebar;