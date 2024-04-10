
import React, { useEffect } from 'react'
import "./Peoples.css"
import { MdOutlineSearch } from "react-icons/md";
import { useLocation } from 'react-router-dom';

const Peoples = (props) => {

    const location = useLocation();

  useEffect(() => {
    document.title = `${(props.title)}`
    // Update the canonical URL based on the current location
    const canonicalUrl = `${window.location.origin}${location.pathname}`;
    const link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", canonicalUrl);
    }
  }, [location]);

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
