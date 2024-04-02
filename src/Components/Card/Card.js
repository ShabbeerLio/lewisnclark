import React from 'react'
import "./Card.css"
import category1 from "../../Assets//Categories/LUXURY-GOLDEN-TRIANGLE-TOUR.jpg"


const Card = ({items}) => {
    var index= (items.id);

    return (
        <div className={items.className} key={index}>
            <div className="category-box">
                <div className="category-body-items">
                    <div className="category-item-left">
                        <a href="">
                            <img src={category1} alt="" />
                        </a>
                    </div>
                    <div className="category-item-right">
                        <h2>{items.title}</h2>
                        <h4>{items.days}</h4>
                        <div className="category-title">
                            <p>{items.location}</p>
                        </div>
                        <p>{items.desc}</p>
                        <div className="category-button">
                            <p>Read More</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
