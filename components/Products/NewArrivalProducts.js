import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { useDispatch } from 'react-redux';
import { toast } from "react-hot-toast";

const NewArrivalProducts = ({ products }) => {

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
        <div className="products-area pb-100">
            <div className='container'>
                <div className="section-title">
                    <h2><span>New Arrival Products</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
 
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    cssMode={true}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="products-slides-two"
                >  
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
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
                                        <span className='new-price'>
                                            ${product.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default NewArrivalProducts;