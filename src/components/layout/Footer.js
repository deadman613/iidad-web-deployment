import React from 'react';
import './footer.css';
import { FaInstagram, FaBehance, FaLinkedin } from 'react-icons/fa';

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
            <div className="footer-icons">
              <FaInstagram size={32} />
              <FaBehance size={32} />
              <FaLinkedin size={32} />
            </div>
          </div>
        </div>
      </div>
      {/* Legal notice OUTSIDE footer box */}
      <div className="footer-legal">
        Legal Notice
      </div>
    </>
  );
};

export default Footer;
