import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        SUV Fortune Vision
      </Link>
      <div className="space-x-6">
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-indigo-500 font-semibold' : 'hover:text-indigo-500'}>Home</NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? 'text-indigo-500 font-semibold' : 'hover:text-indigo-500'}>Services</NavLink>
        <NavLink to="/clients" className={({ isActive }) => isActive ? 'text-indigo-500 font-semibold' : 'hover:text-indigo-500'}>Clients</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-indigo-500 font-semibold' : 'hover:text-indigo-500'}>About Us</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-indigo-500 font-semibold' : 'hover:text-indigo-500'}>Contact</NavLink>
      </div>
    </nav>
  );
}
