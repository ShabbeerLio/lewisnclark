import React from 'react'
import "./HotelDetail.css"
import { FaSnowflake } from "react-icons/fa6";
import bannerimg from "../../Assets/Categories/Banner-Golden-Triangle-4-nights-5-days.jpg"
import iterval1 from "../../Assets/Categories/Layer-8-2.png"
import overview from "../../Assets/Categories/GOLDEN-TRIANGLE-INDIA-TOUR_.jpeg"
import CategoryData from '../Category/categoryData';
import { useParams } from 'react-router-dom';

const HotelDetail = () => {
    const { pathName } = useParams();

    const subCategoryItem = CategoryData
        .flatMap(category => category.subCategory)
        .find(item => item.pathName === pathName);

    if (!subCategoryItem) {
        return <div>Item not found</div>;
    }

    return (
        <div className='HotelDetail'>
            <div className="hotel-detail-box">
                <div className="hotel-detail-banner">
                    <img src={subCategoryItem.banner} alt="" />
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
                            <p>The customized Golden Triangle tour leads you with splendor and grandeur of luxury India and exotic of north India. Covering the golden triangle cities Delhi, Agra, Jaipur gives you the unforgettable experience. The luxury golden triangle will bring you the royal experience by staying in the luxury hotels of Delhi, Agra and Jaipur. The exotic north India tour begins in Delhi, the capital city of India, known for its glorious history and modern-day hustle-bustle. </p>
                            <p>The Delhi, Agra, Jaipur tour stops at Agra, the home to the magnificent Taj Mahal, the most beautiful one of the Seven Wonders of the World.  Finally your luxury India tour concludes in Jaipur, known as the Pink City and gem city. Jaipur destination is famous for its majestic forts, palaces, and vibrant culture and delicious cuisine. The exotic India Tour offers a glimpse of India’s diverse cultural heritage and architectural marvels. The Delhi Golden triangle tour is the perfect match to dream, explore and experience India</p>
                        </div>
                        <div className="hotel-body-right">
                            <div className="hotel-body-image">
                                <img src={overview} alt="" />
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
                    <div className="hotel-items-box">
                        <div className="hotel-item-left">
                            <img src={iterval1} alt="" />
                        </div>
                        <div className="hotel-item-right">
                            <h2>Day 1: Arrival in Delhi</h2>
                            <span></span>
                            <p>Arrival at Delhi airport, you will be greeted and received by our tour manager. Transfer to the hotel and check-in at the hotel. You will be handed over the documents for Delhi Agra Jaipur tour package.</p>
                            <p>The first day of the Jaipur tour package from Delhi starts with the Lodhi Garden, a tranquil oasis in the heart of bustling Delhi, where visitors can escape the chaos of the city and enjoy a peaceful stroll amidst lush greenery. Followed by Gandhi Memorial dedicated to the life and legacy of Mahatma Gandhi, we will drive past the Government building, which symbolizes a vibrant democracy. Visit also Jama mosque and the bustling spice market by enthralling rickshaw ride. Upon finishing, the day tour transport to the hotel.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelDetail
