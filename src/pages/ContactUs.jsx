import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, SendHorizonal, User, MessageSquare } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-br from-white via-indigo-50 to-pink-50 py-20 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Connect ✨
        </motion.h2>

        <motion.p
          className="text-lg text-center mb-12 max-w-2xl mx-auto text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Are you a creator looking to scale or a brand eager to shine digitally? Our team is ready to co-create your next big success.
        </motion.p>

        <motion.form
          className="bg-white shadow-2xl rounded-3xl px-10 py-12 grid gap-8 border-t-8 border-indigo-400"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 flex items-center gap-2">
                <User size={18} className="text-indigo-500" /> Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 flex items-center gap-2">
                <Mail size={18} className="text-indigo-500" /> Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 flex items-center gap-2">
              <MessageSquare size={18} className="text-indigo-500" /> Message
            </label>
            <textarea
              rows="5"
              placeholder="Tell us how we can help you..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 transition"
            >
              <SendHorizonal size={18} /> Send Message
            </button>
          </div>
        </motion.form>

        <motion.div
          className="text-center mt-14 text-gray-600 space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="flex justify-center items-center gap-2 text-sm">
            <MapPin size={16} className="text-pink-500" /> Mumbai, India
          </p>
          <p className="flex justify-center items-center gap-2 text-sm">
            <Mail size={16} className="text-indigo-500" /> contact@suvfortunevision.com
          </p>
        </motion.div>
      </div>
    </div>
  );
}
