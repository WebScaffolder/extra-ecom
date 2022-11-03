import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <>
            <aside className="widget-area">
                <div className="widget widget_search">
                    <form className="search-form">
                        <input 
                            type="search" 
                            className="search-field" 
                            placeholder="Search..." 
                        />
                        <button type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>

                <div className="widget widget_categories">
                    <h3 className="widget-title"><span>Categories</span></h3>
                    <ul>
                        <li>
                            <Link href="#">
                                <a>Accessories</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Men</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Women</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Shoe</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Bag</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Denim</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="widget widget_colors">
                    <h3 className="widget-title"><span>Filter By Color</span></h3>
                    <ul>
                        <li>
                            <Link href="#">
                                <a>
                                    <span className="gray">Gray</span>
                                    <span>Gray</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <span className="green">Green</span>
                                    <span>Green</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <span className="red">Red</span>
                                    <span>Red</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <span className="black">Black</span>
                                    <span>Black</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <span className="brown">Brown</span>
                                    <span>Brown</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="widget widget_dravo_posts_thumb">
                    <h3 className="widget-title"><span>Our Best Sellers</span></h3>
                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <img 
                                    src="/images/products/products1.jpg" 
                                    alt="blog-image" 
                                />
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title">
                                <Link href="#">
                                    <a>Cheeky woman leather jacket</a>
                                </Link>
                            </h4>
                            <div className="star-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <span className="price">$150.00</span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <img 
                                    src="/images/products/products2.jpg" 
                                    alt="blog-image" 
                                />
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title">
                                <Link href="#">
                                    <a>Comfort man black hoodie</a>
                                </Link>
                            </h4>
                            <div className="star-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <span className="price">$150.00</span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <img 
                                    src="/images/products/products3.jpg" 
                                    alt="blog-image" 
                                />
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title">
                                <Link href="#">
                                    <a>Trendy woman black blazer</a>
                                </Link>
                            </h4>
                            <div className="star-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <span className="price">$150.00</span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <img 
                                    src="/images/products/products4.jpg" 
                                    alt="blog-image" 
                                />
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title">
                                <Link href="#">
                                    <a>Arctix womens essential</a>
                                </Link>
                            </h4>
                            <div className="star-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <span className="price">$150.00</span>
                        </div>
                    </article>
                </div>

                <div className="widget widget_follow_us">
                    <h3 className="widget-title"><span>Follow Us</span></h3>
                    <ul>
                        <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                        <li><a href="https://www.twitter.com/" target="_blank">Twitter</a></li>
                        <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                        <li><a href="https://www.pinterest.com/" target="_blank">Pinterest</a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank">Linkedin</a></li>
                    </ul>
                </div>

                <div className="widget widget_tag_cloud">
                    <h3 className="widget-title"><span>Tags</span></h3>
                    <div className="tagcloud">
                        <Link href="#">
                            <a>Advertisment</a>
                        </Link>

                        <Link href="#">
                            <a>Business</a>
                        </Link>

                        <Link href="#">
                            <a>Life</a>
                        </Link>

                        <Link href="#">
                            <a>Lifestyle</a>
                        </Link>

                        <Link href="#">
                            <a>Fashion</a>
                        </Link>

                        <Link href="#">
                            <a>Ads</a>
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;