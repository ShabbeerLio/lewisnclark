import React, { useEffect } from 'react'
import "./BlogDetail.css"
import { Link, useLocation, useParams } from 'react-router-dom'
import { FaSnowflake } from "react-icons/fa6";
import BlogData from '../Blog/BlogData';

const BlogDetail = () => {
    /* global dataLayer */
    const location = useLocation();
    const { pathName } = useParams();

    const formatPathname = (title) => {
        // Convert spaces to dashes and make it lowercase
        return title.toLowerCase().replace(/\s+/g, '-');
    };

    const blogDetail = BlogData.find(item => item.pathName === pathName);
    useEffect(() => {
        document.title = `${blogDetail?.titleTag || 'Blog Detail'}`;

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

        const description = `${blogDetail?.descriptions || 'Blog Description'}`;
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
    }, [blogDetail, location]);


    if (!blogDetail) {
        return <div>Item not found</div>;
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    return (
        <div className='HotelDetail' key="{subCategoryItem.id}">
            <div className="hotel-detail-box">
                <div className="blog-banner">
                    <img src={blogDetail.cover} alt={blogDetail.alttag} />
                </div>
            </div>
            <div className="hotel-detail-box">
                <div className="hotel-detail-body">
                    <div className="hoteldetail-head">
                        <h1>{blogDetail.title}</h1>
                        <div className="hoteldetail-icon">
                            <span>
                                <div className="seperator">
                                    <FaSnowflake />
                                </div>
                            </span>
                        </div>
                        <h5>{blogDetail.date}</h5>
                    </div>
                </div>
            </div>
            <div className="blog-box2">
                <div className="blog-body">
                    <div className="blog-overview">
                        <div className="blog-body-left">
                            <div className="blog-body-detail">
                                <p>{blogDetail.desc}</p>
                                <p>{blogDetail.desc1}</p>
                                {blogDetail.detail.map((item) => (
                                    <>
                                        <h5>{item.title}</h5>
                                        {item.imag ? <img src={item.imag} alt={item.alttag} /> : null}
                                        {item.detailDesc.map((d) => (
                                            <>
                                                <div className="blog-detail-detail">
                                                    {d.title ? <span>{d.title}</span> : null}
                                                    <p key={d.id}>{d.desc}</p>
                                                </div>
                                            </>
                                        ))}
                                    </>
                                ))}
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
            <div className="hotel-detail-box">
                <div className="hotel-detail-item">
                    <div className="hotel-button">
                        <Link to="/contact-us/" onClick="{scrollToTop}">
                            <p>Book Now</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail
