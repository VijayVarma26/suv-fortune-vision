import React from 'react';

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-50 py-16 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
          Get In Touch With Us
        </h2>

        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Whether you're a creator looking to grow or a brand in need of a digital strategy,
          we’d love to hear from you. Drop us a message and our team will get back to you shortly.
        </p>

        <form className="bg-white shadow-xl rounded-lg p-8 grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Tell us how we can help you..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="text-center mt-12 text-gray-600">
          <p>📍 Mumbai, India</p>
          <p>📧 contact@suvfortunevision.com</p>
        </div>
      </div>
    </div>
  );
}
