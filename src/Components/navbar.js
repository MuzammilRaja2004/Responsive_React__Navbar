import React, { useState } from 'react';
import './navbar.css'
// Icon Link
import { FaBars } from "react-icons/fa";

function Navbar() {

    const [ShowMediaIcons,setShowMediaIcons] = useState(false);

    return (
        <div>
            <nav className="main-nav">

                <div className="logo">
                    <h2>Logo</h2>
                </div>

                <div className= {ShowMediaIcons ? "menu-link mobile-menu-link" : "menu-links"}>
                    <ul>

                        <li>
                            <a href="#">Home</a>
                        </li>

                        <li>
                            <a href="#">About</a>
                        </li>

                        <li>
                            <a href="#">Service</a>
                        </li>

                        <li>
                            <a href="#">Projects</a>
                        </li>

                        <li>
                            <a href="#">Contact</a>
                        </li>

                    </ul>
                </div>

                <div className="color-mode">
                    <ul className="color-mode-desktop">
                        <label htmlFor="/">Dark Mode</label>
                    </ul>
                </div>

                <div className="hamburger-menu">
                    <a href="#" onClick={()=> setShowMediaIcons(!ShowMediaIcons)}> <FaBars /> </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
