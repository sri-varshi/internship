import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>Hall Booking</h2>
                    <p>Book your hall easily and quickly. We provide a seamless and efficient service to make your events unforgettable.</p>
                    <div className="social-icons">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                           
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                           
                        </a>
                        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                            
                        </a>
                    </div>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <p>Email: support@hallbooking.com</p>
                    <p>Phone: +1 (234) 567-890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Hall Booking | All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;