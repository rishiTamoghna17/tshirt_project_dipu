
// HeroSection.tsx
"use client";
import Link from 'next/link';
import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToUseClient = () => {
    const useClientSection = document.getElementById('shop');
    if (useClientSection) {
      useClientSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className=" py-16 " data-aos-duration="1000">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"data-aos="fade-down"
    
     data-aos-duration="1500">
          Welcome to My T-Shirt Shop
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-8 max-w-md" data-aos="zoom-in"
     data-aos-anchor-placement="bottom-bottom"data-aos-duration="1500">
          Discover the coolest t-shirt designs for every style and occasion.
        </p>
        <button
          onClick={scrollToUseClient}
          className="bg-blue-800 hover:bg-blue-600 text-white font-semibold text-lg py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="linear"
     data-aos-duration="1500"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
