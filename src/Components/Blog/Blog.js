import React, { useEffect } from 'react'
import "./Blog.css"
import { FaSnowflake } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import BlogData from './BlogData';

const Blog = ({ title, descriptions }) => {
    const location = useLocation();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    useEffect(() => {
        document.title = `${title}`;

        // Update the canonical URL based on the current location
        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        const canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        }

        // Update the description meta tag
        const description = `${descriptions}`;
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            // If the description meta tag doesn't exist, create it
            const newMeta = document.createElement("meta");
            newMeta.setAttribute("name", "description");
            newMeta.setAttribute("content", description);
            document.head.appendChild(newMeta);
        }
    }, [title, location]);

    const formatPathname = (pathname) => {
        return pathname.toLowerCase().replace(/\s+/g, '-');
    };

    return (
        <div className='blog'>
            <div className="blog-box">
                <div className="blog-body">
                    <div className="blog-head">
                        <h1>Blogs</h1>
                        <div className="blog-icon">
                            <span>
                                <div className="seperator">
                                    <FaSnowflake />
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-box2">
                <div className="blog-body">
                    <h4>Recent Publishes</h4>
                    <div className="blog-overview">
                        <div className="blog-body-left">
                            <div className="blog-body-image">
                                <Link to={{
                                    pathname: `/blogs/${formatPathname(BlogData[BlogData.length - 1].pathName)}/`
                                }} onClick={scrollToTop} >
                                    <img src={BlogData[BlogData.length - 1].cover} alt={BlogData[BlogData.length - 1].alt} />
                                </Link>
                            </div>
                            <div className="blog-body-detail">
                                <h3>{BlogData[BlogData.length - 1].title}</h3>
                                <h6>{BlogData[BlogData.length - 1].date}</h6>
                                <p>{BlogData[BlogData.length - 1].desc}</p>
                                <div className="body-left-button">
                                    <Link to={{
                                        pathname: `/blogs/${formatPathname(BlogData[BlogData.length - 1].pathName)}/`
                                    }} onClick={scrollToTop}>View More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="blog-body-right">
                            <div className="blog-right-items">
                                {BlogData.slice().reverse().map((item) => (
                                    <div className="blogs-items-card" key={item.pathName}>
                                        <Link to={{
                                            pathname: `/blogs/${formatPathname(item.pathName)}/`
                                        }} onClick={scrollToTop}>
                                            <img src={item.cover} alt={item.alttag} />
                                            <div className="blog-card-desc">
                                                <h6>{item.title}</h6>
                                                <p>{item.date}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
