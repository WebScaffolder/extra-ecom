import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ProductsDetailsTabs = ({long_description, additional_info}) => {
    return (
        <div className="products-details-tabs">
            <Tabs>
                <TabList>
                    <Tab>Description</Tab>
                    <Tab>Additional information</Tab>
                    <Tab>Reviews (4)</Tab>
                </TabList>
            
                <TabPanel>
                    <div 
                        dangerouslySetInnerHTML={{ __html: long_description}} 
                    />
                </TabPanel>

                <TabPanel>
                    <div 
                        className="table-responsive" 
                        dangerouslySetInnerHTML={{ __html: additional_info }} 
                    /> 
                </TabPanel>

                <TabPanel>
                    <div className="products-review-comments">
                        <div className="user-review">
                            <img 
                                src="/images/user/user1.jpg" 
                                alt="image" 
                            />
                            <div className="review-rating">
                                <div className="review-stars">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <span className="d-inline-block">James Anderson</span>
                            </div>
                            <span className="d-block sub-comment">Excellent</span>
                            <p>Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.</p>
                        </div>

                        <div className="user-review">
                            <img 
                                src="/images/user/user2.jpg" 
                                alt="image" 
                            />
                            <div className="review-rating">
                                <div className="review-stars">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <span className="d-inline-block">Sarah Taylor</span>
                            </div>
                            <span className="d-block sub-comment">Video Quality!</span>
                            <p>Was really easy to implement and they quickly answer my additional questions!</p>
                        </div>

                        <div className="user-review">
                            <img 
                                src="/images/user/user3.jpg" 
                                alt="image" 
                            />
                            <div className="review-rating">
                                <div className="review-stars">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <span className="d-inline-block">David Warner</span>
                            </div>
                            <span className="d-block sub-comment">Perfect Coding!</span>
                            <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                        </div>

                        <div className="user-review">
                            <img 
                                src="/images/user/user4.jpg" 
                                alt="image" 
                            />
                            <div className="review-rating">
                                <div className="review-stars">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <span className="d-inline-block">King Kong</span>
                            </div>
                            <span className="d-block sub-comment">Perfect Video!</span>
                            <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                        </div>
                    </div>

                    <div className="review-form-wrapper">
                        <h3>Add a review</h3>
                        <p className="comment-notes">Your email address will not be published. Required fields are marked <span>*</span></p>

                        <form onSubmit={e => e.preventDefault()}>
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="rating">
                                        <input 
                                            type="radio" 
                                            id="star5" 
                                            name="rating" 
                                            value="5" 
                                        />
                                        <label htmlFor="star5"></label>
                                        <input 
                                            type="radio" 
                                            id="star4" 
                                            name="rating" 
                                            value="4" 
                                        />
                                        <label htmlFor="star4"></label>
                                        <input 
                                            type="radio" 
                                            id="star3" 
                                            name="rating" 
                                            value="3" 
                                        />
                                        <label htmlFor="star3"></label>
                                        <input 
                                            type="radio" 
                                            id="star2" 
                                            name="rating" 
                                            value="2" 
                                        />
                                        <label htmlFor="star2"></label>
                                        <input 
                                            type="radio" 
                                            id="star1" 
                                            name="rating" 
                                            value="1" 
                                        />
                                        <label htmlFor="star1"></label>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Name *" 
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            placeholder="Email *" 
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea 
                                            placeholder="Your review" 
                                            className="form-control" 
                                            cols="30" 
                                            rows="6"
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <p className="comment-form-cookies-consent">
                                        <input 
                                            type="checkbox" 
                                            id="test1" 
                                        />
                                        <label htmlFor="test1">Save my name, email, and website in this browser for the next time I comment.</label>
                                    </p>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <button type="submit">SUBMIT</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ProductsDetailsTabs;