"use client";

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "@/app/styles/snownavbar.css";

function Navbar() {
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
                <div className="logo_mynd">
                    <img src="./pictures/pols_logo_800.jpg" alt="" />
                </div>
                <nav ref={navRef}>
                    <a href="gogn/island">Iceland</a>
                    <a href="gogn/noregur">Norway</a>
                    <a href="gogn/sjomælar">Sea Devices</a>
                    
                    <div className="innskraning">
                    <a href="gogn/innskraning">LOG IN</a>
                    </div>
                    
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

export default Navbar;


