import React from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket, Star, Mail, Briefcase } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const teamMembers = [
  {
    name: 'Sanjay Vasankar',
    role: 'Founder & CEO',
    description: 'Strategic visionary with 15+ years of experience in media innovation.',
    photo: '/images/sanjay.jpg', // Replace with actual path
  },
  {
    name: 'Shaliendra Salunkhe',
    role: 'Head of Production',
    description: 'Expert in video editing and digital storytelling.',
    photo: '/images/shaliendra.jpg',
  },
  {
    name: 'Ashwin Chinchkhede',
    role: 'Content Strategist',
    description: 'Crafts compelling narratives for brands and creators.',
    photo: '/images/ashwin.jpg',
  },
  {
    name: 'Rajesh Yadav',
    role: 'SEO & Monetization Lead',
    description: 'Drives visibility and revenue across digital platforms.',
    photo: '/images/rajesh.jpg',
  },
];

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white py-16 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About SUV Fortune Vision
        </motion.h2>

        {/* Description */}
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

        {/* Journey Section */}
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

        {/* Team Carousel */}
        <motion.div
          className="bg-white shadow-xl rounded-lg p-8 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-pink-600 mb-6 flex items-center gap-2">
            <Users className="text-pink-600" /> Meet the Core Team
          </h3>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Pagination, Navigation]}
            className="teamSwiper"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.name}>
                <motion.div
                  className="bg-pink-100 text-pink-800 p-4 rounded-xl shadow hover:bg-pink-200 transition cursor-pointer h-full flex flex-col items-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mb-3 object-cover border-4 border-pink-300"
                  />
                  <h4 className="font-semibold text-lg">{member.name}</h4>
                  <p className="text-sm font-medium text-pink-700">{member.role}</p>
                  <p className="text-xs mt-1 text-pink-700 text-center">{member.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center py-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">Let’s Work Together</h3>
          <p className="text-gray-700 mb-6">
            Whether you’re a brand, a creator, or someone passionate about digital media—we’d love to hear from you.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:contact@suvfortunevision.com"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition flex items-center gap-2"
            >
              <Mail size={18} /> Contact Us
            </a>
            <a
              href="/careers"
              className="bg-pink-500 text-white px-6 py-3 rounded-full shadow hover:bg-pink-600 transition flex items-center gap-2"
            >
              <Briefcase size={18} /> Join Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
