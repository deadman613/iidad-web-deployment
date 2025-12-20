"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import "./header.css";

export default function Header() {
  const headerRef = useRef(null);

  // GSAP animation: header drops in from above
  // useEffect(() => {
  //   gsap.from(headerRef.current, {
  //     y: -200,
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power4.out"
  //   });
  // }, []);

  useEffect(() => {
    const menus = document.querySelectorAll(".delay-dropdown");
    const handlers = [];

    menus.forEach((menu) => {
      let hideTimer;
      const handleMouseEnter = () => {
        clearTimeout(hideTimer);
        menu.classList.add("open-now");
      };
      const handleMouseLeave = () => {
        hideTimer = setTimeout(() => {
          menu.classList.remove("open-now");
        }, 200);
      };

      menu.addEventListener("mouseenter", handleMouseEnter);
      menu.addEventListener("mouseleave", handleMouseLeave);

      handlers.push({ menu, handleMouseEnter, handleMouseLeave });
    });

    // Cleanup on unmount
    return () => {
      handlers.forEach(({ menu, handleMouseEnter, handleMouseLeave }) => {
        menu.removeEventListener("mouseenter", handleMouseEnter);
        menu.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  

  return (
    <header ref={headerRef} className="header">
      <nav className="nav">
        {/* Courses link - direct to /courses (no dropdown) */}
        <div className="dropdown-wrapper">
          <Link href="/courses" className="nav-btn">
            Our Courses
          </Link>
        </div>

        {/* Dropdown 2 */}
        <div className="menu-wrapper delay-dropdown">
          <button className="menu-btn">Our domain ▼</button>
          <ul className="dropdown-list">
            <li className="dropdown-item" onClick={() => {
              window.dispatchEvent(new CustomEvent('courseSection2:search', { detail: 'Full stack' }));
              window.location.href = '/courses#section2';
            }}>
              <span className="item-text">Full stack</span>
              <span className="item-arrow">➜</span>
            </li>
            <li className="dropdown-item" onClick={() => {
              window.dispatchEvent(new CustomEvent('courseSection2:search', { detail: 'Frontend' }));
              window.location.href = '/courses#section2';
            }}>
              <span className="item-text">Frontend</span>
              <span className="item-arrow">➜</span>
            </li>
            <li className="dropdown-item" onClick={() => {
              window.dispatchEvent(new CustomEvent('courseSection2:search', { detail: 'Backend' }));
              window.location.href = '/courses#section2';
            }}>
              <span className="item-text">Backend</span>
              <span className="item-arrow">➜</span>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        {/* Contact Button (link to contact page) */}
        <Link href="/contact-us" className="contact-btn">
          <div className="circle">
            <span className="arrow">→</span>
          </div>
          <span className="contact-text">Contact</span>
        </Link>
      </nav>
    </header>
  );
}
