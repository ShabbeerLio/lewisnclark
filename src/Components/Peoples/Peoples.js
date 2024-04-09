import React, { useEffect } from 'react'
import "./Peoples.css"
import { MdOutlineSearch } from "react-icons/md";
import { Helmet } from 'react-helmet';

const Peoples = (props) => {

    // useEffect(() => {
    //     document.title = `${(props.title)}`
    // }, [])

    return (
        <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <link rel="canonical" href="https://lewisnclarktours.com/lurury-india-tour/" />
      </Helmet>
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
