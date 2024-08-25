import React from "react";
import "../styles/Footer.css"; // Make sure this CSS file is created

// Importing the icon images
import instagramIcon from "../assets/insta.png";
import linkedinIcon from "../assets/Linkedin.png";
import googlePayIcon from "../assets/Gpay.png";
import paypalIcon from "../assets/paypal.png";
import usaFlagIcon from "../assets/us.png"; // Importing the USA flag icon
import masterCard from "../assets/mastercard.png"; // Importing the USA flag icon
import amex from "../assets/amex.png"; // Importing the USA flag icon
import applepay from "../assets/Applepay.png"; // Importing the USA flag icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="subscribe-section">
          <h4 className="footer-title">BE THE FIRST TO KNOW</h4>
          <p className="footer-text">Sign up for updates from mettā muse.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button className="text-sub">SUBSCRIBE</button>
          </div>
        </div>
        <div className="contact-section">
          <h4 className="footer-title">CONTACT US</h4>
          <p className="contact-no">+44 221 133 5360</p>
          <p className="contact-email">customercare@mettamuse.com</p>
          <h4 className="footer-title">CURRENCY</h4>
          <p style={{fontFamily:"Inter",}}>
            <img src={usaFlagIcon} alt="USA Flag" className="currency-flag" />{" "}
            USD
          </p>
          <p className="currency-note">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-column">
          <h4 className="footer-title-metta-muse">mettā muse</h4>
          <ul className="quick-links">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">QUICK LINKS</h4>
          <ul className="quick-links">
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-column-social">
          <h4 className="footer-title">FOLLOW US</h4>
          <div className="social-icons">
            <img src={instagramIcon} alt="Instagram" className="icon" />
            <img src={linkedinIcon} alt="LinkedIn" className="icon" />
          </div>
          <h4 className="footer-title-metta">mettā muse ACCEPTS</h4>
          <div className="payment-icons">
            <img
              src={googlePayIcon}
              alt="Google Pay"
              className="payment-icon"
            />
            <img src={paypalIcon} alt="PayPal" className="payment-icon" />
            <img src={amex} alt="PayPal" className="payment-icon" />
            <img src={applepay} alt="PayPal" className="payment-icon" />
            <img src={masterCard} alt="PayPal" className="payment-icon" />
            {/* Add more payment method icons as needed */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright-text">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
