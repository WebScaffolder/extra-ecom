import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { parseCookies } from 'nookies';
import cookie from "js-cookie";
import axios from 'axios';
import Link from 'next/link';
import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import Footer from '../components/_App/Footer';
import baseUrl from '../utils/baseUrl';
import catchErrors from '../utils/catchErrors';
import CheckoutBtn from '../components/CheckoutButton/CheckoutBtn';

const INITIAL_USERDETAILS = {
    name: '',
    address: '',
    email: '',
    phone: '',
};

const Checkout = ({ user, price }) => {
    const [userDetails, setuserDetails] = useState(INITIAL_USERDETAILS);
    const productBucket = useSelector(state => state.productBucket);
    const [countryName, setcountryName] = useState('Browse Category');
    const { luan_token } = parseCookies();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = React.useState(true);

    React.useEffect(() => {
        const isuserDetails = Object.values(userDetails).every(el => Boolean(el))
        isuserDetails ? setDisabled(false) : setDisabled(true)
    }, [userDetails]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuserDetails((prevState) => ({ ...prevState, [name]: value }));
    };

    const totalPrice =
    productBucket.length > 0 &&
    productBucket.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = async (paymentData) => {
		try {
            const luan_token = cookie.get("luan_token");
            const { country, name, email, address, city, phone } = userDetails;
            paymentData["orderItems"] = productBucket;
            paymentData["country"] = countryName;
            paymentData["name"] = name;
            paymentData["email"] = email;
            paymentData["address"] = address;
            paymentData["city"] = city;
            paymentData["phone"] = phone;
            paymentData["totalPrice"] = totalPrice;
            paymentData["stripeTotal"] = Number((totalPrice * 100).toFixed(2)),
            paymentData["productId"] = productBucket[0].productId;
            const payload = { paymentData };

			const url = `${baseUrl}/api/v1/orders`;
			const headers = { headers: { Authorization: luan_token } };
			const response = await axios.post(url, payload, headers);
			toast.success(response.data);
		} catch (error) {
			catchErrors(error, window.alert);
			console.log(error.message);
		}
	};

    return (
        <>
            <Navbar 
                user={user} 
            />

            <PageTitle
                pageTitle="Checkout" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Checkout"
            />

            <div className='checkout-area ptb-100'>
                <div className='container'>
                    {!user && (
                        <div className='user-actions'>
                            <i className="fas fa-sign-in-alt"></i> {' '}
                            <span>
                                Returning customer?{' '}
                                <Link href='/authentication'>
                                    <a>Click here to login</a>
                                </Link>
                            </span>
                        </div>
                    )}

                    <div>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                <div className='billing-details'>
                                    <h3 className='title'>Billing Details</h3>

                                    <div className='row'>
                                        <div className='col-lg-12 col-md-12'>
                                            <div className='form-group'>
                                                <label>
                                                    Name <span className='required'>*</span>
                                                </label>
                                                <input
                                                    type='text'
                                                    className='form-control' 
                                                    placeholder="Type here..."
                                                    name='name'
                                                    value={userDetails.name}
                                                    onChange={handleChange} 
                                                    required
                                                />
                                            </div>
                                        </div>
 
                                        <div className='col-lg-12 col-md-12'>
                                            <div className='form-group'>
                                                <label>
                                                    Email Address <span className='required'>*</span>
                                                </label>
                                                <input
                                                    type='email'
                                                    className='form-control' 
                                                    placeholder="Type here..."
                                                    name='email'
                                                    value={userDetails.email}
                                                    onChange={handleChange} 
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className='col-lg-12 col-md-12'>
                                            <div className='form-group'>
                                                <label>
                                                    Phone <span className='required'>*</span>
                                                </label>
                                                <input
                                                    type='number'
                                                    className='form-control' 
                                                    placeholder="Type here..."
                                                    name='phone'
                                                    value={userDetails.phone}
                                                    onChange={handleChange} 
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className='col-lg-12 col-md-6'>
                                            <div className='form-group'>
                                                <label>
                                                    Address <span className='required'>*</span>
                                                </label>
                                                <input
                                                    type='text'
                                                    className='form-control' 
                                                    placeholder="Type here..."
                                                    name='address'
                                                    value={userDetails.address}
                                                    onChange={handleChange} 
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-12'>
                                <div className='order-details'>
                                    <h3 className='title'>Your Order</h3>

                                    <div className='order-table table-responsive'>
                                        <table className='table table-bordered'>
                                            <thead>
                                                <tr>
                                                    <th scope='col'>Product Name</th>
                                                    <th scope='col'>Total</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {productBucket.length > 0 && productBucket.map((product, i) => (
                                                    <tr key={i}>
                                                        <td className='product-name'>
                                                            <Link href={`/product/${product.productId}`}>
                                                                <a>{product.title} : {product.quantity}</a>
                                                            </Link>
                                                        </td>
                                                        <td className='product-total'>
                                                            <span className='subtotal-amount'>
                                                                ${product.price} x {product.quantity}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}

                                                <tr>
                                                    <td>
                                                        Shipping 
                                                    </td>
                                                    <td>Free</td>
                                                </tr>

                                                <tr>
                                                    <td className='total-price'>
                                                        <span>Order Total</span>
                                                    </td>

                                                    <td className='product-subtotal'>
                                                        {totalPrice > 0 ? (
                                                            <span className='subtotal-amount'>${totalPrice}</span>
                                                        ) : (
                                                            <span className='subtotal-amount'>$0</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className='payment-box'>
                                        <div className='payment-method'>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>

                                            <CheckoutBtn
                                                handleCheckout={handleCheckout}
                                                name="Place Order"
                                                price={totalPrice}  
                                                disabled={disabled}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export async function getServerSideProps(context) {
    const { luan_token } = parseCookies(context);
    // console.log(luan_token)
    if(!luan_token){
        return{
            redirect: {
                permanent: false,
                destination: '/authentication'
            }
        }
    }

    return {
        props: {}, // will be passed to the page component as props
    }
}

export default Checkout;
