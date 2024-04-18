import React, { useState } from 'react'
import "./Navbar.css"
import Logo from "../../Assets/Home/lewis.jpg"
import { IoSearchSharp, IoChevronDown } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isInputVisible, setInputVisible] = useState(false);
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);

    // Function to close the menu when a navigation link is clicked

    const closeMenu = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
        const navbarCollapse = document.getElementById('navbarSupportedContent');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
        const togglerIcon = document.querySelectorAll('.toggler-icon');
        togglerIcon.forEach(icon => {
            icon.classList.toggle('active');
        });
        setIsCollapseOpen(!isCollapseOpen);
    };

    const toggleInputVisibility = () => {
        setInputVisible(!isInputVisible);
    };


    return (
        <>
            <div className="navBar">
                <div id="myNavMenu" className="nav-menu">
                        <nav className="row navbar navbar-expand-lg navbar-light align-items-lg-end">
                            <div className="container-fluid">
                                <div className="company-logo">
                                    <div className="company-logo-box">
                                        <Link className="navBar-logo" to="/">
                                            <img src={Logo} alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="nav-button">
                                    <button className={`navbar-toggler ${isCollapseOpen ? '' : 'collapsed'} d-flex d-lg-none flex-column justify-content-around`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                        onClick={closeMenu}>
                                        <span className="toggler-icon top-bar"></span>
                                        <span className="toggler-icon middle-bar"></span>
                                        <span className="toggler-icon bottom-bar"></span>
                                    </button>
                                </div>
                                <div className="navbar-items">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <Link className="nav-link active" to="/" onClick={closeMenu}>Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/about-us/" onClick={closeMenu} >About Us</Link>
                                            </li>
                                            <li className="nav-item dropdown" id="luxuryDropdown">
                                                <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Luxury India <IoChevronDown />
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><Link className="dropdown-item" to="/luxury-north-india/" onClick={closeMenu} >Luxury North India</Link></li>
                                                    <li><Link className="dropdown-item" to="/luxury-south-india/" onClick={closeMenu} >Luxury South India</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/luxury-hotels/" onClick={closeMenu} >Luxury Hotels</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/india-tour-images/" onClick={closeMenu} >India Tour Images</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/contact-us/" onClick={closeMenu}  >Contact Us</Link>
                                            </li>
                                            <div className="nav-action">
                                                <div className="navbar-search">
                                                    <div className={`search-input-container ${isInputVisible ? 'open' : ''}`}>
                                                        <input type="text" placeholder="Search..." />
                                                    </div>
                                                    <div className="search-icon" onClick={toggleInputVisibility}>
                                                        <IoSearchSharp />
                                                    </div>
                                                </div>
                                            <div className="call-button">
                                                <a href="">Book Now</a>
                                            </div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>

                </div>

            </div>
        </>
    )
}

export default Navbar
