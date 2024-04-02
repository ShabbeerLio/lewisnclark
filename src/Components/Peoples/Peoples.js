import React from 'react'
import "./Peoples.css"
import { MdOutlineSearch } from "react-icons/md";

const Peoples = () => {
    return (
        <div className='people'>
            <div className='people-main'>
                <h1>This page doesn't seem to exist.</h1>
                <h3>It looks like the link pointing here was faulty. Maybe try searching?		</h3>
                <div className="people-search">
                    <div class="group">
                        <form action="">
                            <input class="input" type="search" placeholder="Search" />
                            <MdOutlineSearch />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Peoples
