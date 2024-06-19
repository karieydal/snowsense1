"use client";

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "@/app/styles/snownavbar.css";

function Navbardata() {
    const navRef = useRef(null);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <div>
            <header>
                <div className="logo">
                    <font size="6">
                        Snowsense.is
                    </font>
                </div>
                <nav ref={navRef}>
                    <a href="data/iceland">Iceland</a>
                    <a href="data/norway">Norway</a>
                    <a href="data/seadevices">Sea Devices</a>
        
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>

                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
        </div>
    );
}

export default Navbardata;

