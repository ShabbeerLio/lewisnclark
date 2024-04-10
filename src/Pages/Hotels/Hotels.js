import { Helmet } from 'react-helmet'
import React, { useEffect } from 'react'
import "./Hotels.css"
import HotelData from './HotelData'

const Hotels = (props) => {

    // useEffect(() => {
    //     document.title = `${(props.title)}`
    // }, [])

    return (
        <>
            <Helmet>
                <title>{props.title}</title>
                <link rel="canonical" href={props.canonical} />
            </Helmet>
            <div className='hotel'>
                <div className="hotel-box1">
                    <div className='hotel-head'>
                        <h1>LUXURY ACCOMODATION</h1>
                        <p>India is a beautiful destination for many travellers, be it Taj Mahal a symbol of love, or cultural divine city Varanasi or colorful Rajasthan a state of Maharaja in North India whereas south India fascinates with its greenery, peacefully and Ayurveda. Taj Group Hotels, Oberoi Group and Leela chain of hotels are best known luxury accommodations for your Luxury private tours India. Choose our recommended Luxury hotels for India Holidays and plan your Private Tour India with our Travel Designer.</p>
                    </div>
                </div>
                {HotelData.map((item) => (
                    <div className={item.className}>
                        <div className='hotel-item'>
                            <h5>{item.title}</h5>
                            <div className="hotel-item-box">
                                {item.images.map((e) => (
                                    <img src={e.cover} alt="" />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Hotels
