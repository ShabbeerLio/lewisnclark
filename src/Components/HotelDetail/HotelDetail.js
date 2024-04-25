import React, { useEffect } from 'react'
import "./HotelDetail.css"
import { FaSnowflake } from "react-icons/fa6";
import CategoryData from '../Category/categoryData';
import { Link, useParams } from 'react-router-dom';
import { FaWalking } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const HotelDetail = (props) => {

    const { pathName } = useParams();
    const subCategoryItem = CategoryData
        .flatMap(category => category.subCategory)
        .find(item => item.pathName === pathName);

    /* global dataLayer */
    const location = useLocation();

    useEffect(() => {
        document.title = `${subCategoryItem.titleTag}`;

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

        const description = `${subCategoryItem.descriptions}`;
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
    }, [subCategoryItem.titleTag, subCategoryItem.descriptions, location.pathname]);



    if (!subCategoryItem) {
        return <div>Item not found</div>;
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };


    return (
        <>
            <div className='HotelDetail' key={subCategoryItem.id}>
                <div className="hotel-detail-box">
                    <div className="hotel-detail-banner">
                        <img src={subCategoryItem.banner} alt={subCategoryItem.bannerTag} />
                    </div>
                </div>
                <div className="hotel-detail-box">
                    <div className="hotel-detail-body">
                        <div className="hoteldetail-head">
                            <h1>{subCategoryItem.title}</h1>
                            <div className="hoteldetail-icon">
                                <span>
                                    <div className="seperator">
                                        <FaSnowflake />
                                    </div>
                                </span>
                            </div>
                            <h4>{subCategoryItem.location}</h4>
                            <h5>{subCategoryItem.days}</h5>
                        </div>
                    </div>
                </div>
                <div className="hotel-detail-box2">
                    <div className="hotel-detail-body">
                        <div className="hotel-overview">
                            <div className="hotel-body-left">
                                <h4>overview</h4>
                                {subCategoryItem.overviewDetail.map((i) => (
                                    <>
                                        <p key={i.id}>{i.detail}</p>
                                    </>
                                ))}
                            </div>
                            <div className="hotel-body-right">
                                <div className="hotel-body-image">
                                    <img src={subCategoryItem.overview} alt={subCategoryItem.overviewTag} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hotel-contactForm">
                        {subCategoryItem.contactForm}
                    </div>
                </div>
                <div className="hotel-detail-box">
                    <div className="hotel-detail-item">
                        <div className="hotel-items-head">
                            <h2>Tour Itinerary</h2>
                        </div>
                        {subCategoryItem.tour.map((i) => (<>
                            <div className="hotel-items-box" key={i.id}>
                                <div className="hotel-item-left">
                                    <img src={i.tourCover} alt={i.alt} />
                                </div>
                                <div className="hotel-item-right">
                                    <h2>{i.arrival}</h2>
                                    <span>
                                        <FaWalking />
                                    </span>
                                    <p>{i.detail1}</p>
                                    <p>{i.detail2}</p>
                                </div>
                            </div>
                        </>))}
                        <h2>{subCategoryItem.downTitle}</h2>
                        <p>{subCategoryItem.downdetail1}</p>
                        <p>{subCategoryItem.downdetail2}</p>
                        <p>{subCategoryItem.downdetail3}</p>
                    </div>
                </div>
                <div className="hotel-detail-box">
                    <div className="hotel-detail-item">
                        <div className="hotel-button">
                            <Link to="/contact-us/" onClick={scrollToTop}>
                                <p>Book Now</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelDetail
