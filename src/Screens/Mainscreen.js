import React from 'react';
import image1 from "../Screens/images/a6d645110189895.5fe657ef098e6.jpg";


const Mainscreen = () => {
  return (
    <div className="bg-gray-100">
     
      
      {/* Hero Section */}
      <section className="min-h-screen bg-center bg-cover font-custom" style={{ backgroundImage: `url(${image1})` }}>
        <div className="flex items-center justify-center min-h-screen bg-gray-900 bg-opacity-10 ">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold">Welcome to Hotel Cassida</h2>
            <p className="mt-4 text-lg">Experience luxury and comfort</p>
            <button className="px-4 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600">Book Now</button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <main className="container px-6 py-8 mx-auto">
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Our Features</h2>
          <p className="mt-4 text-gray-600">Discover our hotel's top amenities</p>
        </section>
        
        <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Luxury Rooms</h3>
            <p className="mt-4 text-gray-600">Enjoy our spacious and well-furnished rooms.</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Fine Dining</h3>
            <p className="mt-4 text-gray-600">Savor gourmet meals prepared by top chefs.</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Exclusive Offers</h3>
            <p className="mt-4 text-gray-600">Take advantage of our special discounts and packages.</p>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="mt-12 bg-white shadow">
        <div className="container px-6 py-4 mx-auto text-center">
          <p className="text-gray-600">© 2024 Hotel Cassida. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Mainscreen;
