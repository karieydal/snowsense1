import React from "react";
import "@/app/styles/footer.css";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footerno = () => (
    <footer className="footer">
        <div className="logo1">
                <font size="10">
                    Snowsense.is
                </font> 
        </div>
        <div className="logo_mynd1">
            <img src="./pictures/pols_logo_800.jpg" alt="" />
        </div>
    <div className="container">
      <div className="row">
        <div className="col">
          <h5>POLS engineering ehf</h5>
          <ul className="list-unstyled">
          <li><FaLocationDot className="icon"/>
            Móholt 12, 400 Ísafjörður
          </li></ul>
        </div>
        <div className="col">
          <h5>Hafðu samband</h5>
          <ul className="list-unstyled">
            <li>
              <FaPhone className="icon" />
              <a href="tel:+3548238013">+354-823-8013</a>
            </li>
            <li>
              <MdEmail className="icon" />
              <a href="mailto:eydalkari@gmail.com">eydalkari@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h5>Fylgstu með</h5>
          <ul className="list-unstyled-fa">
            <li>
              <FaFacebook className="icon-fa" />
              <FaInstagramSquare className="icon-fa"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footerno;
    
        
    

