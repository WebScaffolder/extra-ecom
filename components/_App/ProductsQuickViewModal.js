import React from 'react';

const ProductsQuickViewModal = () => {
    return (
        <>
            <div className="modal fade productsQuickView" id="productsQuickView">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className='bx bx-x'></i></span>
                        </button>

                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="products-image">
                                    <img src="/images/products/products1.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="products-content">
                                    <h3>Rivet Farr Lotus</h3>
                                    <div className="price">
                                        <span className="new-price">$150.00</span>
                                    </div>
                                    <div className="products-review">
                                        <div className="rating">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                        </div>
                                        <Link href="#">
                                            <a className="rating-count">3 reviews</a>
                                        </Link>
                                    </div>
                                    <p>Nemo malesuada animi consectetur, cras consectetuer laborum tenetur, cum, lacus nemo imperdiet facilisis! Aute metus, lorem primis anim. Eros dolorem.</p>

                                    <ul className="products-info">
                                        <li>
                                            <span>Vendor:</span> 
                                            <Link href="#">
                                                <a>Lereve</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <span>Availability:</span> 
                                            <Link href="#">
                                                <a>In stock (7 items)</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <span>Products Type:</span> 
                                            <Link href="#">
                                                <a>Chair</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <span>Categories:</span> 
                                            <Link href="#">
                                                <a>Chair</a>
                                            </Link>
                                        </li>
                                    </ul>

                                    <div className="products-add-to-cart">
                                        <div className="input-counter">
                                            <span className="minus-btn">
                                                <i className='bx bx-minus'></i>
                                            </span>
                                            <input 
                                                type="text" 
                                                value="1" 
                                                min="1" 
                                            />
                                            <span className="plus-btn">
                                                <i className='bx bx-plus'></i>
                                            </span>
                                        </div>
                                        <button type="submit" className="default-btn">
                                            <i className='bx bx-cart'></i> ADD TO CART
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsQuickViewModal;