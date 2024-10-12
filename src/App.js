

// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './Screens/AdminLogin'; // Adjust path as necessary
import AdminScreen from './Screens/AdminScreen'; // Adjust path as necessary
import LandingScreen from './Screens/Landingscreen'; // Adjust path as necessary
import Footer from './Components/Footer'; // Adjust path as necessary
import Navbar from './Components/Navbar'; // Adjust path as necessary
import Homescreen from './Screens/Homescreen';
import 'ionicons/dist/css/ionicons.min.css';

const App = () => {
    useEffect(() => {
        // Clear the admin token when the app starts
        localStorage.removeItem('adminToken');
    }, []);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Homescreen />} />
                <Route path="/landing" element={<LandingScreen />} />
                <Route path="/" element={<AdminLogin />} />
                <Route path="/dashboard" element={<AdminScreen />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
