import { Helmet } from 'react-helmet'
import React, { useEffect } from 'react'
import "./Category.css"
import CategoryData from './categoryData'
import Card from '../Card/Card'
import { useLocation } from 'react-router-dom';

const Category = ({ title, category }) => {

    const location = useLocation();

    useEffect(() => {
      document.title = `${(title)}`
      // Update the canonical URL based on the current location
      const canonicalUrl = `${window.location.origin}${location.pathname}`;
      const link = document.querySelector("link[rel='canonical']");
      if (link) {
        link.setAttribute("href", canonicalUrl);
      }
    }, [location]);

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
