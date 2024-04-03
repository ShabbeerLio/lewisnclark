import React, { useEffect } from 'react'
import "./Contact.css"
import { FaSnowflake } from "react-icons/fa6";
import contactimg from "../../Assets/Contact/1-1-1.jpg"
import Maps from '../../Components/Map/Maps';

const Contact = (props) => {

    useEffect(() => {
        document.title = `${(props.title)}`
    }, [])
    
    return (
        <div className='contact'>
            <div className='contact-main'>
                <div className="contact-head">
                    <h2>Contact us</h2>
                    <div className="contact-icon">
                        <span>
                            <div className="seperator">
                                <FaSnowflake />
                            </div>
                        </span>
                    </div>
                </div>
                <div className="contact-body">
                    <div className="contact-body-left">
                        <div className="contact-left-img">
                            <img src={contactimg} alt="" />
                        </div>
                    </div>
                    <div className="contact-body-right">
                        <div className="contact-right-detail">
                            <p>Lewis N Clark Tour is an India tour operator. We plan <strong>your customize and Tailormade luxury India Tour</strong>, privately and with qualified Tour Escort and professional chauffeurs. Plan your luxury Vacation in India with us for an authentic and mesmerizing experiences, like <strong>Golden Triangle Tours, Tigers and The Taj Mahal, Ganges to Taj Mahal tour, two week trip to India</strong>, or <strong>13 day North India tour</strong>. You can choose our <strong>The best Golden Triangle Tour packages</strong> and <strong>8 Day Delhi to Jaipur Tour</strong> to discover Maharajas palace and Taj Mahal or The Golden Triangle with Varanasi Tour for India cultural, spiritual experience in North India. From Kerala to Rajasthan for the wildlife Tiger Safari or from vibrant magical cultural city Varanasi to relaxing Goa, our India travel experts are very well informed for all these travel destinations in India and assists you further to plan your dream trip to India for your best experience. Our <strong>exotic India Tours</strong> is perfectly planned and organized by us!</p>
                            <p>Would you like to plan your <strong>India trip</strong> with a local India travel agency and wish an attractive travel offer? Or would you like us to call you back? After a message we answer your question or your suggestions as soon as possible and advise the different possibilities of your India tour. We guarantee you the best and unique experience in our <strong>India customized tours!</strong></p>
                        </div>
                    </div>
                </div>
                <div className="contact-map">
                    <Maps/>
                </div>
            </div>
        </div>
    )
}

export default Contact
