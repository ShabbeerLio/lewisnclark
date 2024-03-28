import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import Logo from "../../Assets/Home/cropped-cropped-cropped-tour-and-treval-4-removebg-preview-300x219.png"
import { IoSearch, IoApps, IoPeopleOutline } from "react-icons/io5";

const Navbar = (props) => {

    // const [formopen, setFormopen] = useState(false);

    // const formIsOpen = () => {

    //     console.log("open")
    //     setFormopen(!formopen);
    // }
    // const formIsClose = () => {
    //     setFormopen(false)
    // }

    const [menuClass, setMenuClass] = useState('nav-menu');

    // const toggleMenu = () => {
    //   setMenuClass(menuClass === 'nav-menu' ? 'nav-menu responsive' : 'nav-menu');
    // };

    // Function to close the menu when a navigation link is clicked
    const closeMenu = () => {
        setMenuClass('nav-menu');
    };

    return (
        <>
            <div className="navBar">
                <div id="myNavMenu" className={menuClass}>
                    <div className="company-logo">
                        <div className="company-logo-box">
                            <a className="navBar-logo" href="#home">
                                <img src={Logo} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="nav-items">
                        <nav className="row navbar navbar-expand-lg navbar-light align-items-lg-end">
                            <div className="container-fluid">
                                <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon top-bar"></span>
                                    <span className="toggler-icon middle-bar"></span>
                                    <span className="toggler-icon bottom-bar"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#home" onClick={closeMenu}>Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#about" onClick={closeMenu}>About Us</a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="nav-link dropdown-toggle" href="#business" onClick={closeMenu}>Luxury India</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#gallery" onClick={closeMenu}>Luxury Hotels</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#careers" onClick={closeMenu}>India Tour Images</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#blogs" onClick={closeMenu}>Contact Us</a>
                                        </li>
                                    </ul>
                                    <div className="nav-action">
                                        <div className="navbar-search">
                                            <IoSearch />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Navbar
