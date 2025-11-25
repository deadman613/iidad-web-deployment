"use client";
import { useState, useEffect } from 'react';
import FrontPage from '@/components/LoaderPage/LoadPage';
import HomeSection1 from "@/components/HomeSection/HomeSection1";
import HomeSection2 from "@/components/HomeSection/HomeSection2";
import HomeSection3 from "@/components/HomeSection/HomeSection3";
import HomeSection4 from "@/components/HomeSection/HomeSection4";
import Homesection5 from "@/components/HomeSection/HomeSection5";
import HomeSection6 from "@/components/HomeSection/HomeSection6";
import HomeSection7 from "@/components/HomeSection/HomeSection7";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const navEntry = performance.getEntriesByType('navigation')[0];
    if (navEntry?.type === 'navigate' && sessionStorage.getItem('visited')) {
      setIsLoading(false);
    }
    sessionStorage.setItem('visited', 'true');
  }, []);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <FrontPage onComplete={handleLoadComplete} />}
      <main style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        {/* Only animate when loader is done */}
        <HomeSection1 animate={!isLoading} />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <Homesection5 />
        <HomeSection6 />
        <HomeSection7 />
      </main>
    </>
  );
}
