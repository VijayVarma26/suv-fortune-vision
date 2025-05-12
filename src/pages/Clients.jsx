import React from 'react';

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
    <div className="bg-white py-16 px-6 text-gray-800">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
        Our Esteemed Clients
      </h2>

      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-indigo-700">Top Brands</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {topBrands.map((brand) => (
              <div
                key={brand}
                className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-6 py-4 rounded-lg text-lg font-semibold shadow-md hover:scale-105 transition"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center text-pink-600">Individual Creators</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {creators.map((name, index) => (
              <div
                key={index}
                className="bg-pink-100 text-pink-800 text-center p-3 rounded-md shadow hover:bg-pink-200 transition"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
