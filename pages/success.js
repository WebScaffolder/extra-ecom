import React from 'react';
import SubscribeForm from '../components/Common/SubscribeForm';

const Success = () => {
    return (
        <>
            <div className='ptb-100'>
                <div className="container">
                    <div className="success-message text-center">
                        <h3 className="mb-4">Your order successfully created! Thank You :)</h3>
                        
                        <a href="/" className="default-btn">
                            <i className="fa fa-home"></i>
                            Got To Home
                        </a>
                    </div>
                </div>
            </div>
 
            <SubscribeForm />
        </>
    )
}

export default Success;