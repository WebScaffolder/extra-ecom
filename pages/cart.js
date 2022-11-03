import React, { useState } from 'react';
import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../components/_App/Footer';

const Cart = ({ user }) => {
    const dispatch = useDispatch();
    const productBucket = useSelector((state) => state.productBucket);
    console.log('cart', productBucket);
    const [count, setCount] = useState('');

    let totalPrice = productBucket.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const updateQuantity = (cartItem, i) => {
        let currentItem = {
            productId: cartItem.productId,
            title: cartItem.title,
            price: cartItem.price,
            img_url: cartItem.img_url,
        };
        dispatch({
            type: 'ADD_TO_CART',
            data: currentItem,
        });
        setCount(i);
    };

    const decreaseQuantity = (cartItem, i) => {
        let currentItem = {
            productId: cartItem.productId,
            title: cartItem.title,
            price: cartItem.price,
            img_url: cartItem.img_url,
        };
        dispatch({
            type: 'DECREASE_PRODUCT_QUANTITY',
            data: currentItem,
        });
        setCount(i);
    };

    const removeCartItem = (id) => {
        console.log('cart', id);
        dispatch({
            type: 'REMOVE_CART_ITEM',
            data: id,
        });
    };

    return (
        <>
            <Navbar 
                user={user}
            />

            <PageTitle
                pageTitle="Cart" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Cart"
            />

            <div className='cart-area ptb-100'>
                <div className='container'>
                    <form onSubmit={e => e.preventDefault()}>
                        <div className='cart-table table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Image</th>
                                        <th scope='col'>Product</th>
                                        <th scope='col'>Unit Price</th>
                                        <th scope='col'>Quantity</th>
                                        <th scope='col'>Total</th>
                                        <th scope='col' className="text-center">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {productBucket.length > 0 ? productBucket.map(( product, i ) => (
                                        <tr key={product.productId}>
                                            <td className='product-thumbnail'>
                                                <Link href={`/product/${product.productId}`}>
                                                    <a>
                                                        <img 
                                                            src={product.img_url} 
                                                            alt='Product Image' 
                                                        />
                                                    </a>
                                                </Link>
                                            </td>

                                            <td className='product-name'>
                                                <Link href={`/product/${product.productId}`}>
                                                    <a>{product.title}</a>
                                                </Link>
                                            </td>

                                            <td className='product-price'>
                                                <span className='unit-amount'>
                                                    ${product.price} x {product.quantity}
                                                </span>
                                            </td>

                                            <td className='product-quantity'>
                                                <div className='input-counter'>
                                                    <span
                                                        className='minus-btn'
                                                        onClick={() =>
                                                            decreaseQuantity(
                                                                product,
                                                                parseInt(product.quantity - 1),
                                                                i
                                                            )
                                                        }
                                                    >
                                                      <i className="fas fa-minus"></i>
                                                    </span>

                                                    <div className='input'>
                                                        {product.quantity}
                                                    </div>

                                                    <span
                                                        className='plus-btn'
                                                        onClick={() =>
                                                            updateQuantity(
                                                                product,
                                                                parseInt(product.quantity + 1),
                                                                i
                                                            )
                                                        }
                                                    >
                                                        <i className="fas fa-plus"></i>
                                                    </span>
                                                </div>
                                            </td>

                                            <td className='product-subtotal'>
                                                <span className='subtotal-amount'>
                                                    ${product.price * product.quantity}
                                                </span>
                                            </td>

                                            <td className="text-center">
                                                <div
                                                    className='remove'
                                                    onClick={() => removeCartItem(product.productId)} 
                                                    title="Delete"
                                                >
                                                    <i className="far fa-trash-alt"></i>
                                                </div>           
                                            </td>
                                        </tr>
                                    ))
                                    :<tr className="empty-tr">
                                        <td colSpan="6">
                                            Your cart is empty! Please add the product to your cart list! <Link href='/shop-full-width-1'><a>Go Shopping!</a></Link> 
                                        </td>
                                    </tr>} 
                                </tbody>
                            </table>
                        </div>
 
                        <div className="cart-buttons">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-sm-12 col-md-7">
                                    <div className="shopping-coupon-code">
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Coupon code'
                                            name='coupon-code'
                                            id='coupon-code'
                                        />
                                        <button type='submit'>APPLY COUPON</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                       <div className='cart-totals'>
                            <ul>
                                <li>
                                    Subtotal <span>${totalPrice}</span>
                                </li>
                                <li>
                                    Shipping <span>Free</span>
                                </li>
                                <li>
                                    Total <span>${totalPrice}</span>
                                </li>
                            </ul>
                            
                            <Link href='/checkout'>
                                <a className='default-btn'>
                                    PROCEED TO CHECKOUT
                                </a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Cart;