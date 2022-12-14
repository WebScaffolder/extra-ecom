import React from 'react'
import { Alert, Spinner } from 'react-bootstrap';
import axios from 'axios'
import Link from 'next/link'
import catchErrors from '../../utils/catchErrors'
import baseUrl from '../../utils/baseUrl'
import { handleLogin } from '../../utils/auth'

const INITIAL_USER = {
    email: '',
    password: ''
}

const LoginForm = () => {
    const [user, setUser] = React.useState(INITIAL_USER)
    const [disabled, setDisabled] = React.useState(true)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')
    const onDismiss = () => setError(false)

    React.useEffect(() => {
        const isUser = Object.values(user).every(el => Boolean(el))
        isUser ? setDisabled(false) : setDisabled(true)
    }, [user])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            setLoading(true);
            setError('');
            const url = `${baseUrl}/api/v1/auth/signin`;
            const payload = {...user};
            const response = await axios.post(url, payload);
            handleLogin(response.data);
        } catch (error) {
            catchErrors(error, setError);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="login-form">
                <h2>Login</h2>
                
                <Alert
                    variant='danger'
                    show={error ? true : false}
                    onClose={onDismiss} 
                    dismissible
                >
                    {error}
                </Alert>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            className="form-control" 
                            placeholder="Email" 
                            name="email"
                            type="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            className="form-control" 
                            placeholder="Password" 
                            name="password"
                            type="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="row align-items-center">
                        <div className="col-6 remember-me-wrap">
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    id="remember-me" 
                                />
                                <label className="form-check-label" htmlFor="remember-me">Remember me</label>
                            </div>
                        </div>

                        <div className="col-6 lost-your-password-wrap">
                            <Link href="#">
                                <a className="lost-your-password">Lost your password?</a>
                            </Link>
                        </div>
                    </div>

                    <button type="submit" disabled={disabled}>
                        Login {loading ? <Spinner color="success" /> : ''}
                    </button>
                </form>
            </div>
        </>
    )
}

export default LoginForm;