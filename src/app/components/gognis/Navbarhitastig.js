"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "@/app/styles/navbarnoflags.css";

function Navbarhitastig() {
    const navRef = useRef(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <header>
                <div className="logo">
                    <font size="6">
                        Snowsense.is
                    </font>
                </div>

                <div className="logo_mynd">
                    <img src="./pictures/pols_logo_800.jpg" alt=""/>
                </div>
                
                <nav ref={navRef}>
                    <div className="navbar">
                        
                        <a href="island">Allir mælar</a>
                        <a href="#" onClick={toggleDropdown} className="user-pic">Snjódýpt</a>
                        {dropdownVisible && (
                            <ul className="dropdown">
                                <li><a href="#"><h5>Línurit</h5></a></li>
                                <li><a href="hitagraf"><p>Hitagraf</p></a></li>
                                <li><a href="#"><p>Annað?</p></a></li>
                            </ul>
                        )}
                        <a href="hitastigssnid">Hitastigssnið</a>
                        <a href="hitastig" className="text-gray-400">Hitastig</a>
                        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                            <FaTimes />
                        </button>
                    </div>
                </nav>
                
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
        </div>
    );
}

export default Navbarhitastig;