import React from 'react';
import './footer.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const footerLinks = [
  { label: "Programs", href: "/courses" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const footerLinksRight = [
  { label: "Admissions", href: "/contact-us" },
  { label: "Campus Life", href: "/about" },
  { label: "Contact", href: "/contact-us" },
];

const Footer = () => {
  return (
    <>
      <div className="footer-bg">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo-text">
              <div>
                <div className="footer-brand">
                  <img src="/g10.png" alt="IIDAD Logo" className="footer-logo-img" />
                </div>
                <div className="footer-subtext">
                  Shaping tomorrow through<br />design & development
                </div>
              </div>
            </div>
          </div>
          <div className="footer-divider" />
          <div className="footer-center">
            <div className="footer-links">
              <div>
                {footerLinks.map(link => (
                  <a className="footer-link" href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
              <div>
                {footerLinksRight.map(link => (
                  <a className="footer-link" href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-divider" />
          <div className="footer-right">
            <div className="footer-contact-info">
              <div>
                <a href="mailto:info@iidad.com" className="footer-contact-link">info@iidad.com</a>
              </div>
              <div>
                <a href="tel:+919205435653" className="footer-contact-link">+91 92054 35653</a>
              </div>
              <div>
                <a href="https://maps.google.com/?q=IIDAD+Campus,+New+Delhi" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                  IIDAD Campus, New Delhi<br />123 Design Street, Delhi, India
                </a>
              </div>
            </div>
            <div className="footer-icons" style={{ marginTop: 'auto', display: 'flex', gap: '16px' }}>
              <a href="https://instagram.com/iidad.in" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={32} />
              </a>
              <a href="https://linkedin.com/company/iidad" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright notice OUTSIDE footer box */}
      <div className="footer-legal">
        copyright@ iidad ,made with love by iidad
      </div>
    </>
  );
};

export default Footer;
