"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import FrontPage from '@/components/LoaderPage/LoadPage'

export default function HomeLoaderGate({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Only show loader for homepage or courses index
    const showOnPath = pathname === '/' || pathname.startsWith('/courses');
    if (!showOnPath) {
      setIsLoading(false);
      return;
    }

    // Decide whether to show the loader on first navigation
    const navEntry = typeof performance !== 'undefined' ? performance.getEntriesByType?.('navigation')?.[0] : undefined;
    const visited = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('visited') : null;

    if (navEntry?.type === 'navigate' && visited) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }

    try {
      sessionStorage.setItem('visited', 'true');
    } catch (_) {}
  }, [pathname]);

  const handleLoadComplete = () => setIsLoading(false);

  useEffect(() => {
    // If CourseSection1 reports it's loaded, finish the loader immediately
    const onCourseLoaded = () => setIsLoading(false);
    window.addEventListener('courseSection1:loaded', onCourseLoaded);
    window.addEventListener('courseSection2:loaded', onCourseLoaded);
    return () => {
      window.removeEventListener('courseSection1:loaded', onCourseLoaded);
      window.removeEventListener('courseSection2:loaded', onCourseLoaded);
    };
  }, []);

  const shouldShow = pathname === '/' || pathname.startsWith('/courses');
  if (!shouldShow) return <>{children}</>;

  // Always render children so the page can mount and fetch data while the loader is shown.
  // Render the loader component directly; `FrontPage` is positioned fixed and provides its own
  // background and fade-out animation, so we don't wrap it with another overlay.
  return (
    <>
      {children}
      {isLoading && (
        <FrontPage onComplete={handleLoadComplete} />
      )}
    </>
  );
}
