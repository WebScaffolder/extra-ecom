import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import Footer from '../components/_App/Footer';
import LoginForm from '../components/Authentication/LoginForm';
import RegisterForm from '../components/Authentication/RegisterForm';

const ProfileAuthentication = ({ user }) => {
    return (
        <>
            <Navbar user={user} />
            
            <PageTitle
                pageTitle="My Account" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="My Account"
            />

            <div className="profile-authentication-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <LoginForm />
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </div>
  
            <Footer />
        </>
    )
}

export default ProfileAuthentication;