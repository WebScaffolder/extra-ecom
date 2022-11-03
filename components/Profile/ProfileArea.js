import { useState, useEffect } from 'react';
import baseUrl from '../../utils/baseUrl';
import formatDate from "../../utils/formatDate";
import { parseCookies } from 'nookies';
import axios from 'axios';

const ProfileArea = () => {
    const { luan_token } = parseCookies();
    const [user, setUser] = useState([]);

    const payload = { headers: { Authorization: luan_token } };
    const url = `${baseUrl}/api/v1/auth/account`;

    useEffect(() => {
        let isSubscribed = true;

        const fetchOrder = async () => {
            const response = await axios.get(url, payload);
            setUser(response.data);
        };

        fetchOrder();

        // cancel subscription to useEffect
        return () => (isSubscribed = false);
    }, []);

    return (
        <>
            <div className='user-area-wrap ptb-100 container'>
                <h4 className='mb-3'>User Profile</h4>
               
                <div className='table-responsive'>
                    <table className='table table-bordered table-p15'>
                        <tbody>
                            <tr>
                                <th scope='row'>Username:</th>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <th scope='row'>Email:</th>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <th scope='row'>Role:</th>
                                <td>{user.role}</td>
                            </tr>
                            <tr>
                                <th scope='row'>Joining Date:</th>
                                <td>{formatDate(user.createdAt)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ProfileArea;