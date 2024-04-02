import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import Logo from "../../Assets/Home/cropped-cropped-cropped-tour-and-treval-4-removebg-preview-300x219.png"
import { IoSearchSharp, IoChevronDown } from "react-icons/io5";
import { Link } from 'react-router-dom';

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
                            <Link className="navBar-logo" to="/">
                                <img src={Logo} alt="" />
                            </Link>
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
                                            <Link className="nav-link active" to="/" onClick={closeMenu}>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about-us/" onClick={closeMenu}>About Us</Link>
                                        </li>
                                        <li className="nav-item dropdown" id="luxuryDropdown">
                                            <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Luxury India <IoChevronDown />
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item" to="#">Luxury North India</Link></li>
                                                <li><Link className="dropdown-item" to="#">Luxury South India</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#gallery" onClick={closeMenu}>Luxury Hotels</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#careers" onClick={closeMenu}>India Tour Images</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact-us/" onClick={closeMenu}>Contact Us</Link>
                                        </li>
                                    </ul>
                                    <div className="nav-action">
                                        <div className="navbar-search">
                                            <IoSearchSharp />
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
