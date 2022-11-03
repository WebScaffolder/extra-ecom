import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
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

                <div className="widget widget_author">
                    <img 
                        src="/images/team/team1.jpg" 
                        alt="author" 
                    />
                    <h3>Sarah Taylor</h3>
                    <span>Blogger</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    <img 
                        src="/images/signature.png" 
                        alt="signature" 
                    />
                </div>

                <div className="widget widget_follow_us">
                    <h3 className="widget-title"><span>Follow Us</span></h3>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank">Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/" target="_blank">Twitter</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank">Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.pinterest.com/" target="_blank">Pinterest</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/" target="_blank">Linkedin</a>
                        </li>
                    </ul>
                </div>

                <div className="widget widget_dravo_posts_thumb">
                    <h3 className="widget-title"><span>Popular Posts</span></h3>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <img src="/images/blog/blog1.jpg" alt="blog-image" />
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title">
                                <Link href="/blog-details">
                                    <a>Being the best-selling smart phone this year</a>
                                </Link>
                            </h4>
                            <span className="date">Jan 15, 2020</span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <img src="/images/blog/blog2.jpg" alt="blog-image" />
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title">
                                <Link href="/blog-details">
                                    <a>Love songs helped me through heartbreak</a>
                                </Link>
                            </h4>
                            <span className="date">Jan 14, 2020</span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <img src="/images/blog/blog3.jpg" alt="blog-image" />
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title">
                                <Link href="/blog-details">
                                    <a>Two fashion designers busy with 2020 winter fashion</a>
                                </Link>
                            </h4>
                            <span className="date">Jan 13, 2020</span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <img src="/images/blog/blog4.jpg" alt="blog-image" />
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title">
                                <Link href="/blog-details">
                                    <a>Working in the office is a tradition for women</a>
                                </Link>
                            </h4>
                            <span className="date">Jan 12, 2020</span>
                        </div>
                    </article>
                </div>

                <div className="widget widget_categories">
                    <h3 className="widget-title"><span>Categories</span></h3>
                    <ul>
                        <li>
                            <Link href="/categories">
                                <a>Business</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories">
                                <a>Privacy</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories">
                                <a>Technology</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories">
                                <a>Tips</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories">
                                <a>Log in</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories">
                                <a>Uncategorized</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="widget widget_tag_cloud">
                    <h3 className="widget-title"><span>Tags</span></h3>
                    <div className="tagcloud">
                        <Link href="/categories">
                            <a>Advertisment</a>
                        </Link>

                        <Link href="/categories">
                            <a>Business</a>
                        </Link>

                        <Link href="/categories">
                            <a>Life</a>
                        </Link>

                        <Link href="/categories">
                            <a>Lifestyle</a>
                        </Link>

                        <Link href="/categories">
                            <a>Fashion</a>
                        </Link>

                        <Link href="/categories">
                            <a>Ads</a>
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default BlogSidebar;