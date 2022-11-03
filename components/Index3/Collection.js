import React from 'react';
import Link from 'next/link';

const Collection = () => {
    return (
        <>
            <div className="collection-area pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="collection-box">
                                <img 
                                    src="/images/collection/collection9.jpg" 
                                    alt="collection-image" 
                                />
                                <div className="content">
                                    <span>Top Collection</span>
                                    <h3>SHOP WOMANS</h3>
                                    <Link href="/shop-right-sidebar-1">
                                        <a className="link-btn">
                                            <i className="fas fa-store"></i> SHOP NOW
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="collections-list">
                                <div className="collection-box">
                                    <img 
                                        src="/images/collection/collection10.jpg" 
                                        alt="collection-image" 
                                    />
                                    <div className="content style-two">
                                        <span>New Arrival</span>
                                        <h3>ACCESSORIES</h3>
                                        <Link href="/shop-right-sidebar-1">
                                            <a className="link-btn">
                                                <i className="fas fa-store"></i> SHOP NOW
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="collection-box">
                                    <img 
                                        src="/images/collection/collection11.jpg" 
                                        alt="collection-image" 
                                    />
                                    <div className="content style-three">
                                        <span>New Arrival</span>
                                        <h3>SUMMER DRESS</h3>
                                        <Link href="/shop-right-sidebar-1">
                                            <a className="link-btn">
                                                <i className="fas fa-store"></i> SHOP NOW
                                            </a>
                                        </Link>
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

export default Collection;
