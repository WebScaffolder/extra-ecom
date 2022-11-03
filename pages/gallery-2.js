import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import SubscribeForm from '../components/Common/SubscribeForm';
import Footer from '../components/_App/Footer';
 
const Gallery = ({ user }) => {
    return (
        <>
            <TopHeader />

            <Navbar user={user} />

            <PageTitle
                pageTitle="Gallery Three Column" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Gallery"
            />

            <div className="gallery-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img 
                                    src="/images/gallery/gallery-img1.jpg" 
                                    alt="image" 
                                />
                                <h3>Jason Smith <span>- Photographer</span></h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img 
                                    src="/images/gallery/gallery-img2.jpg" 
                                    alt="image" 
                                />
                                <h3>Sarah Taylor <span>- Photographer</span></h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img 
                                    src="/images/gallery/gallery-img3.jpg" 
                                    alt="image" 
                                />
                                <h3>David Warner <span>- Photographer</span></h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img 
                                    src="/images/gallery/gallery-img4.jpg" 
                                    alt="image" 
                                />
                                <h3>Joe Root <span>- Photographer</span></h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img 
                                    src="/images/gallery/gallery-img5.jpg" 
                                    alt="image" 
                                />
                                <h3>Amy Jones <span>- Photographer</span></h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img 
                                    src="/images/gallery/gallery-img6.jpg" 
                                    alt="image" 
                                />
                                <h3>Alina Smith <span>- Photographer</span></h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img 
                                    src="/images/gallery/gallery-img7.jpg" 
                                    alt="image" 
                                />
                                <h3>Jason Smith <span>- Photographer</span></h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img 
                                    src="/images/gallery/gallery-img8.jpg" 
                                    alt="image" 
                                />
                                <h3>Sarah Taylor <span>- Photographer</span></h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img 
                                    src="/images/gallery/gallery-img9.jpg" 
                                    alt="image" 
                                />
                                <h3>David Warner <span>- Photographer</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SubscribeForm />

            <Footer />
        </>
    );
}

export default Gallery;