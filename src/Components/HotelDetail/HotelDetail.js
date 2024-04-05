import React, { useEffect } from 'react'
import "./HotelDetail.css"
import { FaSnowflake } from "react-icons/fa6";
import bannerimg from "../../Assets/Categories/Banner-Golden-Triangle-4-nights-5-days.jpg"
import iterval1 from "../../Assets/Categories/Layer-8-2.png"
import overview from "../../Assets/Categories/GOLDEN-TRIANGLE-INDIA-TOUR_.jpeg"
import CategoryData from '../Category/categoryData';
import { Link, useParams } from 'react-router-dom';
import { FaWalking } from "react-icons/fa";

const HotelDetail = () => {
    const { pathName } = useParams();

    const subCategoryItem = CategoryData
        .flatMap(category => category.subCategory)
        .find(item => item.pathName === pathName);

    useEffect(() => {
        document.title = `${(subCategoryItem.titleTag)}`
    }, [])

    if (!subCategoryItem) {
        return <div>Item not found</div>;
    }


    return (
        <div className='HotelDetail'>
            <div className="hotel-detail-box">
                <div className="hotel-detail-banner">
                    <img src={subCategoryItem.banner} alt={subCategoryItem.bannerTag} />
                </div>
            </div>
            <div className="hotel-detail-box">
                <div className="hotel-detail-body">
                    <div className="hoteldetail-head">
                        <h2>{subCategoryItem.title}</h2>
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
                            <div className="hotel-contactForm">
                                {subCategoryItem.contactForm}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hotel-detail-box">
                <div className="hotel-detail-item">
                    <div className="hotel-items-head">
                        <h2>Tour Itinerary</h2>
                    </div>
                    {subCategoryItem.tour.map((i) => (<>
                        <div className="hotel-items-box">
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
                        <Link to="/contact-us/">
                            <p>Book Now</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelDetail
