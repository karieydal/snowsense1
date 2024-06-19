"use client";

import { useState, useRef, useEffect  } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "@/app/styles/snownavbar.css";
import Samband from '@/app/components/email';

function Navbarno() {
    document.addEventListener('DOMContentLoaded', (event) => {
        const innskraningElement = document.querySelector('.innskraning');
        if (innskraningElement) {
            innskraningElement.addEventListener('click', () => {
                innskraningElement.classList.toggle('clicked');
            });
        }
    }); 
    
    const navRef = useRef(null);
    const [Visible, setVisible] = useState(false);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const toggleDropdown = () => {
        setVisible(!Visible);
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setVisible(false);
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
                    <img src="../pictures/pols_logo_800.jpg" alt="" />
                </div>
                
               
                <nav ref={navRef}>
                    <a href="#sm4">Om POLS ehf</a>
                    <a href="#myndbond">Om SM4</a>
                    <a href="#myndir">Leser data</a>

                    <div className="innskraning-snow">
                    <a href="#" onClick={toggleDropdown}>kontakt oss</a>
                        {Visible && <Samband/>}
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

export default Navbarno;

