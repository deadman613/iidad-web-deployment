import React from 'react';
import './footer.css';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const footerLinks = [
  { label: "Programs", href: "/courses" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const footerLinksRight = [
  { label: "FAQ's", href: "/faq" },
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
                <a
                  href="https://www.google.com/search?q=Indian+Institute+of+Designing+And+Development&stick=H4sIAAAAAAAA_-NgU1IxqLAwMjVJtjRPNjNOS7IwsTS1MqhIMTVPMU81SDQyt0hLSrRYxKrrmZeSmZin4JlXXJJZUlqSqpCfpuCSWpyZnpeZl67gmJcC5JWl5uQX5KbmlQAAS7IfaFgAAAA&hl=en&mat=Ca2rS-OFzBqHElYBTVDHnmY-hKHXSszw9RzvTJT1hMqdwZyYUUf1PZnhyZ6WmS35TOBCppDMQEsrh0R8PPLJ-rI8sVrmNVQ7GOEyv1VfP5MHLmRO00Rl54zM4fwt75K4fw&authuser=0&zx=1767165057191&no_sw_cr=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  Spacetime Management Pvt Ltd Design House,<br />
                  behind Savitri Cinema Complex,<br />
                  Greater Kailash II, Chittaranjan Park,<br />
                  New Delhi, Delhi 110048
                </a>
              </div>
            </div>
            <div className="footer-icons" style={{ marginTop: 'auto', display: 'flex', gap: '16px', flexDirection: 'row' }}>
              <a href="https://www.instagram.com/iidad_officials/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={32} />
              </a>
              <a href="https://www.facebook.com/people/IIDAD/61581261069736/?sk=photos" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={32} />
              </a>
              <a href="https://www.linkedin.com/in/manaregr8/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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
