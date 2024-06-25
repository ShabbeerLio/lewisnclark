import React, { useRef, useState } from 'react'
import "./Footer.css"
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';


const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };
    return (
        <div className="footer">
            <div className="footer-main">
                <div className="footer-contact-address">
                    <h3>LEWIS AND CLARK TOURS</h3>
                    <p>An India Destination Management Company (DMC)</p>
                    <h3>CORPORATE OFFICE (INDIA)</h3>
                    <p>H 44, BSI Business Park, Sector 63, Noida, Uttar Pradesh 201301, India</p>
                    <ul>
                        <li>Phone: +91-9811-20-7934​ (24/7 - Call & WhatsApp)</li>
                        <li>Phone: +91-8860-61-5628</li>
                        <li>Email: info at lewisnclarktours dot com</li>
                    </ul>
                    <h3>REGISTERED IN NEW DELHI (INCREDIBLE INDIA)</h3>
                    <p>2ND FLOOR, T-35/A, FLAT NO. C-2, KH NO. 115/3, WARD
                        NO. 6, Village Mehrauli, New Delhi, South Delhi, Delhi 110030</p>
                    <p>UAM Nummer - DL10D0013736 <br />GST/ VAT Nummer - 07AZWPK6163B1Z4</p>
                </div>
                <div className="footer-contact-detail">
                    <h3>LUXURY INDIA TOURS</h3>
                    <ul>
                        <li>
                            <Link to="/golden-triangle-india-tours/" onClick={scrollToTop}>Golden Triangle India Tours</Link>
                        </li>
                        <li>
                            <Link to="/luxury-india-through-the-land-of-colours/" onClick={scrollToTop}>Luxury India through the land of colours</Link>
                        </li>
                        <li>
                            <Link to="/luxury-north-india-golden-triangle-with-varanasi/" onClick={scrollToTop}>Luxury North India – Golden Triangle with Varanasi</Link>
                        </li>
                        <li>
                            <Link to="/luxury-golden-triangle-wildlife/" onClick={scrollToTop}>Luxury Golden Triangle Wildlife</Link>
                        </li>
                        <li>
                            <Link to="/luxury-kerala-tour/" onClick={scrollToTop}>Luxury Kerala Tour</Link>
                        </li>
                        <li>
                            <Link to="/trails-of-luxury-south-india-tour/" onClick={scrollToTop}>Trails of luxury South India Tour</Link>
                        </li>
                    </ul>
                    <h3>IMPORTANT LINKS</h3>
                    <ul>
                        <li>
                            <Link to="/" onClick={scrollToTop}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about-us/" onClick={scrollToTop}>About Us</Link>
                        </li>
                        <li>
                            <Link to="/india-tour-images/" onClick={scrollToTop}>India Tour Images</Link>
                        </li>
                        <li>
                            <Link to="/contact-us/" onClick={scrollToTop}>Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/blogs/" onClick={scrollToTop}>Blog</Link>
                        </li>
                        <li>
                            <Link to="/term-and-condition/" onClick={scrollToTop}>Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>
                <ContactForm />
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2024 Lewis and Clark Tours</p>
            </div>
        </div>
    )
}

export default Footer
