import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Wishlist = ({ user }) => {
    return (
        <>
            <Navbar user={user} />
            
            <PageTitle
                pageTitle="Wishlist" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Wishlist"
            />

            <div className="wishlist-area ptb-100">
                <div className="container">
                    <form>
                        <div className="wishlist-table table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Stock Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="product-thumbnail">
                                            <Link href="#">
                                                <a><img src="/images/products/products4.jpg" alt="item" /></a>
                                            </Link>
                                        </td>

                                        <td className="product-name">
                                            <Link href="#">
                                                <a>Ergonomic Desk Sofa</a>
                                            </Link>
                                        </td>

                                        <td className="product-price">
                                            <span className="unit-amount">$150.00</span>
                                        </td>

                                        <td className="product-stock-status">
                                            <span className="in-stock">
                                                <i className="fas fa-check-circle"></i> In Stock
                                            </span>
                                        </td>

                                        <td className="product-subtotal">
                                            <Link href="/cart">
                                                <a className="default-btn">
                                                    <i className="fas fa-shopping-bag"></i> ADD TO CART
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a className="remove ms-4">
                                                    <i className="far fa-trash-alt"></i>
                                                </a>
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="product-thumbnail">
                                            <Link href="#">
                                                <a><img src="/images/products/products5.jpg" alt="item" /></a>
                                            </Link>
                                        </td>

                                        <td className="product-name">
                                            <Link href="#">
                                                <a>Office Desk Sofa</a>
                                            </Link>
                                        </td>

                                        <td className="product-price">
                                            <span className="unit-amount">$199.00</span>
                                        </td>

                                        <td className="product-stock-status">
                                            <span className="in-stock">
                                                <i className="fas fa-check-circle"></i> In Stock
                                            </span>
                                        </td>

                                        <td className="product-subtotal">
                                            <Link href="/cart">
                                                <a className="default-btn">
                                                    <i className="fas fa-shopping-bag"></i> ADD TO CART
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a className="remove ms-4">
                                                    <i className="far fa-trash-alt"></i>
                                                </a>
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="product-thumbnail">
                                            <Link href="#">
                                                <a><img src="/images/products/products6.jpg" alt="item" /></a>
                                            </Link>
                                        </td>

                                        <td className="product-name">
                                            <Link href="#">
                                                <a>Swivel Sofa</a>
                                            </Link>
                                        </td>

                                        <td className="product-price">
                                            <span className="unit-amount">$233.99</span>
                                        </td>

                                        <td className="product-stock-status">
                                            <span className="in-stock">
                                                <i className="fas fa-check-circle"></i> In Stock
                                            </span>
                                        </td>

                                        <td className="product-subtotal">
                                            <Link href="/cart">
                                                <a className="default-btn">
                                                    <i className="fas fa-shopping-bag"></i> ADD TO CART
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a className="remove ms-4">
                                                    <i className="far fa-trash-alt"></i>
                                                </a>
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="product-thumbnail">
                                            <Link href="#">
                                                <a><img src="/images/products/products7.jpg" alt="item" /></a>
                                            </Link>
                                        </td>

                                        <td className="product-name">
                                            <Link href="#">
                                                <a>Home Alisa Sofa</a>
                                            </Link>
                                        </td>

                                        <td className="product-price">
                                            <span className="unit-amount">$223.00</span>
                                        </td>

                                        <td className="product-stock-status">
                                            <span className="out-stock">
                                                <i className="fas fa-times"></i> Out of Stock
                                            </span>
                                        </td>

                                        <td className="product-subtotal">
                                            <Link href="/cart">
                                                <a className="default-btn">
                                                    <i className="fas fa-shopping-bag"></i> ADD TO CART
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a className="remove ms-4">
                                                    <i className="far fa-trash-alt"></i>
                                                </a>
                                            </Link>
                                        </td>
                                    </tr>

                                    {/* Empty row
                                    <tr>
                                        <td colspan="5"><div className="empty">Empty</div></td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        
            <Footer />
        </>
    )
}

export default Wishlist;