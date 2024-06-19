import React from "react";
import "@/app/styles/footer.css";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => (
  <div class="footermain">
  <div class="footer2">
      <h3>POLS engineering ehf</h3>
      <h4>Móholt 12</h4> 
          <h5>400 Ísafjörður</h5>
  </div>

  <div className="footer3">
  <h3>Hafðu samband</h3>
  <div className="contact-item">
      <MdEmail className="icon" />
      <a href="mailto:eydalkari@gmail.com">eydalkari@gmail.com</a>
  </div>
  <div className="contact-item">
      <FaPhone className="icon" />
      <a href="tel:+3548238013">+354-823-8013</a>
  </div>
</div>

  <div class="footer4">
      <h3>Fylgstu með</h3>
      <FaFacebook className="icon-fa" />
      <FaInstagramSquare className="icon-fa"/>
      
  </div>

  </div>

);

export default Footer;
    
        
    

