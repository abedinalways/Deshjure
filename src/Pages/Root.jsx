import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Root = () => {
  return (
    <div classNameName="px-10 mx-auto bg-gray-400 relative">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
