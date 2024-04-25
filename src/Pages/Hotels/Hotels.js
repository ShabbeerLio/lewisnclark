
import React, { useEffect } from 'react'
import "./Hotels.css"
import HotelData from './HotelData'
import { useLocation } from 'react-router-dom';

const Hotels = (props) => {

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
        <>
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
