
import React, { useEffect } from 'react'
import "./Peoples.css"
import { MdOutlineSearch } from "react-icons/md";
import { useLocation } from 'react-router-dom';

const Peoples = (props) => {

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
        <div className='people'>
            <div className='people-main'>
                <h1>This page doesn't seem to exist.</h1>
                <h3>It looks like the link pointing here was faulty. Maybe try searching?		</h3>
                <div className="people-search">
                    <div className="group">
                        <form action="">
                            <input className="input" type="search" placeholder="Search" />
                            <MdOutlineSearch />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Peoples
