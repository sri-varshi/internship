import logo from './logo.svg';

import './App.css';
import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Image from './components/Image';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import UserPage from './components/UserPage';
import CheckoutForm from './components/CheckoutForm';
import Navbar from './components/Navbar';
import BookingPage from './components/BookingPage';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user" element={<CheckoutForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Bookings" element={<BookingPage/>}/>
  
        </Routes>
        <Image/>
        <Footer/>
       </div>
       </BrowserRouter>

  );
}

export default App;