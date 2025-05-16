import React from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket, Star, Mail, Briefcase, Sparkles, TrendingUp, Handshake } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'tailwindcss/tailwind.css';

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

const getMemberBio = (name) => {
  switch (name) {
    case 'Sanjay Vasankar':
      return `Sanjay brings over 15 years of visionary leadership to SUV Fortune Vision. As Founder & CEO, he’s known for launching breakthrough digital campaigns, guiding major media houses and content creators toward unmatched success. His forward-thinking strategies have defined new paradigms in entertainment marketing, storytelling, and monetization.`;
    case 'Shaliendra Salunkhe':
      return `With a deep eye for cinematic storytelling and years of experience behind the editing desk, Shaliendra leads our production vertical. His finesse in editing and post-production has shaped viral content and award-winning digital series, pushing creative boundaries in short-form media.`;
    case 'Ashwin Chinchkhede':
      return `Ashwin is the narrative powerhouse of our team. He crafts content strategies that don’t just speak, but resonate. From brand storytelling to influencer engagement, he aligns creativity with business outcomes to create compelling campaigns that stand out in today’s saturated digital landscape.`;
    case 'Rajesh Yadav':
      return `Rajesh is a data-driven digital growth specialist. As our SEO and Monetization Lead, he ensures content not only reaches the right audience but also drives real results. With a keen grasp of platform algorithms and ad ecosystems, he turns creative assets into revenue-generating engines.`;
    default:
      return `This team member is an integral part of our journey, contributing expertise and energy to everything we do.`;
  }
};

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


{/* Our Journey Section */}
{/* Our Journey Section */}
<motion.div
  className="bg-white shadow-2xl rounded-2xl p-10 mb-16 border-l-8 border-indigo-500"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="flex items-center gap-2 text-indigo-600 mb-4">
    <Rocket size={28} />
    <h3 className="text-3xl font-bold">Our Journey: Powered by Experience, Driven by Innovation</h3>
  </div>

  <p className="text-gray-700 text-lg leading-relaxed mb-6">
    With over <strong>three decades of collective experience</strong> in the dynamic world of media and entertainment,
    <strong> SUV Fortune Vision</strong> has grown into a force of creativity, strategy, and digital evolution.
  </p>

  <div className="space-y-6">
    <div className="flex items-start gap-4">
      <Users className="text-indigo-500 mt-1" size={22} />
      <p className="text-gray-700 text-base">
        <strong>30+ years of combined expertise</strong> in content creation, digital strategy, brand storytelling,
        and production excellence.
      </p>
    </div>

    <div className="flex items-start gap-4">
      <TrendingUp className="text-green-500 mt-1" size={22} />
      <p className="text-gray-700 text-base">
        Successfully executed <strong>100+ campaigns</strong> across brands, OTT platforms, and digital influencers.
      </p>
    </div>

    <div className="flex items-start gap-4">
      <Sparkles className="text-pink-500 mt-1" size={22} />
      <p className="text-gray-700 text-base">
        <strong>Transformed creator journeys</strong>—from zero visibility to building 6- and 7-figure digital communities.
      </p>
    </div>

    <div className="flex items-start gap-4">
      <Rocket className="text-purple-500 mt-1" size={22} />
      <p className="text-gray-700 text-base">
        Early adopters of <strong>cutting-edge tech</strong> like AI-driven tools, short-form automation, and audience analytics.
      </p>
    </div>

    <div className="flex items-start gap-4">
      <Handshake className="text-yellow-500 mt-1" size={22} />
      <p className="text-gray-700 text-base">
        Rooted in a <strong>client-first philosophy</strong>—offering custom, hands-on, and result-focused solutions.
      </p>
    </div>
  </div>

  <p className="mt-8 text-gray-800 text-lg font-medium">
    We don’t just deliver content—we <span className="text-indigo-600 font-semibold">craft digital legacies</span>.
  </p>
</motion.div>



        {/* Team Section */}
<motion.div
  className="bg-white shadow-xl rounded-lg p-8 mb-16"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.2, duration: 0.6 }}
>
  <h3 className="text-2xl font-bold text-pink-600 mb-8 flex items-center gap-2">
    <Users className="text-pink-600" /> Meet the Core Team
  </h3>

  <div className="space-y-12">
    {teamMembers.map((member, index) => (
      <motion.div
        key={member.name}
        className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-pink-50 p-6 rounded-xl shadow-md"
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <img
          src={member.photo || 'https://via.placeholder.com/300x300'}
          alt={member.name}
          className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-2xl shadow-lg"
        />
        <div className="flex-1 text-left">
          <h4 className="text-xl md:text-2xl font-bold text-pink-700">{member.name}</h4>
          <p className="text-pink-600 font-medium text-lg mb-4">{member.role}</p>
          <p className="text-gray-700 text-base leading-relaxed">
            {getMemberBio(member.name)}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
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
