import { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { handleLogin } from '../../utils/auth';
import axios from 'axios';
import catchErrors from '../../utils/catchErrors';
import baseUrl from '../../utils/baseUrl';

const INITIAL_USER = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const RegisterForm = () => {
    const [user, setUser] = useState(INITIAL_USER);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const onDismiss = () => setError(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
            try {
            setLoading(true);
            const url = `${baseUrl}/api/v1/auth/signup`;
            const payload = { ...user };
            const response = await axios.post(url, payload);
            handleLogin(response.data);
            setLoading(false);
        } catch (error) {
            catchErrors(error, setError);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="register-form">
                <h2>Register</h2>

                {error ? (
                    <Alert
                        variant='danger'
                        show={error ? true : false}
                        onClose={onDismiss} 
                        dismissible
                    >
                        {error}
                    </Alert>
                ) : (
                ''
                )}

                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Name</label>
                        <input
                            type='text'
                            className='form-control' 
                            placeholder="Name" 
                            id='fname'
                            name='name'
                            value={user.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Email</label>
                        <input
                            type='email'
                            className='form-control' 
                            placeholder="Email" 
                            id='name'
                            name='email'
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className="row">
                        <div className='form-group col-6'>
                            <label>Password</label>
                            <input
                                type='password'
                                className='form-control' 
                                placeholder="Password" 
                                id='password'
                                name='password'
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group col-6">
                            <label>Confirm Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Confirm Password" 
                                name="confirmPassword"
                                value={user.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <p className="description">The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )</p>

                    <button type='submit' className='default-btn'>
                        Register
                        {loading ? (
                            <Spinner
                                color='success'
                                className='product-spinner ms-1'
                                animation='border'
                                size='sm'
                            />
                        ) : (
                        ''
                        )}
                    </button>
                </form>
            </div>
        </>
    );
};

export default RegisterForm;