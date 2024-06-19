import React from 'react'; 
import "@/app/styles/tex1.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function umfyrirtaekid() {
  return(   
    <div>
    <div> 
        
        <div class="ising">
            <img src="../pictures/ising.jpeg" alt=""/>
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
        <h1>Um SM4 mælanna</h1>
    <p>
    Stuttur texti:
    SM4 mælarnir samanstanda af eftirfarandi:
    Kapall með hitanemum á 20 cm millibili
    Datalogger sem safnar gögnum í rauntíma
    Samskiptaeining sem sendir gögn í gegnum GSM farsímakerfið á 10 mín fresti.
    Kapallinn kemur í tveimur lengdum: 3 m og 5 m.  Hann er festur á mastur sem sett er upp þar sem mæla á snjódýpt og hitastig í rauntíma, t.d. nálægt upptakasvæðum snjóflóða.

    Meðfylgjandi mynd:  Annars vegar skýringarmynd með mismunandi hlutum mælisins.  Hinsvegar mynd af uppsettum mæli.
    </p>
    <div class="myndir2">
        <div class="myndir22">
        <img src="../pictures/skyrimynddemo.jpeg" alt=""/>
        <img src="../pictures/isl5.jpeg" alt=""/>
        
        </div>
        
    </div> 
    <h8>Til vinstri: skýrimynd af SM4 mæli. Til hægri: Nærmind af SM4 mæli</h8>
    
     <hr class="dashed"></hr>
    </div>
   
    
    
    <hr class="solid"></hr>
    </div>
<div class="footermain">
    <div class="footer2">
        <h3>POLS engineering ehf</h3>
        <h4>Móholt 12</h4> 
            <h5>400 Ísafjörður</h5>
        
    </div>

    <div class="footer3">
        <h3>Hafðu samband</h3>
        <h4>eydalkari@gmail.com</h4> 
            <h5>8238013</h5>
        
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