import React, { useRef, useState } from 'react'
import "./Footer.css"

const Footer = () => {

    // form
    const form = useRef();

    const [formData, setFormData] = useState({
        user_name: '',
        user_number: '',
        user_email: '',
        message: ''
    });


    // Handle input changes and update the formData state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [messageSent, setMessageSent] = useState(false); // Track whether the message has been sent


    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        setMessageSent(true);

        setTimeout(() => {
            setMessageSent(false);
        }, 2500);

        // emailjs.sendForm(
        //     'service_itw3fef',
        //     'template_4b6vwk8',
        //     form.current,
        //     'tXjdcsUNLR6f21ITO'
        // )
        //     .then((result) => {
        //         console.log(result.text);
        //         console.log("message sent")
        //     }, (error) => {
        //         console.log(error.text);
        //     });

        // Access the user's name, email, and message from the formData state
        const { user_name, user_number, user_email, message } = formData;

        console.log('Name:', user_name);
        console.log('Number:', user_number);
        console.log('Email:', user_email);
        console.log('Message:', message);

        setFormData({
            user_name: '',
            user_number: '',
            user_email: '',
            message: ''
        });
    };

    return (
        <div className="footer">
            <div className="footer-main">
                <div className="footer-contact-address">
                    <h2>LEWIS AND CLARK TOURS</h2>
                    <p>An India Destination Management Company (DMC)</p>
                    <h2>CORPORATE OFFICE (INDIA)</h2>
                    <p>H 44, BSI Business Park, Sector 63, Noida, Uttar Pradesh 201301, India</p>
                    <ul>
                        <li>Phone: +91-9811-20-7934​ (24/7 - Call & WhatsApp)</li>
                        <li>Phone: +91-9958-06-6500</li>
                        <li>Email: info at lewisnclarktours dot com</li>
                    </ul>
                    <h2>REGISTERED IN NEW DELHI (INCREDIBLE INDIA)</h2>
                    <p>UAM Nummer - DL10D0013736 <br />GST/ VAT Nummer - 07AZWPK6163B1Z4</p>
                </div>
                <div className="footer-contact-detail">
                    <h2>LUXURY INDIA TOURS</h2>
                    <ul>
                        <li>
                            <a href="">Golden Triangle India Tours</a>
                        </li>
                        <li>
                            <a href="">Luxury India through the land of colours</a>
                        </li>
                        <li>
                            <a href="">Luxury North India – Golden Triangle with Varanasi</a>
                        </li>
                        <li>
                            <a href="">Luxury Golden Triangle Wildlife</a>
                        </li>
                        <li>
                            <a href="">Luxury Kerala Tour</a>
                        </li>
                        <li>
                            <a href="">Trails of luxury South India Tour</a>
                        </li>
                    </ul>
                    <h2>IMPORTANT LINKS</h2>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About Us</a>
                        </li>
                        <li>
                            <a href="/">India Tour Images</a>
                        </li>
                        <li>
                            <a href="/">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-contact-form">
                    <h3>INQUIRE NOW</h3>
                    <p>SEND YOUR DETAILS TO BOOK</p>
                    <form ref={form} onSubmit={handleSubmit}>
                        <div className="contact-form-box">
                            <div className='input-box'>
                                <label>Name</label>
                                <input
                                    name="user_name"
                                    type="text"
                                    value={formData.name}
                                    placeholder='Your Name'
                                    onChange={handleInputChange} required
                                />
                            </div>
                            <div className='input-box'>
                                <label>Phone</label>
                                <input
                                    name="user_number"
                                    type="number"
                                    value={formData.number}
                                    placeholder='Your Phone'
                                    onChange={handleInputChange} required
                                />
                            </div>
                        </div>
                        <div className='input-box'>
                            <label>Email </label>
                            <input
                                name="user_email"
                                type="email"
                                value={formData.email}
                                placeholder='Your Email Address'
                                onChange={handleInputChange} required
                            />
                        </div>
                        <div className='input-box'>
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                placeholder='Your Message'
                                onChange={handleInputChange} required
                            />
                        </div>
                        <div className="contact-form-box-button">
                            {/* <p>We do not sell, share, trade your information with anyone for any reason. We won’t give spam mails.</p> */}
                            <button type="submit">
                                <p>Send Message</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2024 Lewis and Clark Tours</p>
            </div>
        </div>
    )
}

export default Footer
