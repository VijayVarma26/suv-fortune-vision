import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-28 px-6 text-center overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 opacity-30 rounded-full filter blur-3xl animate-pulse z-0" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-30 rounded-full filter blur-3xl animate-pulse z-0" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-indigo-500 opacity-20 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-0 animate-spin-slow" />

        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg"
          >
            SUV Fortune Vision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl max-w-2xl mx-auto mb-8"
          >
            We empower digital creators with expert services in video editing, brand strategy, and social media.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/services"
              className="bg-white text-pink-600 px-8 py-4 font-bold rounded-full shadow-xl hover:scale-105 transition"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: 'Social Media Management',
              description: 'Boost your engagement with strategic content and community handling.',
              color: 'from-yellow-100 to-yellow-300',
            },
            {
              title: 'Video Editing',
              description: 'Professional editing with storytelling that converts viewers into fans.',
              color: 'from-green-100 to-green-300',
            },
            {
              title: 'SEO & Growth',
              description: 'Rank higher, grow faster, and reach the audience you deserve.',
              color: 'from-blue-100 to-blue-300',
            },
          ].map(({ title, description, color }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${color} p-6 rounded-3xl shadow-xl transition-all`}
            >
              <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Why SUV Fortune Vision?</h2>
        <p className="max-w-2xl mx-auto mb-10 text-gray-600 text-lg">
          Trusted by Sony, Jio Hotstar, and Myntra — with 30+ years of combined experience, we deliver premium results with a client-first mindset.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="bg-purple-100 px-5 py-3 rounded-full font-semibold">Creative Experts</span>
          <span className="bg-pink-100 px-5 py-3 rounded-full font-semibold">Proven Growth</span>
          <span className="bg-yellow-100 px-5 py-3 rounded-full font-semibold">Client-Centric</span>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">Success Stories from Our Clients</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Riya Mehta",
              role: "Fashion Influencer",
              story: "With SUV Fortune Vision, my reels went from 5K to over 100K views. Their editing gave my brand a signature vibe!",
              image: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Arjun Bhatia",
              role: "Fitness Coach",
              story: "Their content strategy helped me grow from 8K to 50K followers in just 3 months. Engagement tripled!",
              image: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Tanya Verma",
              role: "Makeup Artist & Blogger",
              story: "From managing my posts to editing my YouTube videos, they transformed my online identity completely.",
              image: "https://randomuser.me/api/portraits/women/68.jpg",
            },
          ].map(({ name, role, story, image }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-pink-500"
              />
              <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
              <p className="text-sm text-gray-500 mb-4">{role}</p>
              <p className="text-gray-700 italic">“{story}”</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-pink-600 to-red-500 text-white py-20 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Let’s Grow Together 🚀
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="bg-white text-red-500 px-8 py-4 font-bold rounded-full shadow-lg hover:scale-105 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
