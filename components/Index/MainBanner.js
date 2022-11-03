import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toast } from "react-hot-toast";

const MainBanner = ({ products }) => {

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
            <div className="main-banner-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="content">
                                <span className="sub-title">New Arrival!</span>
                                <h1>WOMAN COLLECTION <span>-50%</span></h1>
                                <Link href="/shop-full-width-1">
                                    <a className="default-btn">
                                        <i className="fas fa-store"></i> SHOP NOW
                                    </a>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-7 col-md-12">
                            <div className="products-image-list">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-4 col-6">
                                        <div className="image">
                                            <img 
                                                src="/images/banner/woman1.png" 
                                                alt="banner-image" 
                                            />

                                            {products.slice(0, 1).map((product) => (
                                                <div className="card-content" key={product.id}>
                                                    <div className='item'>
                                                        <div className="row m-0">
                                                            <div className="col-lg-4 col-md-4 p-0">
                                                                <div className="img">
                                                                    <img 
                                                                        src={product.img_url} 
                                                                        alt='product image' 
                                                                    />

                                                                    <Link href={`/product/${product.id}`}>
                                                                        <a className='link-btn'></a>
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-8 col-md-8 p-0">
                                                                <div className='text'>
                                                                    <h3>
                                                                        <Link href={`/product/${product.id}`}>
                                                                            <a>{product.title}</a>
                                                                        </Link>
                                                                    </h3>
                                                                    <div className='price'>
                                                                        ${product.price}
                                                                    </div>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="dot"></span>
                                                </div>
                                            ))}

                                            {products.slice(1, 2).map((product) => (
                                                <div className="card-content style-two" key={product.id}>
                                                    <div className='item'>
                                                        <div className="row m-0">
                                                            <div className="col-lg-4 col-md-4 p-0">
                                                                <div className="img">
                                                                    <img 
                                                                        src={product.img_url} 
                                                                        alt='product image' 
                                                                    />

                                                                    <Link href={`/product/${product.id}`}>
                                                                        <a className='link-btn'></a>
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-8 col-md-8 p-0">
                                                                <div className='text'>
                                                                    <h3>
                                                                        <Link href={`/product/${product.id}`}>
                                                                            <a>{product.title}</a>
                                                                        </Link>
                                                                    </h3>
                                                                    <div className='price'>
                                                                        ${product.price}
                                                                    </div>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="dot"></span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-6">
                                        <div className="image">
                                            <img 
                                                src="/images/banner/woman2.png" 
                                                alt="banner-image" 
                                            />

                                            {products.slice(2, 3).map((product) => (
                                                <div className="card-content style-three" key={product.id}>
                                                    <div className='item'>
                                                        <div className="row m-0">
                                                            <div className="col-lg-4 col-md-4 p-0">
                                                                <div className="img">
                                                                    <img 
                                                                        src={product.img_url} 
                                                                        alt='product image' 
                                                                    />

                                                                    <Link href={`/product/${product.id}`}>
                                                                        <a className='link-btn'></a>
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-8 col-md-8 p-0">
                                                                <div className='text'>
                                                                    <h3>
                                                                        <Link href={`/product/${product.id}`}>
                                                                            <a>{product.title}</a>
                                                                        </Link>
                                                                    </h3>
                                                                    <div className='price'>
                                                                        ${product.price}
                                                                    </div>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="dot"></span>
                                                </div>
                                            ))}

                                            {products.slice(3, 4).map((product) => (
                                                <div className="card-content style-four" key={product.id}>
                                                    <div className='item'>
                                                        <div className="row m-0">
                                                            <div className="col-lg-4 col-md-4 p-0">
                                                                <div className="img">
                                                                    <img 
                                                                        src={product.img_url} 
                                                                        alt='product image' 
                                                                    />

                                                                    <Link href={`/product/${product.id}`}>
                                                                        <a className='link-btn'></a>
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-8 col-md-8 p-0">
                                                                <div className='text'>
                                                                    <h3>
                                                                        <Link href={`/product/${product.id}`}>
                                                                            <a>{product.title}</a>
                                                                        </Link>
                                                                    </h3>
                                                                    <div className='price'>
                                                                        ${product.price}
                                                                    </div>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="dot"></span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-6">
                                        <div className="image">
                                            <img 
                                                src="/images/banner/woman3.png" 
                                                alt="banner-image" 
                                            />
                                            
                                            {products.slice(4, 5).map((product) => (
                                                <div className="card-content style-five" key={product.id}>
                                                    <div className='item'>
                                                        <div className="row m-0">
                                                            <div className="col-lg-4 col-md-4 p-0">
                                                                <div className="img">
                                                                    <img 
                                                                        src={product.img_url} 
                                                                        alt='product image' 
                                                                    />

                                                                    <Link href={`/product/${product.id}`}>
                                                                        <a className='link-btn'></a>
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-8 col-md-8 p-0">
                                                                <div className='text'>
                                                                    <h3>
                                                                        <Link href={`/product/${product.id}`}>
                                                                            <a>{product.title}</a>
                                                                        </Link>
                                                                    </h3>
                                                                    <div className='price'>
                                                                        ${product.price}
                                                                    </div>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="dot"></span>
                                                </div>
                                            ))}

                                            {products.slice(5, 6).map((product) => (
                                                <div className="card-content style-six" key={product.id}>
                                                    <div className='item'>
                                                        <div className="row m-0">
                                                            <div className="col-lg-4 col-md-4 p-0">
                                                                <div className="img">
                                                                    <img 
                                                                        src={product.img_url} 
                                                                        alt='product image' 
                                                                    />

                                                                    <Link href={`/product/${product.id}`}>
                                                                        <a className='link-btn'></a>
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-8 col-md-8 p-0">
                                                                <div className='text'>
                                                                    <h3>
                                                                        <Link href={`/product/${product.id}`}>
                                                                            <a>{product.title}</a>
                                                                        </Link>
                                                                    </h3>
                                                                    <div className='price'>
                                                                        ${product.price}
                                                                    </div>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="dot"></span>
                                                </div>
                                            ))}

                                            {products.slice(6, 7).map((product) => (
                                                <div className="card-content style-seven" key={product.id}>
                                                    <div className='item'>
                                                        <div className="row m-0">
                                                            <div className="col-lg-4 col-md-4 p-0">
                                                                <div className="img">
                                                                    <img 
                                                                        src={product.img_url} 
                                                                        alt='product image' 
                                                                    />

                                                                    <Link href={`/product/${product.id}`}>
                                                                        <a className='link-btn'></a>
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-8 col-md-8 p-0">
                                                                <div className='text'>
                                                                    <h3>
                                                                        <Link href={`/product/${product.id}`}>
                                                                            <a>{product.title}</a>
                                                                        </Link>
                                                                    </h3>
                                                                    <div className='price'>
                                                                        ${product.price}
                                                                    </div>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="dot"></span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img 
                        src="/images/shape/shape1.png" 
                        alt="shape" 
                    />
                </div>
                <div className="shape4">
                    <img 
                        src="/images/shape/shape4.png" 
                        alt="shape" 
                    />
                </div>
            </div>
        </>
    );
}

export default MainBanner;
