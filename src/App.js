// // // import './App.css';
// // // import Navbar from './Components/Navbar';
// // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // import Homescreen from './Screens/Homescreen';
// // // import Bookingscreen from './Screens/Bookingscreen';
// // // import Registerscreen from './Screens/Registerscreen';
// // // import Loginscreen from './Screens/Loginscreen';
// // // import Profilescreen from './Screens/Profilescreen';
// // // import Adminscreen from './Screens/Adminscreen';
// // // import Mainscreen from './Screens/Mainscreen';
// // // import Landing from './Screens/Landingscreen';
// // // import Footer from './Components/Footer';

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <div className="App">
// // //         <Navbar />
// // //         <Routes>
// // //           <Route path='/home' element={<Homescreen />} />
// // //           <Route path='/book/:roomid/:fromDate/:toDate' element={<Bookingscreen />} />
// // //           <Route path='/register' element={<Registerscreen />} />
// // //           <Route path='/login' element={<Loginscreen />} />
// // //           <Route path='/bookings' element={<Profilescreen />} />
// // //           <Route path='/' element={<Adminscreen />} />
// // //           {/* <Route path='/main' element={<Mainscreen />} /> */}
// // //           <Route path='/landing' element={<Landing />} />
// // //         </Routes>
// // //         <Footer />
// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // export default App;
// // //app.js
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import AdminLogin from './Screens/AdminLogin'; // Adjust path as necessary
// // import AdminScreen from './Screens/AdminScreen'; // Adjust path as necessary
// // import LandingScreen from './Screens/Landingscreen'; // Adjust path as necessary
// // import Footer from './Components/Footer'; // Adjust path as necessary
// // import Navbar from './Components/Navbar'; // Adjust path as necessary
// // import Homescreen from './Screens/Homescreen';
// // import 'ionicons/dist/css/ionicons.min.css';


// // const App = () => {
// //     return (
// //         <Router>
// //             <Navbar />
// //             <Routes>
// //             <Route path="/home" element={<Homescreen />} />
// //                 <Route path="/landing" element={<LandingScreen />} />
// //                 <Route path="/" element={<AdminLogin />} />
// //                 <Route path="/dashboard" element={<AdminScreen />} />
               
// //             </Routes>
// //             <Footer />
// //         </Router>
// //     );
// // };

// // export default App;


// import React , {useEffect} from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import AdminLogin from './Screens/AdminLogin'; // Adjust path as necessary
// import AdminScreen from './Screens/AdminScreen'; // Adjust path as necessary
// import LandingScreen from './Screens/Landingscreen'; // Adjust path as necessary
// import Footer from './Components/Footer'; // Adjust path as necessary
// import Navbar from './Components/Navbar'; // Adjust path as necessary
// import Homescreen from './Screens/Homescreen';
// import 'ionicons/dist/css/ionicons.min.css';

// const App = () => {
// //   const isLoggedIn = !!localStorage.getItem('adminToken'); // Check if the admin is logged in
// useEffect(() => {
//     // Clear the admin token when the app starts
//     localStorage.removeItem('adminToken');
// }, []);
  
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/home" element={<Homescreen />} />
//         <Route path="/landing" element={<LandingScreen />} />
//         <Route path="/" element={<AdminLogin />} />
//         {/* Protect dashboard route */}
//         <Route path="/dashboard" element={isLoggedIn ? <AdminScreen /> : <Navigate to="/" />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;


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
