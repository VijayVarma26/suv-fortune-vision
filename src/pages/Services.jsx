import React from 'react';

export default function Services() {
  const services = [
    {
      title: 'Social Media Management',
      description: 'Full-service management for YouTube, Instagram, Facebook & Twitter.',
      color: 'from-blue-400 to-purple-500',
    },
    {
      title: 'Channel Management',
      description: 'End-to-end optimization and growth strategies for content channels.',
      color: 'from-pink-400 to-red-500',
    },
    {
      title: 'Video Editing',
      description: 'Cinematic, Reels, Vlogs or Shorts – we bring your vision to life.',
      color: 'from-green-400 to-teal-500',
    },
    {
      title: 'Content Writing',
      description: 'SEO-driven content creation that resonates with your audience.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      title: 'SEO Management',
      description: 'Boost your visibility and reach on search and social platforms.',
      color: 'from-indigo-400 to-blue-600',
    },
    {
      title: 'Platform Growth & Monetization',
      description: 'Monetize and expand your digital footprint with proven methods.',
      color: 'from-rose-400 to-pink-600',
    },
  ];

  return (
    <div className="py-16 px-6 bg-gray-50 text-gray-800">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-400">
        Our Creative Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.title}
            className={`bg-gradient-to-r ${service.color} text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300`}
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
