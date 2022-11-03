import React from 'react';
import Link from 'next/link'

const BlogGrid = () => {
    return (
        <>
            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog1.jpg" alt="blog-image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <Link href="/categories">
                                                <a>FASHION</a>
                                            </Link>
                                        </li>
                                        <li>15TH JUNE, 2021</li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>The who what wear summer guide is here Girl thing to know</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog2.jpg" alt="blog-image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <Link href="/categories">
                                                <a>LIFESTYLE</a>
                                            </Link>
                                        </li>
                                        <li>14TH JUNE, 2021</li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>The Luan 33 of this week's best new arrivals for summer</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog3.jpg" alt="blog-image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <Link href="/categories">
                                                <a>DESIGN</a>
                                            </Link>
                                        </li>
                                        <li>13TH JUNE, 2021</li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>How to sell Menswear to Women and Womenswear to Men</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog4.jpg" alt="blog-image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <Link href="/categories">
                                                <a>FASHION</a>
                                            </Link>
                                        </li>
                                        <li>15TH JUNE, 2021</li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>8 outdated summer accessories and 8 that are so trendy</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog5.jpg" alt="blog-image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <Link href="/categories">
                                                <a>LIFESTYLE</a>
                                            </Link>
                                        </li>
                                        <li>14TH JUNE, 2021</li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>10 going-out outfits that would be perfect for a house party</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog6.jpg" alt="blog-image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <Link href="/categories">
                                                <a>DESIGN</a>
                                            </Link>
                                        </li>
                                        <li>13TH JUNE, 2021</li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>The controversial swimming trend I'm so into right now</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <div className="nav-links">
                                    <a href="/blog" className="previous page-numbers" title="Next Page">
                                        <i className="fas fa-arrow-left"></i>
                                    </a>
                                    <span className="page-numbers current">1</span>
                                    <a href="/blog" className="page-numbers">2</a>
                                    <a href="/blog" className="page-numbers">3</a>
                                    <a href="/blog" className="next page-numbers" title="Next Page">
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="circle-shape">
                    <img src="/images/circle.png" alt="shape" />
                </div>
            </div>
        </>
    );
}

export default BlogGrid;