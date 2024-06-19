"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Navbargogn from "@/app/components/gognis/Navbargogn";
import Gognlang from '@/app/components/Gognlang';

// Dynamically import components to ensure they are only loaded on the client side
const Tabledemo = dynamic(() => import('@/app/components/Tabledemo'), { ssr: false });
const Stort_kort = dynamic(() => import('@/app/components/gognis/oll_kort/Stort_kort'), { ssr: false });

export default function GognPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Or some fallback UI if you want to render something
  }

  return (
    <div>
      <Navbargogn />
      <Gognlang />
      <Tabledemo />
      <Stort_kort />
    </div>
  );
}





