import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        if (event.target.value.length > 0) {
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    };

    const handleSelect = (city) => {
        setSearchTerm(city);
        setShowDropdown(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">Hall Booking</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/Bookings">BookingPage</Link></li>
            </ul>
            <div className="navbar-search">
                <input 
                    type="text" 
                    placeholder="Search City" 
                    value={searchTerm}
                    onChange={handleChange}
                />
                {showDropdown && (
                    <ul className="dropdown">
                        {cities.filter(city => city.toLowerCase().includes(searchTerm.toLowerCase())).map((city, index) => (
                            <li key={index} onClick={() => handleSelect(city)}>
                                {city}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;