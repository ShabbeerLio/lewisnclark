import React, { useRef, useState } from 'react'
import "./Footer.css"
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';


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
                    <h1>LEWIS AND CLARK TOURS</h1>
                    <p>An India Destination Management Company (DMC)</p>
                    <h1>CORPORATE OFFICE (INDIA)</h1>
                    <p>H 44, BSI Business Park, Sector 63, Noida, Uttar Pradesh 201301, India</p>
                    <ul>
                        <li>Phone: +91-9811-20-7934​ (24/7 - Call & WhatsApp)</li>
                        <li>Phone: +91-9958-06-6500</li>
                        <li>Email: info at lewisnclarktours dot com</li>
                    </ul>
                    <h1>REGISTERED IN NEW DELHI (INCREDIBLE INDIA)</h1>
                    <p>UAM Nummer - DL10D0013736 <br />GST/ VAT Nummer - 07AZWPK6163B1Z4</p>
                </div>
                <div className="footer-contact-detail">
                    <h1>LUXURY INDIA TOURS</h1>
                    <ul>
                        <li>
                            <Link to="/golden-triangle-india-tours/">Golden Triangle India Tours</Link>
                        </li>
                        <li>
                            <Link to="/luxury-india-through-the-land-of-colours/">Luxury India through the land of colours</Link>
                        </li>
                        <li>
                            <Link to="/luxury-north-india-golden-triangle-with-varanasi/">Luxury North India – Golden Triangle with Varanasi</Link>
                        </li>
                        <li>
                            <Link to="/luxury-golden-triangle-wildlife/">Luxury Golden Triangle Wildlife</Link>
                        </li>
                        <li>
                            <Link to="/luxury-kerala-tour/">Luxury Kerala Tour</Link>
                        </li>
                        <li>
                            <Link to="/trails-of-luxury-south-india-tour/">Trails of luxury South India Tour</Link>
                        </li>
                    </ul>
                    <h1>IMPORTANT LINKS</h1>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about-us/">About Us</Link>
                        </li>
                        <li>
                            <Link href="/india-tour-images/">India Tour Images</Link>
                        </li>
                        <li>
                            <Link href="/contact-us/">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <ContactForm/>
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2024 Lewis and Clark Tours</p>
            </div>
        </div>
    )
}

export default Footer
