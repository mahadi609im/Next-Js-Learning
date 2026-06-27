import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-[#0a0a0a] border-b border-gray-900 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E63900] opacity-20 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF8C00] opacity-10 rounded-full blur-[150px]"></div>

      <div className="text-center z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Cooking Made{' '}
          <span className="text-[#FF8C00] drop-shadow-[0_0_15px_rgba(255,140,0,0.6)]">
            Simple & Fun
          </span>
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Discover thousands of delicious recipes, personalized meal plans, and
          expert tips to make every meal a masterpiece.
        </p>

        <div className="flex gap-4 justify-center">
          {/* Glowing Primary Button */}
          <button className="px-8 py-3 bg-[#E63900] text-white font-semibold rounded-full hover:bg-[#ff4500] transition-all shadow-[0_0_20px_rgba(230,57,0,0.4)] hover:shadow-[0_0_30px_rgba(230,57,0,0.6)]">
            Start Cooking
          </button>

          {/* Secondary Button with subtle border glow */}
          <button className="px-8 py-3 bg-transparent text-white font-semibold rounded-full border border-gray-700 hover:border-[#FF8C00] transition-all hover:shadow-[0_0_15px_rgba(255,140,0,0.2)]">
            Browse Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
