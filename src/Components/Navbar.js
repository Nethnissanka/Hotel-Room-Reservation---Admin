


 // src/omponents/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Components/logo (1).png'; // Update the path to your logo file


function Navbar() {
  const navigate = useNavigate();
  const adminToken = localStorage.getItem('adminToken'); // Check if admin is logged in
  const adminUsername = localStorage.getItem('adminUsername'); // Get the admin's username

  const logOut = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUsername');
    navigate("/");
  };

  return (
    <nav className="p-3.5 bg-black opacity-85 sticky top-0 z-50 w-full overflow-hidden">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center space-x-2">
          <Link to="/admin/main" className="text-2xl font-bold text-white hover:text-gray-400">
            <img src={logo} alt="Logo" className="h-8 w-30" /> {/* Adjust height and width as needed */}
          </Link>
        </div>
        <div className="space-x-4 font-custom">
          <button onClick={() => navigate('/landing')} className="px-3 py-2 text-white rounded hover:bg-gray-700">Home</button>
          <button onClick={() => navigate('/home')} className="px-3 py-2 text-white rounded hover:bg-gray-700">Rooms</button>

          {adminToken && (
            <button onClick={() => navigate('/dashboard')} className="px-3 py-2 text-white rounded hover:bg-gray-700">Dashboard</button>
          )}

          {adminToken ? (
            <>
              {/* Dynamically display admin's username */}
              <span className="px-3 py-2 text-white">
                <i className='mr-2.5 text-xl fa fa-user'></i> {adminUsername}
              </span>
              <button onClick={logOut} className="px-3 py-2 text-white rounded hover:bg-gray-700">Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => navigate('/')} className="px-3 py-2 text-white rounded hover:bg-gray-700">Login</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
