import { Helmet } from 'react-helmet'
import React, { useEffect } from 'react'
import "./Category.css"
import CategoryData from './categoryData'
import Card from '../Card/Card'
import { useLocation } from 'react-router-dom';

const Category = ({ title, category ,descriptions}) => {

     /* global dataLayer */
  const location = useLocation();

  useEffect(() => {
      document.title = title;

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

      const description = descriptions;
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
  }, [title, descriptions, location.pathname]);

    const selectedCategory = CategoryData.find(cat => cat.category === category);

    if (!selectedCategory) {
        return <div>Category not found</div>;
    }


    return (
        <>
            <div className='category'>
                <div className='category-main'>
                    <div className="category-head">
                        <h1>{selectedCategory.category}: <br /> {selectedCategory.title}</h1>
                        <p>{selectedCategory.desc}</p>
                    </div>
                </div>
                {selectedCategory.subCategory.map((items, index) => (
                    <Card key={items.id} items={items} index={index} />
                ))}
            </div>
        </>
    )
}

export default Category;
