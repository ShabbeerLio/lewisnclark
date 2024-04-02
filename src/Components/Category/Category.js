import React from 'react'
import "./Category.css"
import CategoryData from './categoryData'
import Card from '../Card/Card'

const Category = () => {
    return (
        <div className='category'>
            {CategoryData.map((item) => (
                <>
                    <div className='category-main'>
                        <div className="category-head">
                            <h2>{item.category}: <br /> {item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                    {item.subCategory.map((items ,index) => (
                        <Card items={items} index={index}/>
                    ))}
                </>
            ))}
        </div>
    )
}

export default Category;
