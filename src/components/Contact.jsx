import React from 'react';
import './Contact.css';


function Contact() {
    return (
        <div className="contact-container">
            <header className="contact-header">
                <h1>Contact Us</h1>
                <p>Get in touch with us for any queries.</p>
            </header>
            <section className="contact-section">
                <div className="contact-map">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1263465393666!2d144.9537353156684!3d-37.81720974246868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5e8d1d7d7b%3A0x8a63c4b4b1f1e8f6!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1616168313275!5m2!1sen!2sau"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="contact-info">
                    <h2>Our Address</h2>
                    <p>123 Hall Booking St, Event City, EC 12345</p>
                    <h2>Contact Information</h2>
                    <p>Email: support@hallbooking.com</p>
                    <p>Phone: +1 (234) 567-890</p>
                    <div className="contact-icons">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        
                        </a>
                        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                            
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;