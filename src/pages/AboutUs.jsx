import React from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket, Star } from 'lucide-react';

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Sanjay Vasankar',
      role: 'Founder & CEO',
      description: 'Strategic visionary with 20+ years of experience in media innovation.',
    },
    {
      name: 'Shaliendra Salunkhe',
      role: 'Head of Production',
      description: 'Expert in video editing and digital storytelling.',
    },
    {
      name: 'Ashwin Chinchkhede',
      role: 'Content Strategist',
      description: 'Crafts compelling narratives for brands and creators.',
    },
    {
      name: 'Rajesh Yadav',
      role: 'SEO & Monetization Lead',
      description: 'Drives visibility and revenue across digital platforms.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white py-16 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About SUV Fortune Vision
        </motion.h2>

        <motion.p
          className="text-lg text-center mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Based in Mumbai, SUV Fortune Vision is a dynamic and experienced digital media company.
          We specialize in social media management, video editing, content writing, SEO, and
          monetization strategies for top brands and individual creators.
        </motion.p>

        <motion.div
          className="bg-white shadow-xl rounded-lg p-8 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
            <Rocket className="text-indigo-600" /> Our Journey
          </h3>
          <p className="text-gray-700 leading-relaxed">
            With over 30+ years of collective experience in the media and entertainment industry,
            our team brings deep knowledge, passion, and innovation to every project. From handling
            major digital campaigns to building creator brands from scratch, we’ve helped shape
            online presences that thrive.
          </p>
        </motion.div>

        <motion.div
          className="bg-white shadow-xl rounded-lg p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-pink-600 mb-6 flex items-center gap-2">
            <Users className="text-pink-600" /> Meet the Core Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                className="bg-pink-100 text-pink-800 p-4 rounded-xl shadow hover:bg-pink-200 transition cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Star className="mx-auto mb-2 text-pink-500" />
                <h4 className="font-semibold text-lg">{member.name}</h4>
                <p className="text-sm font-medium text-pink-700">{member.role}</p>
                <p className="text-xs mt-1 text-pink-700">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
