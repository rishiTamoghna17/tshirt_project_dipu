
// HeroSection.tsx
"use client";
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          Welcome to My T-Shirt Shop
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-8 max-w-md">
          Discover the coolest t-shirt designs for every style and occasion.
        </p>
        <a
          href="#shop"
          className="bg-blue-800 hover:bg-blue-600 text-white font-semibold text-lg py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
