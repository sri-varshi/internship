import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Hall Booking</h1>
                <p>Book your hall easily and quickly.</p>
            </header>
            <section className="home-section">
                <div className="home-image">
                    <img src="images/download (1).jpg" alt="Hall 1" />
                </div>
                <div className="home-text">
                    <h2>Elegant Venues</h2>
                    <p>Discover elegant halls perfect for weddings, conferences, and events.</p>
                </div>
            </section>
            <section className="home-section">
                <div className="home-image">
                    <img src="images/download.jpg" alt="Hall 2" />
                </div>
                <div className="home-text">
                    <h2>Modern Amenities</h2>
                    <p>Our halls are equipped with modern amenities to ensure your event runs smoothly.</p>
                </div>
            </section>
            <section className="home-section">
                <div className="home-image">
                    <img src="images/images (1).jpg" alt="Hall 3" />
                </div>
                <div className="home-text">
                    <h2>Prime Locations</h2>
                    <p>Choose from a variety of prime locations to host your next big event.</p>
                </div>
            </section>
           
        </div>
    );
}

export default Home;