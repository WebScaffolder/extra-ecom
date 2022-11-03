
import React, { useState } from 'react';
import Navbar from '../../components/_App/Navbar'
import PageTitle from '../../components/Common/PageTitle';
import Footer from '../../components/_App/Footer'
import ProductsDetailsTabs from '../../components/SimpleProduct/ProductsDetailsTabs'
import baseUrl from '../../utils/baseUrl'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { toast } from "react-hot-toast";
import Link from 'next/link';

const Product = ({ product, user }) => {
    const { 
        title, 
        price, 
        short_description, 
        sku, 
        category, 
        tag, 
        availability, 
        additional_info, 
        long_description, 
        img_url 
    } = product

    const dispatch = useDispatch();

    const [qty, setQty] = useState(1);

    const addToCart = (product) => {
        let productObj = {};
        productObj['productId'] = product.id;
        productObj['title'] = product.title;
        productObj['price'] = product.price;
        productObj['img_url'] = product.img_url;
        productObj['quantity'] = qty;
        dispatch({
            type: 'ADD_TO_CART',
            data: productObj,
        });
        toast.success("Added new item into cart");
    };

    const increment = () => {
        if( qty > 9) {
            return
        }
        setQty(qty + 1)
    };
    
    const decrement = () => {
        if( qty < 2) {
            return
        }
        setQty(qty - 1)
    };

    return (
        <>
            <Navbar 
                user={user} 
            />
            
            <PageTitle
                pageTitle="Products Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Products Details"
            />
 
            <div className="products-details-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="products-details-image">
                                <img 
                                    src={img_url} 
                                    alt="Products image" 
                                />
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="products-details-desc">
                                <h3>{title}</h3>
                                <div className="price">
                                    <span className="new-price">${price}</span>
                                </div>

                                <div className="products-review">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <a href="#" className="rating-count">4 reviews</a>
                                </div>

                                <p>
                                    {short_description}
                                </p>

                                <div className="products-info">
                                    <li>
                                        <span>
                                            SKU: <span className="sku">{sku}</span>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Availability: <span className="in-stock">{availability}</span>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Categories: <Link href="#"><a>{category}</a></Link>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Tag: <Link href="#"><a>{tag}</a></Link>
                                        </span>
                                    </li>
                                    <li>
                                        <Link href="/delivery-returns">
                                            <a target="_blank">Delivery & return</a>
                                        </Link>
                                    </li>
                                </div>

                                <div className="products-size">
                                    <span>Size:</span>
                                    <ul>
                                        <li>XS</li>
                                        <li className="active">S</li>
                                        <li>M</li>
                                        <li>XL</li>
                                        <li>XXL</li>
                                    </ul>
                                </div>
                                
                                <div className='products-add-to-cart'>
                                    <div className="d-flex align-items-center">
                                        <div className='input-counter'>
                                            <span className='minus-btn' onClick={decrement}>
                                                <i className='fas fa-minus'></i>
                                            </span>

                                            <input
                                                type='text'
                                                value={qty}
                                                onChange={(e) => e}
                                            />

                                            <span className='plus-btn' onClick={increment}>
                                                <i className='fas fa-plus'></i>
                                            </span>
                                        </div>

                                        <button
                                            className='default-btn'
                                            onClick={() => addToCart(product)}
                                        >
                                            <i className='fas fa-cart-plus'></i>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>

                                <button type="button" className="add-to-wishlist-btn">
                                    <i className="fas fa-plus"></i> Add to Wishlist
                                </button>

                                <div className="products-share">
                                    <ul className="social">
                                        <li><span>Share:</span></li>
                                        <li>
                                            <a href="https://www.facebook.com/" className="facebook" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" className="twitter" target="_blank">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" className="linkedin" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" className="instagram" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <ProductsDetailsTabs 
                                long_description={long_description} 
                                additional_info={additional_info} 
                            />
                        </div>
                    </div>
                </div>
            </div>
     
            <Footer />
        </>
    )
}

Product.getInitialProps = async (ctx) => {
    const { id } = ctx.query
    // console.log('##########=>', ctx)
    const url = `${baseUrl}/api/v1/products/${id}`
    const response = await axios.get(url)
    // console.log(response)
    return response.data
}

export default Product