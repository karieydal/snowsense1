"use client"

import React from 'react'; 
import Navbarusa from "@/app/components/usa-um-ml/Navbarusa"; 
import Textien from "@/app/components/usa-um-ml/Textien";
import Footeren from "@/app/components/usa-um-ml/Footeren"; 
import Slides from '@/app/components/imageslider';
import Images from '@/app/components/Images';
import Langen from '@/app/components/usa-um-ml/langen';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';  


export default function snowsense() {
  return(   
  <div className="page-container">
      <div className="content-wrap"> 
          <Navbarusa/>
          <Langen/>
          <Slides/>
          <Textien/>
          <Images/>
    </div>
    <Footeren/>
  </div>  
  ); 
}

















