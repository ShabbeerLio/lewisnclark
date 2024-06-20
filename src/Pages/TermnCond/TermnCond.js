import React, { useEffect } from 'react'
import "./TermnCond.css"
import { FaSnowflake } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { useLocation } from 'react-router-dom';

const TermnCond = (props) => {

    /* global dataLayer */
    const location = useLocation();

    useEffect(() => {
        document.title = props.title;
  
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
  
        const description = props.descriptions;
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
    }, [props.title, props.descriptions, location.pathname]);

    return (
        <div className='TermCond'>
            <div className='TermCond-main'>
                <div className="contact-head">
                    <h1>Tour terms and conditions</h1>
                    <div className="contact-icon">
                        <span>
                            <div className="seperator">
                                <FaSnowflake />
                            </div>
                        </span>
                    </div>
                </div>
                <div className="TermCond-box">
                    <h4>Kindly read our terms and conditions, before you finalize and book your Tour with us. </h4>
                    <p><span>Lewis and Clark Tours</span> is part of Amazing Indien Reisen UG. <span>Amazing Indien Reisen UG</span> is registered in Delhi and our registered address is 2ND FLOOR, T-35/A, FLAT NO. C-2, KH NO. 115/3, WARD NO. 6, Village,Mehrauli, New Delhi, South Delhi, Delhi 110030. These terms and conditions are between first Party (Referred here as we / <span>Amazing Indien Reisen UG, New Delhi, India</span>) and second party, the customers who books the services in exchange with the agreed payment.  </p>
                    <h4>Our Liabilities & Limitations:</h4>
                    <ul>
                        <li><p><TiTick/></p><p>We agree to provide the agreed service after the payment. After full payment, we will provide the hotel vouchers. If flight tickets charges are paid, we will share the flight tickets accordingly. </p></li>
                        <li><p><TiTick/></p><p>Amazing Indien Reisen UG work as Travel agent for the services like hotels, airlines, transporters and railways.  We work with contractors who provide these services.</p></li>
                        <li><p><TiTick/></p><p>Any changes made by Hotels or transport will also apply in the final costing.  These changes will be informed via call & Mail in advance.</p></li>
                        <li><p><TiTick/></p><p>Check in and Check out time are decided by Hotels and it is individual.</p></li>
                        <li><p><TiTick/></p><p>Amazing Indien Reisen UG shall not be responsible for any loss, injury or damage to person, property, or otherwise in connection with any accommodation, transportation or other services, resulting – directly or indirectly – from any act of GOD, dangers, fire, accident, breakdown in machinery or equipment, breakdown of transport, wars, civil disturbances, strikes, riots, thefts, pilferages, epidemics, medical or custom department regulations, defaults, or any other causes beyond our control.</p></li>
                        <li><p><TiTick/></p><p>We do not have any insurance policy covering the expenses for accident, sickness, loss due to theft, or any other reasons. Visitors are advised to seek such insurance arrangements in their home country. All baggage& personal property/s at all times are at the client's risk.</p></li>
                    </ul>
                    <h4>How to contact us:</h4>
                    <p>We are available on Email, Phone, Skype and WhatsApp 24 x 7 and revert as soon as possible. </p>
                    <h4>How to book the tour with us: </h4>
                    <p>Please send us your Tour query via Email, we will discuss the program and will prepare the tour program as per your wish and need. If required, we will make it tailor-made completely according to your expectation.   </p>
                    <div className="term-travel">
                        <h2>The travel booking and travel confirmation and delivery of services:</h2>
                        <p>We collect 30% advance payment to confirm the trip. We are very flexible with the deposit. Upon receipt of a confirmed tour booking, a deposit of 30% of whole tour cost must be paid within 7-10 days. The remaining 70% must be paid in two months before the commencement of the tour. For payment method, we recommend you to use direct transfer or use TranserWise to pay to our bank account. You will receive further information on payment and bank details in the invoice.  If the tour commence in two months, we will take advance 50% for the tour confirmation and remaining balance must be cleared before the tour starts. If tour starts in one month, we will collect 100% payment in advance. </p>
                        <h4>Important points before you transfer the payment: </h4>
                        <ul>
                            <li><p><TiTick/></p><p>If paying by credit card, an additional fee of 5-6% of the total amount will be charged, as this amount will be deducted by the respective credit card company before the money lands into our business account.</p></li>
                            <li><p><TiTick/></p><p>Any cost for a foreign bank transfer will be borne by the sender. Therefore, please make sure that your bank make a direct transfer to our business account and that no further intermediary bank fees are deducted from the transfer at your expense.</p></li>
                        </ul>
                        <h2>Confirmations and delivery of services</h2>
                        <p>Upon a successful of 30% advance receiving, we will share the tour confirmation via mail. In next 4−5 weeks, the agency will share the travel details including documents such as Hotel booking reference number, Flight tickets etc. Hotel vouchers will be provided usually two months in advance.  Upon request and on a full payment, we share all the hotel vouchers timely. </p>
                        <h2>Cancellation and refund:</h2>
                        <p>Cancellation is costly and requires a lot of staff time and communication costs. We have the following conditions:</p>
                        <p><span> - Up to 60 days before arrival - No cancellation fees (excluding bank charges 150 €)</span></p>
                        <p><span> - Up to 45 days before arrival - 75% cancellation fee of the total travel price</span></p>
                        <p><span> - Up to 30 days before arrival - 100 % cancellation fee of the total travel price</span></p>
                        <ul>
                            <li><p><TiTick/></p><p>Cancellation should always be sent by e-mail. The actual cancellation costs may vary from case to case and depend on the hotel list, Transportation Company, tour guide and other principals involved in the trip planning.</p></li>
                            <li><p><TiTick/></p><p>In case of Tour cancellation, the card charges paid by customerswon’t be refunded, since these are collected by Banks directly.  </p></li>
                            <li><p><TiTick/></p><p>For the Christmas and Sylvester period from 20 Dec to 07 Jan, the payment is non-refundable.</p></li>
                            <li><p><TiTick/></p><p>For unused hotel accommodation, chartered transportation & missed meals etc. no refund will be made. </p></li>
                            <li><p><TiTick/></p><p>Wildlife Safaris cancellation: All the Indian wildlife safaris arenon-refundable and non-transferrable. Any date change will affect 100 % cancellation charge; hence no payment will be refunded/ adjusted anywhere.</p></li>
                            <li><p><TiTick/></p><p>In situations the flights and trains may be cancelled or delayed or rescheduled due to bad weather conditions or other problems such as strikes, natural disasters etc., we will talk to you and recommend an alternative plan, but no refund will be made.</p></li>
                            <li><p><TiTick/></p><p>In case of any changes to the tour itinerary, we would charge for all new services and hotels as per the new tour plan. Based on the cancellation policy, refunds would be made to your account within 10 to 25 days.</p></li>
                        </ul>
                        <h4>*** Our jurisdiction is Saket Court, New Delhi for any legal dispute. </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermnCond
