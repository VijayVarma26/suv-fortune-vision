import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Users, TrendingUp, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function Clients() {
  const topBrands = ['Sony', 'MTV India', 'AniMeta.ai', 'Garner Broadcasting', 'Videshi Studio', 'Creative XLNC'];
  const creators = [
    'Sachin Chaudhary',
    'Dharti Singh',
    'Somi Saxena',
    'Tannu Saxena',
    'Niraj Nakil',
    'Omkar Narvekar',
    'Ridhi Pandya',
    'Anmol Arrora',
    'Sidhart Dubey',
    'Uzair Khan',
  ];
  const growthData = [
    { month: 'Month 1', followers: 5000 },
    { month: 'Month 2', followers: 12000 },
    { month: 'Month 3', followers: 38000 },
    { month: 'Month 4', followers: 75000 },
    { month: 'Month 5', followers: 140000 },
    { month: 'Month 6', followers: 200000 },
    { month: 'Month 7', followers: 280000 },
    { month: 'Month 8', followers: 334000 },
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

      <motion.div
  className="bg-white max-w-6xl mx-auto p-10 rounded-2xl shadow-xl border-l-4 border-pink-500"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Header */}
  <div className="flex items-center mb-4 text-pink-600 gap-2">
    <Trophy size={28} />
    <h4 className="text-xl font-bold">Client Success Story</h4>
  </div>

  {/* Story Description */}
  {/* Story Description */}
<p className="text-gray-700 text-lg leading-relaxed mb-8">
  One of our most impactful collaborations was with a lifestyle content creator who started with just 5K followers. Our team developed a comprehensive content strategy, optimized SEO, and produced visually captivating short-form videos. Within 8 months, their following grew to <span className="font-semibold text-pink-600">334K+</span>, they secured brand deals with <strong>Myntra</strong>, and were featured on <strong>Web Series</strong>. Today, they stand as a prominent name in the digital lifestyle space with a sustainable revenue stream.
</p>


  {/* Metrics Summary */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
    <div className="flex items-center gap-4 bg-pink-100 p-4 rounded-xl shadow">
      <Users className="text-pink-600" />
      <div>
        <p className="text-sm text-gray-600">Followers Gained</p>
        <p className="text-xl font-bold text-pink-700">+334K</p>
      </div>
    </div>
    <div className="flex items-center gap-4 bg-indigo-100 p-4 rounded-xl shadow">
      <DollarSign className="text-indigo-600" />
      <div>
        <p className="text-sm text-gray-600">Revenue Increase</p>
        <p className="text-xl font-bold text-indigo-700">+1200%</p>
      </div>
    </div>
    <div className="flex items-center gap-4 bg-green-100 p-4 rounded-xl shadow">
      <TrendingUp className="text-green-600" />
      <div>
        <p className="text-sm text-gray-600">Video Views</p>
        <p className="text-xl font-bold text-green-700">10M+</p>
      </div>
    </div>
  </div>

  {/* Growth Chart */}
  <div className="bg-gray-50 p-6 rounded-xl shadow">
    <h5 className="text-lg font-semibold text-gray-700 mb-4">Follower Growth Over Time</h5>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={growthData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="followers"
          stroke="#ec4899"
          strokeWidth={3}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</motion.div>
    </div>
  );
}
