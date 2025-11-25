"use client";
import React, { useEffect, useState, useRef } from "react";
import "./header.css";
import gsap from "gsap";

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

  const [openMegaMenu, setOpenMegaMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track viewport changes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 752);
    };
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mega menu when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile) {
      setOpenMegaMenu(false);
    }
  }, [isMobile]);

  const handleMegaMenuToggle = () => {
    setOpenMegaMenu((prev) => !prev);
  };

  React.useEffect(() => {
    function handleClickOutside(event) {
      const dropdown = document.querySelector('.dropdown-wrapper');
      if (dropdown && !dropdown.contains(event.target)) {
        setOpenMegaMenu(false);
      }
    }
    if (openMegaMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMegaMenu]);

  return (
    <header ref={headerRef} className="header">
      <nav className="nav">
        {/* Dropdown 1 */}
        <div className={`dropdown-wrapper delay-dropdown${openMegaMenu ? " open-now" : ""}`}>
          <button
            className="nav-btn dropdown"
            onClick={handleMegaMenuToggle}
            aria-expanded={openMegaMenu}
            aria-haspopup="true"
          >
            Our Courses ▼
          </button>
          <ul className="mega-menu" style={{ display: openMegaMenu ? 'grid' : 'none' }}>
            <li>
              <a className="mega-item green">
                <div className="text-block">
                  <h3>Création de rebranding</h3>
                  <p>Pour une image en ligne avec vos objectifs</p>
                </div>
                <div className="arrow-box">→</div>
              </a>
            </li>
            <li>
              <a className="mega-item yellow">
                <div className="text-block">
                  <h3>Création de site web</h3>
                  <p>Une expérience de marque digitale</p>
                </div>
                <div className="arrow-box">→</div>
              </a>
            </li>
            <li>
              <a className="mega-item blue">
                <div className="text-block">
                  <h3>Campagnes et activation</h3>
                  <p>Le bon message pour la bonne personne</p>
                </div>
                <div className="arrow-box">→</div>
              </a>
            </li>
          </ul>
        </div>

        {/* Dropdown 2 */}
        <div className="menu-wrapper delay-dropdown">
          <button className="menu-btn">Our domain ▼</button>
          <ul className="dropdown-list">
            <li className="dropdown-item">
              <span className="item-text">UI / UX Design</span>
              <span className="item-arrow">➜</span>
            </li>
            <li className="dropdown-item">
              <span className="item-text">Web Development</span>
              <span className="item-arrow">➜</span>
            </li>
            <li className="dropdown-item">
              <span className="item-text">Marketing & Branding</span>
              <span className="item-arrow">➜</span>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        {/* Contact Button */}
        <button className="contact-btn">
          <div className="circle">
            <span className="arrow">→</span>
          </div>
          <span className="contact-text">Contact</span>
        </button>
      </nav>
    </header>
  );
}
