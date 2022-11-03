import React from 'react';
import Link from '../../utils/ActiveLink';
import { useSelector } from 'react-redux';
import { handleLogout } from '../../utils/auth';

const Navbar = ({ user }) => {
    const productBucket = useSelector((state) => state.productBucket);
    const [menu, setMenu] = React.useState(true);

    const toggleNavbar = () => {
        setMenu(!menu);
    };

    React.useEffect(() => {
        let elementId = document.getElementById('navbar');
            document.addEventListener('scroll', () => {
            if (window.scrollY > 170) {
                elementId.classList.add('is-sticky');
            } else {
                elementId.classList.remove('is-sticky');
            }
        });
    });

    const classOne = menu
        ? 'collapse navbar-collapse'
        : 'collapse navbar-collapse show';
    const classTwo = menu
        ? 'navbar-toggler navbar-toggler-right collapsed'
        : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id='navbar' className='navbar-area'>
                <div className='main-nav'>
                    <div className='container-fluid'>
                        <nav className='navbar navbar-expand-lg navbar-light'>
                            <Link href='/'>
                                <a onClick={toggleNavbar} className='navbar-brand'>
                                    <img src='/images/logo.png' alt='logo' />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type='button'
                                data-toggle='collapse'
                                data-target='#navbarSupportedContent'
                                aria-controls='navbarSupportedContent'
                                aria-expanded='false'
                                aria-label='Toggle navigation'
                            >
                                <span className='icon-bar top-bar'></span>
                                <span className='icon-bar middle-bar'></span>
                                <span className='icon-bar bottom-bar'></span>
                            </button>

                            <div className={classOne} id='navbarSupportedContent'>
                                <ul className='navbar-nav'>
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a 
                                                onClick={e => e.preventDefault()} 
                                                className="dropdown-toggle nav-link"
                                            >
                                                HOME
                                            </a>
                                        </Link> 

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home Demo - One</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home Demo - Two</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-3" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home Demo - Three</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <Link href="#">
                                            <a 
                                                onClick={e => e.preventDefault()} 
                                                className="dropdown-toggle nav-link"
                                            >
                                                SHOP
                                            </a>
                                        </Link> 

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="row">
                                                    <div className="col">
                                                        <h6 className="submenu-title">SHOP</h6>
                                                        <ul className="megamenu-submenu">
                                                            <li>
                                                                <Link href="/shop-full-width-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Full Width Style 01</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-full-width-2" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Full Width Style 02</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-left-sidebar-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Shop Left Sidebar Style 01</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-right-sidebar-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Shop Right Sidebar Style 01</a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col">
                                                        <h6 className="submenu-title">SHOP INFO</h6>
                                                        <ul className="megamenu-submenu">
                                                            {!user && (
                                                                <li>
                                                                    <Link href="/authentication" activeClassName="active">
                                                                        <a onClick={toggleNavbar}>My Account</a>
                                                                    </Link>
                                                                </li>
                                                            )}
                                                            <li>
                                                                <Link href="/order-tracking" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Order Tracking</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/cart" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Cart</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/checkout" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Checkout</a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li> 
                                        </ul>
                                    </li>
 
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a 
                                                onClick={e => e.preventDefault()} 
                                                className="dropdown-toggle nav-link"
                                            >
                                                PAGES
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/about" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">About Us</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/feedback" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Feedback</a>
                                                </Link>
                                            </li>
 
                                            <li className="nav-item">
                                                <Link href="#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Gallery <i className="fas fa-chevron-right"></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/gallery-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Gallery Two Column</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/gallery-2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Gallery Three Column</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/gallery-3" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Gallery Four Column</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            {!user && (
                                                <li className='nav-item'>
                                                    <Link href='/authentication' activeClassName='active'>
                                                        <a onClick={toggleNavbar} className='nav-link'>
                                                            My Account
                                                        </a>
                                                    </Link>
                                                </li>
                                            )}
    
                                            <li className="nav-item">
                                                <Link href="/order-tracking" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Order Tracking</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">FAQ's</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/delivery-returns" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Delivery Returns Policy</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/shipping" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Shipping Policy</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Privacy Policy</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/terms-conditions" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Terms & Conditions</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/404" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">404 Error Page</a>
                                                </Link>
                                            </li>
 
                                            <li className="nav-item">
                                                <Link href="/coming-soon" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Coming Soon</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <Link href="#">
                                            <a 
                                                onClick={e => e.preventDefault()} 
                                                className="dropdown-toggle nav-link"
                                            >
                                                MEN
                                            </a>
                                        </Link> 

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="row">
                                                    <div className="col">
                                                        <h6 className="submenu-title">SHOP BY</h6>
                                                        <ul className="megamenu-submenu">
                                                            <li>
                                                                <Link href="/shop-full-width-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>New in</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-full-width-2" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Hot Sale</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-full-width-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Clothing</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-full-width-2" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Shoe</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-full-width-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Bag</a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col">
                                                        <h6 className="submenu-title">COLLECTIONS</h6>
                                                        <ul className="megamenu-submenu">
                                                            <li>
                                                                <Link href="/shop-full-width-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Committed</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-full-width-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>2021 beachwear</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-full-width-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Office looks</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-full-width-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Leather and more</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-full-width-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Denim</a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li> 
                                        </ul>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <Link href="#">
                                            <a 
                                                onClick={e => e.preventDefault()} 
                                                className="dropdown-toggle nav-link"
                                            >
                                                WOMEN
                                            </a>
                                        </Link> 

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="row">
                                                    <div className="col">
                                                        <h6 className="submenu-title">SHOP BY</h6>
                                                        <ul className="megamenu-submenu">
                                                            <li>
                                                                <Link href="/shop-full-width-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>New in</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-full-width-2" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Hot Sale</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-full-width-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Clothing</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-full-width-2" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Shoe</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-full-width-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Bag</a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col">
                                                        <h6 className="submenu-title">COLLECTIONS</h6>
                                                        <ul className="megamenu-submenu">
                                                            <li>
                                                                <Link href="/shop-full-width-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Committed</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-full-width-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>2021 beachwear</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-full-width-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Office looks</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-full-width-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Leather and more</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop-full-width-1" activeClassName="active">
                                                                    <a onClick={toggleNavbar}>Denim</a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li> 
                                        </ul>
                                    </li>
 
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                BLOG
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/blog" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Grid</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-left-sidebar" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Left Sidebar</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-right-sidebar" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Right Sidebar</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">CONTACT</a>
                                        </Link>
                                    </li>

                                    {user && user.role === 'admin'&& (
                                        <li className='nav-item'>
                                            <Link href='#'>
                                                <a
                                                    onClick={(e) => e.preventDefault()}
                                                    className='nav-link dropdown-toggle text-uppercase'
                                                >
                                                    {user.name}
                                                </a>
                                            </Link>

                                            <ul className='dropdown-menu'>
                                                <li className='nav-item'>
                                                    <Link href='/product/create' activeClassName='active'>
                                                        <a onClick={toggleNavbar} className='nav-link'>
                                                            Create Product
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className='nav-item'>
                                                    <Link href='/admin/dashboard' activeClassName='active'>
                                                        <a onClick={toggleNavbar} className='nav-link'>
                                                            All Products
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className='nav-item'>
                                                    <Link href='/admin/orders' activeClassName='active'>
                                                        <a onClick={toggleNavbar} className='nav-link'>
                                                            Orders
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className='nav-item'>
                                                    <Link href='#' activeClassName='active'>
                                                        <a
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleLogout();
                                                            }}
                                                            className='nav-link'
                                                        >
                                                            Logout
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    )}

                                    {user && user.role === 'customer'&& (
                                        <li className='nav-item'>
                                            <Link href='#'>
                                                <a
                                                    onClick={(e) => e.preventDefault()}
                                                    className='nav-link dropdown-toggle text-uppercase'
                                                >
                                                    {user.name}
                                                </a>
                                            </Link>

                                            <ul className='dropdown-menu'>
                                                <li className='nav-item'>
                                                    <Link href='/my-profile' activeClassName='active'>
                                                        <a onClick={toggleNavbar} className='nav-link'>
                                                            My Profile
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className='nav-item'>
                                                    <Link href='/admin/orders/my-orders' activeClassName='active'>
                                                        <a onClick={toggleNavbar} className='nav-link'>
                                                            My Orders
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className='nav-item'>
                                                    <Link href='#' activeClassName='active'>
                                                        <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleLogout();
                                                        }}
                                                            className='nav-link'
                                                        >
                                                            Logout
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    )}
                                </ul>
                            </div>

                            <div className="others-option d-flex align-items-center">
                                <div className="option-item">
                                    <div className="search-box">
                                        <form onSubmit={e => e.preventDefault()}>
                                            <input 
                                                type="text" 
                                                className="input-search" 
                                                placeholder="Search for products" 
                                            />
                                            <button type="submit">
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                
                                {!user && (
                                    <div className="option-item">
                                        <Link href="/authentication">
                                            <a className="user-account">
                                                <i className="far fa-user"></i>
                                            </a>
                                        </Link>
                                    </div>
                                )}

                                {user && user.role === 'admin'&& (
                                    <div className="option-item">
                                        <Link href="#">
                                            <a 
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleLogout();
                                                }}
                                                className="user-account" 
                                                title="Logout"
                                            >
                                                <i className="fas fa-sign-out-alt"></i>
                                            </a>
                                        </Link>
                                    </div>
                                )}

                                {user && user.role === 'customer'&& (
                                    <div className="option-item">
                                        <Link href="#">
                                            <a 
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleLogout();
                                                }}
                                                className="user-account" 
                                                title="Logout"
                                            >
                                                <i className="fas fa-sign-out-alt"></i>
                                            </a>
                                        </Link>
                                    </div>
                                )}

                                <div className="option-item">
                                    <Link href="#">
                                        <a className="wishlist-btn">
                                            <i className="far fa-heart"></i>
                                            <span>03</span>
                                        </a>
                                    </Link>
                                </div>

                                <div className="option-item">
                                    <Link href="/cart">
                                        <a className="cart-btn">
                                            <i className="fas fa-shopping-cart"></i>
                                            <span>{productBucket.length}</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
