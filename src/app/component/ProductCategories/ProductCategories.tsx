"use client"
// ProductCategories.tsx

import React from 'react';
import  Image from 'next/image'
const ProductCategories: React.FC = () => {
  const cardWidth = 320; // Adjust the card width as needed
const cardHeight = 240; // Adjust the card height as needed

  return (
    <section className=" py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Explore Our Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="p-4 bg-white rounded-lg shadow-md cursor-pointer ease-in-out delay-150 transform transition-transform hover:scale-110">
            <Image
              src="/DSC_3003.JPG"
              alt="Category 1"
              width={cardWidth}
              height={cardHeight}
              className="w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Category 1</h3>
            <p className="text-gray-600">Discover amazing t-shirts in this category.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md cursor-pointer ease-in-out delay-150 transform transition-transform hover:scale-110">
            <Image
              src="/DSC_3003.JPG"
              alt="Category 2"
              width={cardWidth}
              height={cardHeight}
              className="w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Category 2</h3>
            <p className="text-gray-600">Explore the latest trends in t-shirt fashion.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md cursor-pointer delay-150 ease-in-out transform transition-transform hover:scale-110">
            <Image
              src="/DSC_3003.JPG"
              alt="Category 3"
              width={cardWidth}
              height={cardHeight}
              className="w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Category 3</h3>
            <p className="text-gray-600">Find unique and stylish t-shirts for any occasion.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
