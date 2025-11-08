import React from "react";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-screen -mx-5 -my-5 min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#FFD4B8] via-[#FFCBA4] to-[#EEB09A] ">
        {/* Decorative dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-200 rounded-full opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yellow-200 rounded-full opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-yellow-200 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-yellow-200 rounded-full opacity-50"></div>

        {/* Main Content */}
        <div className="text-center px-4 max-w-5xl mx-auto">
          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
           
            <span className="text-gray-900">Growth.  </span>
            <span className="text-[#FF6B35]">Innovation. </span>
            <span className="text-gray-900">Technology.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with cutting-edge web & mobile development,
            robust cloud solutions, and captivating UI/UX design to drive
            success in the digital era.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-[#E77856] hover:bg-[#FF6B35] text-white font-semibold rounded-lg transition-colors duration-200 shadow-md">
              Our Services
            </button>
            <button className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-lg transition-colors duration-200 shadow-md">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
