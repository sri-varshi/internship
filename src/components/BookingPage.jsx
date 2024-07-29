// src/components/BookingPage.jsx

import React, { useState } from 'react';
import './BookingPage.css';

const BookingPage = () => {
    const [selectedHall, setSelectedHall] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [cateringOption, setCateringOption] = useState('');

    const handleBooking = (event) => {
        event.preventDefault();
        // Add your booking logic here
        alert('Booking submitted!');
    };

    return (
        <div className="booking-page">
            <h1>Book Your Hall</h1>
            <form className="booking-form" onSubmit={handleBooking}>
                <div className="form-group">
                    <label htmlFor="hall">Select Hall:</label>
                    <select
                        id="hall"
                        value={selectedHall}
                        onChange={(e) => setSelectedHall(e.target.value)}
                        required
                    >
                        <option value="">Select a Hall</option>
                        <option value="hall1">Hall 1</option>
                        <option value="hall2">Hall 2</option>
                        <option value="hall3">Hall 3</option>
                        {/* Add more halls as needed */}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="date">Select Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={selectedDate.toISOString().split('T')[0]}
                        onChange={(e) => setSelectedDate(new Date(e.target.value))}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="guests">Number of Guests:</label>
                    <input
                        type="number"
                        id="guests"
                        min="1"
                        value={numberOfGuests}
                        onChange={(e) => setNumberOfGuests(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Catering Options:</label>
                    <div className="catering-options">
                        <label>
                            <input
                                type="radio"
                                name="catering"
                                value="basic"
                                checked={cateringOption === 'basic'}
                                onChange={(e) => setCateringOption(e.target.value)}
                            />
                            Basic
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="catering"
                                value="premium"
                                checked={cateringOption === 'premium'}
                                onChange={(e) => setCateringOption(e.target.value)}
                            />
                            Premium
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="catering"
                                value="luxury"
                                checked={cateringOption === 'luxury'}
                                onChange={(e) => setCateringOption(e.target.value)}
                            />
                            Luxury
                        </label>
                    </div>
                </div>

                <button type="submit">Submit Booking</button>
            </form>
        </div>
    );
};

export default BookingPage;
