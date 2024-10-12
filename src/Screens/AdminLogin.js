

// src/Screens/AdminLogin.js

import React, { useState } from 'react';
import axios from 'axios';
import Loader from '../Components/Loader'; // Import your Loader component
import Error from '../Components/Error'; // Import your Error component
import backgroundImage1 from '../Screens/images/Background1.jpg';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    
    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            setLoading(true);
            const response = await axios.post('https://hotel-room-reservation-backend.onrender.com/api/admin/login', {
                username,
                password,
            });
            setLoading(false);
    
            if (response.data.success) {
                localStorage.setItem('adminToken', response.data.token);
                localStorage.setItem('adminUsername', username); // Save admin's username
                window.location.href = '/dashboard'; // Update this with your actual route
            } else {
                setError('Invalid admin credentials');
            }
        } catch (err) {
            setLoading(false);
            setError('Invalid admin credentials');
        }
    };
    

    return (
        <div 
            className="flex items-center justify-center min-h-screen bg-center bg-cover backdrop-blur" 
            style={{ backgroundImage: `url(${backgroundImage1})` }}
        >
            {loading && <Loader />}
            <div className="w-full max-w-md p-8 space-y-6 bg-transparent border border-gray-600 rounded-lg shadow-lg backdrop-blur-sm font-custom bg-opacity-70">
                {error && <Error message={error} />}
                <h1 className="text-3xl font-bold text-center text-white font-custom">Admin Login</h1>
                <div className="mt-4 space-y-6">
                    <input
                        type="text"
                        className="w-full px-4 py-2 placeholder-gray-400 transition duration-300 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'} // Toggle between text and password
                            className="w-full px-4 py-2 placeholder-gray-400 transition duration-300 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="absolute text-gray-500 transform -translate-y-1/2 right-3 top-1/2"
                            onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                        >
                            <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        </button>
                    </div>
                    <button
                        className="w-full px-4 py-2 mt-6 font-semibold text-white transition duration-300 rounded-lg bg-neutral-700 hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
