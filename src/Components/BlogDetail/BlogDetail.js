import React, { useEffect } from 'react'
import "./BlogDetail.css"
import { Link, useLocation, useParams } from 'react-router-dom'
import { FaSnowflake } from "react-icons/fa6";
import BlogData from '../Blog/BlogData';

const BlogDetail = () => {
    const { pathName } = useParams();
    const location = useLocation();

    const formatPathname = (title) => {
        // Convert spaces to dashes and make it lowercase
        return title.toLowerCase().replace(/\s+/g, '-');
    };

    const blogDetail = BlogData.find(item => item.pathName === pathName);
    useEffect(() => {
        document.title = `${blogDetail?.titleTag || 'Blog Detail'}`;

        // Update the canonical URL based on the current location
        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        const canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        }

        // Update the description meta tag
        const description = `${blogDetail?.descriptions || 'Blog Description'}`;
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
                                        <img src={item.imag} alt={item.alttag} />
                                        {item.detailDesc.map((d) => (
                                            <p key={d.id}>{d.desc}</p>
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
