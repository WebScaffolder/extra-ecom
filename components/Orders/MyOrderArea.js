import { useState, useEffect } from 'react';
import baseUrl from '../../utils/baseUrl';
import formatDate from "../../utils/formatDate";
import { parseCookies } from 'nookies';
import axios from 'axios';

const MyOrderArea = () => {
    const { luan_token } = parseCookies();
    const [orders, setOrders] = useState([]);

    const payload = { headers: { Authorization: luan_token } };
    const url = `${baseUrl}/api/v1/orders/myorders`;

    useEffect(() => {
        let isSubscribed = true;

        const fetchOrder = async () => {
            const response = await axios.get(url, payload);
            // console.log(response.data);
            setOrders(response.data);
        };
        fetchOrder();
        
        // cancel subscription to useEffect
        return () => (isSubscribed = false);
    }, []);

    return (
        <>
            <div className="container">
                <div className="table-responsive">
                    <table className='table table-striped table-p15 fs-15 align-middle'>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {orders && orders.length > 0 ? orders.map((order, i) => (
                                <>
                                    <tr key={i}>
                                        <td>
                                            {order.name}
                                        </td>

                                        <td>
                                            {order.address}
                                        </td>

                                        <td>
                                            {order.email}
                                        </td>

                                        <td>
                                            {order.phone}
                                        </td>
                                         
                                        <td>
                                            {formatDate(order.createdAt)}
                                        </td>

                                        <td>
                                            ${order.totalPrice}
                                        </td>

                                        <td>
                                            <div
                                                className={
                                                    order.isDelivered === false
                                                    ? 'badge bg-warning text-dark fw-normal'
                                                    : 'badge bg-success fw-normal'
                                                }
                                                type='button'
                                            >
                                                {order.isDelivered === false
                                                ? 'Pending'
                                                : 'Confirmed'}
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td colSpan="7">
                                            <table className="table table-hover table-p15 fs-15 align-middle">
                                                <thead>
                                                    <tr>
                                                        <th>Image</th>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {order.ordersItem.map(item => (
                                                        <tr key={item.id}>
                                                            <td>
                                                                <img 
                                                                    src={item.img_url} 
                                                                    alt="Product Image" 
                                                                    width="40"
                                                                />
                                                            </td>
                                                            <td>
                                                                {item.title} : {item.quantity}
                                                            </td>
                                                            <td>
                                                                {item.price} x {item.quantity}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </>
                            )): <tr className="empty-tr">
                                    <td colSpan="7">No Order</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MyOrderArea;
