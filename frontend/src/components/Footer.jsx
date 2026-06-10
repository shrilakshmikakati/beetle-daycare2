import React from 'react';

const Footer = () => {
  return (
    <footer className="global-footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>Beetle Daycare</h3>
          <p>home of happy, healthy kids</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>(612) 450-3180</p>
          <p>sheilajayaswal727@gmail.com</p>
          <p>3541 43rd Avenue South</p>
          <p>Minneapolis, MN 55406</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Beetle Daycare. All rights reserved.</p>
      </div>
    </footer>
  );
};








export default Footer;
