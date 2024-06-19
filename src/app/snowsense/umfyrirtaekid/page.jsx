import React from 'react'; 
import "@/app/styles/tex1.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function umfyrirtaekid() {
  return(   
    <div>
    <div> 
        
        <div class="ising">
            <img src="../pictures/selj.jpeg" alt=""/>
        </div>

        <div className="logo_mynd">
            <img src="../pictures/pols_logo_800.jpg" alt="" />
        </div>

        <div className="tilbaka">
            <a href="/snowsense"><h3>←Til baka</h3></a>
        </div>
        
        <div class="umsm4">
        <h2>POLS Engineering ehf</h2>
        </div>

        <div class="content-container">
        <h1>POLS engineering</h1>
    <p>
    POLS engineering er nýsköpunarfyrirtæki frá Ísafirði sem framleiðir snjódýptarmæla, en síðustu ár hefur fyrirtækið engineering
    framleitt hitastigsmæla fyrir kví. POLS var stofnað árið 2004 og fyrirtækið hefur vaxið ört síðan þá. þróa mæla sem væru einfaldari 
    í uppsetningu og áreiðanlegri en þeir snjódýptarmælar sem höfðu verið í notkun á Íslandi fram að því.
    </p>
    <div class="isl11">
        <img src="../pictures/isl11.jpeg" alt="" />
        <h2>SM4 mælir í upptakasvæði að vetrarlagi </h2>
    </div>
    
     <hr class="dashed"></hr>
    </div>
   
    <div class="content-container">
        <h1>Hvers vegna voru mælarnir þróaðir?</h1>
    <p>
    SM4 mælarnir voru þróaðir af POLS engineering, sem er lítið nýsköpunarfyrirtæki á Ísafirði. 
    Tilgangurinn var að þróa mæla sem væru einfaldari í uppsetningu og áreiðanlegri en þeir 
    snjódýptarmælar sem höfðu verið í notkun á Íslandi fram að því. SM4 mælarnir þurfa ekki 
    há, steypt möstur heldur er fullnægjandi að hafa mastur í sömu lengd og kapallinn. SM4 
    truflast ekki af ísingu eða skafrenningi eins og margir aðrir snjódýptarmælar. 
    </p>
    <div class="isl11">
        <img src="../pictures/isl6.jpeg" alt="" />
        <h2>SM4 mælir í upptakasvæði að vetrarlagi </h2>
   
    
        </div>
    </div>
    <hr class="solid"></hr>
    </div>
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

   </div>
        
       
  ); 
}