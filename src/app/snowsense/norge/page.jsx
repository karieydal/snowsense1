"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import 'bootstrap/dist/css/bootstrap.min.css';  

const Navbarno = dynamic(() => import("@/app/components/norway/Navbarno"), { ssr: false });
const Textino = dynamic(() => import("@/app/components/norway/Textino"), { ssr: false });
const Footerno = dynamic(() => import("@/app/components/norway/Footerno"), { ssr: false });
const Slides = dynamic(() => import('@/app/components/imageslider'), { ssr: false });
const Imagesno = dynamic(() => import('@/app/components/norway/Imagesno'), { ssr: false });
const Langno = dynamic(() => import('@/app/components/norway/langno'), { ssr: false });

export default function Norge() {
  return(  
    <div className="page-container">
      <div className="content-wrap">
        <Navbarno/>
        <Langno/>
        <Slides/>
        <Textino/>
        <Imagesno/>
      </div>
      <Footerno/>
    </div>  
  );
}