import React from 'react'; 
import Navbarsnowsense from "@/app/components/Navbarsnowsense"; 
import Texti from "@/app/components/Texti"; 
import Footer from "@/app/components/Footer"; 
import Slides from '@/app/components/imageslider';
import Images from '@/app/components/Images';
import Lang from '@/app/components/lang';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';  


export default function snowsense() {
  return(   
  <div className="page-container">
      <div className="content-wrap"> 
          <Navbarsnowsense/>
          <Slides/> 
          <Lang/>
          <Texti/>
          <Images/>
          
    </div>
    <Footer/>
  </div>  
  ); 
}















































