import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toast } from "react-hot-toast";

const FeaturedProducts = ({ products }) => {
    
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
        <div className="products-area pt-100 pb-70 bg-f5f5f5">
            <div className='container'>
                <div className="section-title style-two">
                    <h2>Our Featured Products</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
 
                <div className="row justify-content-center">
                    {products.slice(0, 6).map((product) => (
                        <div className="col-lg-4 col-md-6 col-sm-6" key={product.id}>
                            <div className='single-products-item'>
                                <div className="image">
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
                                </div>

                                <div className='content'>
                                    <h3>
                                        <Link href={`/product/${product.id}`}>
                                            <a>{product.title}</a>
                                        </Link>
                                    </h3>
                                    <a
                                        href="#"
                                        className='add-to-cart-btn'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            addToCart(product);
                                        }}
                                    >
                                        Add to cart <i className="fas fa-cart-plus"></i>
                                    </a>
                                    <div className='price'>
                                        <span className='new-price'>
                                            ${product.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
