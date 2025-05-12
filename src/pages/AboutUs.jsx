import React from 'react';

export default function AboutUs() {
  const teamMembers = [
    'Sanjay Vasankar',
    'Shaliendra Salunkhe',
    'Ashwin Chinchkhede',
    'Rajesh Yadav',
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white py-16 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
          About SUV Fortune Vision
        </h2>

        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Based in Mumbai, SUV Fortune Vision is a dynamic and experienced digital media company.
          We specialize in social media management, video editing, content writing, SEO, and
          monetization strategies for top brands and individual creators.
        </p>

        <div className="bg-white shadow-xl rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">Our Journey</h3>
          <p className="text-gray-700 leading-relaxed">
            With over 30+ years of collective experience in the media and entertainment industry,
            our team brings deep knowledge, passion, and innovation to every project. From handling
            major digital campaigns to building creator brands from scratch, we’ve helped shape
            online presences that thrive.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8">
          <h3 className="text-2xl font-bold text-pink-600 mb-4">Meet the Core Team</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {teamMembers.map((member) => (
              <li
                key={member}
                className="bg-pink-100 text-pink-800 px-4 py-3 rounded-lg shadow hover:bg-pink-200 transition"
              >
                {member}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
