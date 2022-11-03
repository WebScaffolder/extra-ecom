import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import formatDate from "../../utils/formatDate";

const OrderArea = () => {
    const url = `${baseUrl}/api/v1/orders`;

    const [orders, setOrders] = useState('');

    useEffect(() => {
        let isSubscribed = true;
        const fetchOrder = async () => {
            const response = await axios.get(url);
            setOrders(response.data.orders);
        };
        fetchOrder();

        // cancel subscription to useEffect
        return () => (isSubscribed = false);
    }, []);

    const deliverHandler = async (e) => {
        let id = e.target.id;
        let response = await axios.put(`${baseUrl}/api/v1/orders/delivered/${id}`);
        setOrders(response.data);
    };

    return (
        <>
            <div className='container'>
                <div className='table-responsive'>
                    <table className='table table-striped align-middle table-p15 fs-15'>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Paid</th>
                                <th>Status</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? orders.map((order, i) => (
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
                                            <span className={
                                                order.isDelivered === false
                                                ? 'badge bg-warning text-dark fw-normal order-pending'
                                                : 'badge bg-success fw-normal order-button'
                                            }>
                                                {order.isDelivered === false ? 'Not Paid' : 'Paid'}
                                            </span>
                                        </td>

                                        <td>
                                            <span className={
                                                order.isDelivered === false
                                                ? 'badge bg-warning text-dark fw-normal order-pending'
                                                : 'badge bg-success fw-normal order-button'
                                            }>
                                                {order.isDelivered === false ? 'Pending' : 'Delivered'}
                                            </span>
                                        </td>

                                        <td className='text-center'>
                                            <label className='switch'>
                                                <input
                                                    type='checkbox'
                                                    id={order.id}
                                                    checked={order.isDelivered}
                                                    onChange={deliverHandler}
                                                />
                                                <span className='slider round'></span>
                                            </label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td colSpan="9">
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
                            )):<tr className="empty-tr">
                                <td colSpan="9">No Order!</td>
                            </tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default OrderArea;
