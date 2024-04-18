import React, { useState } from 'react'
import "./Navbar.css"
import Logo from "../../Assets/Home/lewis.jpg"
import { IoSearchSharp, IoChevronDown } from "react-icons/io5";
import { Link } from 'react-router-dom';
import FormFloat from './FormFloat';
import { IoLogoWhatsapp } from "react-icons/io5";

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

    const [formopen, setFormopen] = useState(false);

    const formIsOpen = () => {
        setFormopen(!formopen);
    }
    const formIsClose = () => {
        setFormopen(false)
    }


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
                                            <Link className="nav-link active" to="/luxury-north-india/" onClick={closeMenu}>Luxury North India</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/luxury-south-india/" onClick={closeMenu} >Luxury South India</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/luxury-hotels/" onClick={closeMenu} >Luxury Hotels</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/india-tour-images/" onClick={closeMenu} >India Tour Images</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/lurury-india-tour/" onClick={closeMenu}  >Blogs</Link>
                                        </li>
                                        <div className="nav-action">
                                            <div className="call-button" onClick={formIsOpen}>
                                                <p>Book Now</p>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>

                            <div className="fix-icon">
                                <span className='shine'></span>
                                <a href="https://wa.me/+919811207934">
                                    <IoLogoWhatsapp />
                                </a>
                            </div>
                            {formopen && (
                                <>
                                    <FormFloat formIsClose={formIsClose} />
                                </>
                            )}
                        </div>
                    </nav>

                </div>

            </div>
        </>
    )
}

export default Navbar
