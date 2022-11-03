import React from 'react';
import Link from 'next/link';

const TopHeader = () => {
    return (
        <>
            <div className="top-header-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>Free Delivery Over $35 to Most of USA*</p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="top-header-info">
                                <div className="d-flex align-items-center justify-content-end">
                                    <ul className="social-links">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="fab fa-pinterest-p"></i>
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="language-switcher" id="language-switcher">
                                        <span>Language</span>
                                        <ul className="drop">
                                            <li>
                                                <Link href="#">
                                                    <a className='active'>English - EN</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>عربى - AR</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>中国人 - ZH</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>Deutsch - DE</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>rעברית - HE</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>Español - ES</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="currency-switcher" id="currency-switcher">
                                        <span>Currency</span>
                                        <ul className="drop">
                                            <li>
                                                <Link href="#">
                                                    <a className='active'>$USD</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>€EUR</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>$FJD</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>£FKP</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>£GBP</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopHeader;