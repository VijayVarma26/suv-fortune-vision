import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Empowering Digital Creators</h1>
        <p className="text-xl max-w-xl mx-auto mb-6">We grow your social media, enhance your brand, and fuel your digital journey.</p>
        <Link to="/services" className="bg-white text-pink-600 px-6 py-3 font-bold rounded-full shadow-lg hover:scale-105 transition">Explore Our Services</Link>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Social Media Management', color: 'bg-yellow-100' },
            { title: 'Video Editing', color: 'bg-green-100' },
            { title: 'SEO & Growth', color: 'bg-blue-100' },
          ].map(({ title, color }) => (
            <div key={title} className={`p-6 rounded-xl shadow-md ${color}`}>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm">Professional and customized support to grow your digital presence effectively.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose SUV Fortune Vision?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-600">
          With a team of 20+ experts and 30+ years of combined experience, we’ve worked with Sony, Jio Hotstar, Myntra, and more.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="bg-purple-100 px-4 py-2 rounded-full font-medium">Creative Team</span>
          <span className="bg-pink-100 px-4 py-2 rounded-full font-medium">Proven Results</span>
          <span className="bg-yellow-100 px-4 py-2 rounded-full font-medium">Client First</span>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Take Your Brand to the Next Level?</h2>
        <Link to="/contact" className="bg-white text-red-500 px-6 py-3 font-bold rounded-full shadow-lg hover:scale-105 transition">Contact Us</Link>
      </section>
    </div>
  );
}
