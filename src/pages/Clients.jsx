import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Users } from 'lucide-react';

export default function Clients() {
  const topBrands = ['Sony', 'Jio Hotstar', 'Myntra'];
  const creators = [
    'Creator A',
    'Creator B',
    'Creator C',
    'Creator D',
    'Creator E',
    'Creator F',
    'Creator G',
    'Creator H',
    'Creator I',
    'Creator J',
  ];

  return (
    <div className="bg-gradient-to-b from-white to-indigo-50 py-20 px-6 text-gray-800">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Esteemed Clients
      </motion.h2>

      {/* Top Brands */}
      <motion.div
        className="max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-center text-indigo-700 flex justify-center items-center gap-2">
          <Users /> Top Brands
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {topBrands.map((brand, index) => (
            <motion.div
              key={brand}
              className="bg-white px-8 py-5 rounded-xl shadow-lg border border-indigo-200 text-indigo-700 text-lg font-semibold hover:shadow-xl hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.08 }}
              transition={{ delay: index * 0.1 }}
            >
              <Sparkles className="inline-block mr-2 text-pink-500" />
              {brand}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Creators Section */}
      <motion.div
        className="max-w-6xl mx-auto mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-center text-pink-600 flex justify-center items-center gap-2">
          <Users /> Individual Creators
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {creators.map((name, index) => (
            <motion.div
              key={index}
              className="bg-pink-100 text-pink-800 text-center p-4 rounded-lg shadow hover:bg-pink-200 transition-all font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.05 }}
            >
              {name}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Client Success Story */}
      <motion.div
        className="bg-white max-w-5xl mx-auto p-8 rounded-2xl shadow-xl border-l-4 border-pink-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center mb-4 text-pink-600 gap-2">
          <Trophy size={28} />
          <h4 className="text-xl font-bold">Client Success Story</h4>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          One of our most impactful collaborations was with <strong>Creator C</strong>. Starting with
          just 5K followers and no monetization, our team worked closely to develop a comprehensive
          content strategy, optimize SEO, and create visually captivating short-form videos. Within
          8 months, Creator C grew to <span className="font-semibold text-pink-600">200K+ followers</span>,
          secured brand deals with <strong>Myntra</strong>, and was featured on <strong>Jio Hotstar Originals</strong>.
          Today, they are a leading name in lifestyle content with a sustainable revenue stream.
        </p>
      </motion.div>
    </div>
  );
}
