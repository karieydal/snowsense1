"use client";

import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "@/app/styles/snownavbar.css";
import Samband from '@/app/components/email';

function Navbar() {
    const navRef = useRef(null);
    const [visible, setVisible] = useState(false);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const toggleDropdown = () => {
        setVisible(!visible);
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

    useEffect(() => {
        const handleScroll = () => {
            const headerEl = document.querySelector('header');
            if (window.scrollY < 100) {
                headerEl.classList.add('transparent');
                headerEl.classList.remove('opaque');
            } else {
                headerEl.classList.add('opaque');
                headerEl.classList.remove('transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const innskraningElement = document.querySelector('.innskraning');
        if (innskraningElement) {
            innskraningElement.addEventListener('click', () => {
                innskraningElement.classList.toggle('clicked');
            });
        }
    }, []); 

    return (
        <div>
            <header className="transparent">
                <div className="logo">
                    <font size="6">
                        Snowsense.is
                    </font> 
                </div>
                <div className="logo_mynd">
                    <img src="./pictures/pols_logo_800.jpg" alt="" />
                </div>
                
                <nav ref={navRef}>
                    <a href="">About us</a>
                    <a href="#myndbond">SM4</a>
                    <a href="#myndir">Sea</a>
                    <a href="#myndir">Data</a>
                    <a href="#myndir">Customized</a>

                    <div className="innskraning-snow">
                        <a href="#" onClick={toggleDropdown}>Hafðu samband</a>
                        {visible && <Samband />}
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