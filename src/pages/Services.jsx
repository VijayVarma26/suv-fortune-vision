import React from 'react';

import { motion } from 'framer-motion';
import {
  Video,
  PenTool,
  BarChart,
  Share2,
  Youtube,
  DollarSign,
} from 'lucide-react';


export default function Services() {
  const services = [
    {
      title: 'Social Media Management',
      description: 'Full-service management for YouTube, Instagram, Facebook & Twitter.',
      color: 'from-blue-400 to-purple-500',
      icon: <Share2 size={28} />,
    },
    {
      title: 'Channel Management',
      description: 'End-to-end optimization and growth strategies for content channels.',
      color: 'from-pink-400 to-red-500',
      icon: <Youtube size={28} />,
    },
    {
      title: 'Video Editing',
      description: 'Cinematic, Reels, Vlogs or Shorts – we bring your vision to life.',
      color: 'from-green-400 to-teal-500',
      icon: <Video size={28} />,
    },
    {
      title: 'Content Writing',
      description: 'SEO-driven content creation that resonates with your audience.',
      color: 'from-yellow-400 to-orange-500',
      icon: <PenTool size={28} />,
    },
    {
      title: 'SEO Management',
      description: 'Boost your visibility and reach on search and social platforms.',
      color: 'from-indigo-400 to-blue-600',
      icon: <BarChart size={28} />,
    },
    {
      title: 'Platform Growth & Monetization',
      description: 'Monetize and expand your digital footprint with proven methods.',
      color: 'from-rose-400 to-pink-600',
      icon: <DollarSign size={28} />,
    },
  ];

  return (
    <div className="py-16 px-6 bg-gray-50 text-gray-800 min-h-screen">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Creative Services
      </motion.h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className={`relative rounded-xl p-6 bg-white text-gray-900 shadow-lg border-t-4 hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={`w-12 h-12 mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
