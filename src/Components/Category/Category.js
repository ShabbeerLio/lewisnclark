import { Helmet } from 'react-helmet'
import React, { useEffect } from 'react'
import "./Category.css"
import CategoryData from './categoryData'
import Card from '../Card/Card'
import { useLocation } from 'react-router-dom';

const Category = ({ title, category ,descriptions}) => {

    const location = useLocation();

    useEffect(() => {
        document.title = `${title}`;
        
        // Update the canonical URL based on the current location
        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        const canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
          canonicalLink.setAttribute("href", canonicalUrl);
        }
        
        // Update the description meta tag
        const description = `${descriptions}`;
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
          metaDescription.setAttribute("content", description);
        } else {
          // If the description meta tag doesn't exist, create it
          const newMeta = document.createElement("meta");
          newMeta.setAttribute("name", "description");
          newMeta.setAttribute("content", description);
          document.head.appendChild(newMeta);
        }
      }, [title, location]);

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
