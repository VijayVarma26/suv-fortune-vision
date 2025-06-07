import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'; // Optional: install lucide-react

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
        {/* Company Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">SUV Fortune Vision</h3>
          <p>Empowering your future through strategic vision and innovative solutions.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/clients" className="hover:text-white transition">Clients</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Contact Us</h3>
          <p className="flex items-center gap-2"><Phone size={16} /> +91 99675 41459</p>
          <p className="flex items-center gap-2"><Mail size={16} /> contact@suvfortunevision.com</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
            {/* Add more social icons if needed */}
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs">
        &copy; {new Date().getFullYear()} SUV Fortune Vision. All rights reserved.
      </div>
    </footer>
  );
}
