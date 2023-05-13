import React from 'react';
import oneaiLogo from '../../logo.png';
import './footer.css';

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>
    <div className="footer-btn">
      <p>Request Early Access</p>
    </div>
    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={oneaiLogo} alt="ONE-AI_logo" />
        <p>Yongsoro 14, Namgu, Pusan, Korea <br /> All Rights Reserved</p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>Yongsoro 14, Namgu, Pusan, Korea</p>
        <p>051-000-0000</p>
        <p>info@website.net</p>
      </div>
    </div>
    <div className="footer-copyright">
      <p>@2021 ONE-AI. All rights reserved.</p>
    </div>
  </div>
);
export default Footer;