import React, { useEffect } from 'react'
import "./Blog.css"
import { FaSnowflake } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import BlogData from './BlogData';

const Blog = ({ title, descriptions }) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    /* global dataLayer */
    const location = useLocation();

    useEffect(() => {
        document.title = title;

        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        } else {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            canonicalLink.setAttribute("href", canonicalUrl);
            document.head.appendChild(canonicalLink);
        }

        const description = descriptions;
        let metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            metaDescription.setAttribute("content", description);
            document.head.appendChild(metaDescription);
        }

        // Ensure dataLayer is initialized before the GA script loads
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }

        // Load the Google Analytics script only once
        const gaScriptId = 'ga-gtag';
        if (!document.getElementById(gaScriptId)) {
            const script = document.createElement('script');
            script.id = gaScriptId;
            script.async = true;
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3BK9F87D6E';
            document.head.appendChild(script);

            script.onload = () => {
                gtag('js', new Date());
                gtag('config', 'G-3BK9F87D6E');
            };
        }
    }, [title, descriptions, location.pathname]);

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
