import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, TrendingUp, HeartHandshake, Lightbulb } from 'lucide-react';
import PrasenjitImage from '../assets/images/PrasanjitSutar.jpg'; // adjust the path as needed
import KrishnaImage from '../assets/images/KrishnaDesai.jpg'; // adjust the path as needed
import SachinImage from '../assets/images/SachinChaudhary.jfif'; // adjust the path as needed


export default function Home() {
  const reasons = [
    {
      title: 'Creative Experts',
      description: 'Award-winning team skilled in content, strategy, and storytelling.',
      icon: <Lightbulb className="text-purple-600" size={36} />,
      bg: 'from-purple-100 to-purple-200',
    },
    {
      title: 'Proven Growth',
      description: 'We’ve scaled creators from 5K to 200K+ followers with real ROI.',
      icon: <TrendingUp className="text-yellow-600" size={36} />,
      bg: 'from-yellow-100 to-yellow-200',
    },
    {
      title: 'Client-Centric',
      description: 'Your goals drive our strategy. Always transparent, always committed.',
      icon: <HeartHandshake className="text-pink-600" size={36} />,
      bg: 'from-pink-100 to-pink-200',
    },
  ];
  const services = [
    {
      title: 'Social Media Management',
      description:
        'Boost engagement with platform-specific strategies, trend-driven content, and hands-on community building.',
      icon: <Sparkles size={32} className="text-yellow-600" />,
      bg: 'from-yellow-100 to-yellow-200',
    },
    {
      title: 'Video Editing',
      description:
        'Turn raw footage into scroll-stopping stories with cinematic cuts, effects, and platform-optimized formats.',
      icon: <Scissors size={32} className="text-green-600" />,
      bg: 'from-green-100 to-green-200',
    },
    {
      title: 'SEO & Growth',
      description:
        'Skyrocket visibility and engagement with search-optimized content, growth tactics, and data-driven campaigns.',
      icon: <TrendingUp size={32} className="text-blue-600" />,
      bg: 'from-blue-100 to-blue-200',
    },
  ];
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
      <section className="relative py-24 px-6 bg-gradient-to-br from-white via-indigo-50 to-white overflow-hidden">
      <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-gradient-to-tr from-pink-300 to-indigo-400 opacity-20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-blue-300 to-purple-400 opacity-20 rounded-full blur-3xl -z-10" />

      <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
        Our Expertise
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map(({ title, description, icon, bg }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className={`relative p-8 rounded-3xl shadow-2xl bg-gradient-to-br ${bg} transition-all hover:shadow-pink-200`}
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-700 leading-relaxed">{description}</p>
            <div className="absolute bottom-3 right-3 opacity-10 text-7xl font-black -z-10">
              {title.split(' ')[0]}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
      {/* Why Choose Us */}
      <section className="relative py-24 px-6 bg-white text-gray-800 overflow-hidden">
      {/* Background visuals */}
      <div className="absolute top-[-80px] left-[-60px] w-[250px] h-[250px] bg-gradient-to-br from-pink-300 to-purple-400 opacity-20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-80px] right-[-60px] w-[250px] h-[250px] bg-gradient-to-br from-yellow-300 to-indigo-300 opacity-20 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text"
        >
          Why SUV Fortune Vision?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg max-w-2xl mx-auto mb-12 text-gray-600"
        >
          Trusted by <strong>Sony</strong>, <strong>Jio Hotstar</strong>, and <strong>Myntra</strong> — with over 30 years of combined expertise,
          we drive bold digital success stories for creators and brands alike.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map(({ title, description, icon, bg }, i) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${bg} shadow-xl text-left transition`}
            >
              <div className="mb-4">{icon}</div>
              <h4 className="text-xl font-bold mb-2 text-gray-800">{title}</h4>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">Success Stories from Our Clients</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Krishna Desai",
              role: "Chief Product Officer, AniMeta.ai",
              story: "SUV Fortune Vision has been an incredible creative partner. Their professionalism, quick turnaround, and understanding of brand tone made the entire collaboration seamless and impactful.",
              image: KrishnaImage,
            },
            {
              name: "Prasenjit Sutar",
              role: "Founder at Creative XLNC",
              story: "Appreciate the professionalism and creativity the team brought to every project. It’s been a pleasure working with SUV Fortune Vision.",
              image: PrasenjitImage,
            },

            {
              name: "Sachin Chaudhary",
              role: "Musician",
              story: "With SUV Fortune Vision’s guidance, I grew my YouTube channel from 3K to 112K subscribers in just 7 months. Their content and growth strategy transformed my online presence.",
              image: SachinImage,
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
