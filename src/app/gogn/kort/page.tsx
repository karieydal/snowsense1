"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import 'bootstrap/dist/css/bootstrap.min.css';  
import "@/app/styles/kort.css";

const Stort_kort = dynamic(() => import('@/app/components/gognis/oll_kort/Stort_kort'), { ssr: false });

export default function KortPage() {
  return (
    <div className="map-container">
      <Stort_kort />
    </div>
  );
}