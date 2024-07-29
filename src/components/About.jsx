import React from 'react';
import './About.css';


function About() {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>About Us</h1>
                <p>Learn more about our hall booking services.</p>
            </header>
            <section className="about-section">
                <div className="about-image">
                    <img src="../images/download (1).jpg" alt="Our Mission" />
                </div>
                <div className="about-text">
                    <h2>Our Mission</h2>
                    <p>Our mission is to provide seamless and efficient hall booking services to make your events unforgettable. We offer a wide range of venues equipped with modern amenities to suit all your needs.</p>
                </div>
            </section>
            <section className="about-section">
                <div className="about-image">
                    <img src="../images/download.jpg" alt="Why Choose Us" />
                </div>
                <div className="about-text">
                    <h2>Why Choose Us</h2>
                    <ul>
                        <li>Wide range of venues</li>
                        <li>Affordable pricing</li>
                        <li>Easy and quick booking process</li>
                        <li>Modern amenities</li>
                        <li>Prime locations</li>
                    </ul>
                </div>
            </section>
            <section className="about-section">
                <div className="about-image">
                    <img src="../images/images (1).jpg" alt="Contact Information" />
                </div>
                <div className="about-text">
                    <h2>Contact Information</h2>
                    <p>If you have any questions or need further assistance, feel free to reach out to us:</p>
                    <p>Email: support@hallbooking.com</p>
                    <p>Phone: +1 (234) 567-890</p>
                </div>
            </section>
        </div>
    );
}

export default About;