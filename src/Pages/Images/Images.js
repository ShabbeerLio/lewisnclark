import React, { useEffect } from 'react'
import "./Images.css"
import ImageData from './ImageData'
import { Link } from 'react-router-dom'

const Images = (props) => {

    useEffect(() => {
        document.title = `${(props.title)}`
    }, [])
    
    return (
        <div className='Images'>
            <div className='Images-main'>
                <div className='Images-head'>
                    <h1>India Tour Images</h1>
                </div>
                <div className="Image-gallery">
                    {ImageData.map((item) => (
                        <div className="gallery-box">
                            <img src={item.cover} alt="" />
                        </div>
                    ))}
                </div>
                <div className="Image-buttons">
                    <div className="Img-btns">
                        <Link to="/luxury-hotels/">
                            <p>VIEW ALL</p>
                        </Link>
                    </div>
                    <div className="Img-btns">
                        <Link to="/contact-us/">
                            <p>Book Now</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Images
