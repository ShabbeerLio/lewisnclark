import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom';


const Card = ({ items }) => {
    var index = (items.id);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    const formatPathname = (title) => {
        // Convert spaces to dashes and make it lowercase
        return title.toLowerCase().replace(/\s+/g, '-');
    };

    return (
        <div className={items.className} key={index}>
            <div className="category-box">
                <div className="category-body-items">
                    <div className="category-item-left">
                        <Link
                            to={{
                                pathname: `/${formatPathname(items.pathName)}/`
                            }}
                            onClick={scrollToTop}>
                            <img src={items.cover} alt="" />
                        </Link>
                    </div>
                    <div className="category-item-right">
                        <Link
                            to={{
                                pathname: `/${formatPathname(items.pathName)}/`
                            }}
                            onClick={scrollToTop}
                        >
                            <h2>{items.title}</h2>
                        </Link>
                        <Link to="/lurury-india-tour/" onClick={scrollToTop}>
                            <h4>{items.days}</h4>
                        </Link>
                        <div className="category-title">
                            <Link to="/lurury-india-tour/" onClick={scrollToTop}>
                                <p>{items.location}</p>
                            </Link>
                        </div>
                        <p>{items.desc}</p>
                        <div className="category-button">
                            <Link
                                to={{
                                    pathname: `/${formatPathname(items.pathName)}/`
                                }}
                                onClick={scrollToTop}>
                                <p>Read More</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
