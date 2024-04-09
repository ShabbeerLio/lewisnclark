import React, { useEffect } from 'react'
import "./Category.css"
import CategoryData from './categoryData'
import Card from '../Card/Card'
import { Helmet } from 'react-helmet'

const Category = ({ title, category }) => {

    // useEffect(() => {
    //     document.title = `${(title)}`
    // }, [])

    const selectedCategory = CategoryData.find(cat => cat.category === category);

    if (!selectedCategory) {
        return <div>Category not found</div>;
    }


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="canonical" href="https://lewisnclarktours.com/luxury-north-india/" />
            </Helmet>
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
