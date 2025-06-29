import React from 'react';
import { Link, NavLink } from 'react-router';
import { MdMenuOpen } from 'react-icons/md';
import icon from '../assets/nav.png';

const Navbar = () => {
  const nav = (
    <div className='flex gap-4 items-center'>
      <NavLink to='/' className={({isActive})=>isActive?'font-bold text-orange-500 text-lg':''}>Home</NavLink>
      <NavLink to='/services' className={({isActive})=>isActive?'font-bold text-orange-500 text-lg':''}>Services</NavLink>
      <NavLink to='/coverage' className={({isActive})=>isActive?'font-bold text-orange-500 text-lg':''}>Coverage</NavLink>
      <NavLink to='/aboutUs' className={({isActive})=>isActive?'font-bold text-orange-500 text-lg':''}>About US</NavLink>
      <NavLink to='/pricing' className={({ isActive }) => isActive ? 'font-bold text-orange-500 text-lg' : ''}>Pricing</NavLink>
      <NavLink to='/pricing' className='btn rounded-2xl bg-green-500 text-yellow-100'>Be A Rider</NavLink>
    </div>
 )
 
  const navEnd = (
    <div className='items-center gap-3 hidden md:flex'>
      <Link to='login' className='btn  text-white border-green-500 bg-green-500 '>Sign In</Link>
      <Link to='register' className='btn text-white border-green-500 bg-green-500 '>Sign Up</Link>
    </div>
  )
  const drawer = (
    <div className="drawer md:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="text-green-500 drawer-button">
          <MdMenuOpen />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex flex-col gap-3">
          {/* Sidebar content here */}
          <Link
            to="login"
            className="btn btn-outline w-34 text-center text-green-500 border-green-500 hover:bg-green-500 hover:text-white"
          >
            Sign In
          </Link>
          <Link
            to="register"
            className="btn btn-outline w-34 text-center text-green-500 border-green-500 hover:bg-green-500 hover:text-white"
          >
            Sign Up
          </Link>
          <NavLink className="btn w-34 rounded-2xl bg-green-500 text-yellow-100">
            Be A Rider
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'font-bold text-orange-500 text-lg' : ''
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'font-bold text-orange-500 text-lg' : ''
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/coverage"
            className={({ isActive }) =>
              isActive ? 'font-bold text-orange-500 text-lg' : ''
            }
          >
            Coverage
          </NavLink>
          <NavLink
            to="/aboutUs"
            className={({ isActive }) =>
              isActive ? 'font-bold text-orange-500 text-lg' : ''
            }
          >
            About US
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? 'font-bold text-orange-500 text-lg' : ''
            }
          >
            Pricing
          </NavLink>
        </ul>
      </div>
    </div>
  );
  return (
    <div className="navbar font-[Sora] sticky top-0 z-100 bg-white text-gray-800 mb-6 rounded-xl">
      <div className="navbar-start text-xl font-extrabold font-[Suse] flex items-center gap-2">
        <div className="mr-5">{drawer}</div>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <img src={icon} alt="DeshJure" />
          <h1>
            <span className="text-green-400">Desh</span>
            <span className="text-red-400">Jure</span>
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">{nav}</div>
      <div className="navbar-end">{navEnd}</div>
    </div>
  );
};

export default Navbar;