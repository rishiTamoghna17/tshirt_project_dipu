"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <h4 className="text-xl font-semibold mb-2">About Us</h4>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vehicula diam sit amet libero.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
            <p className="text-gray-300">Email: example@example.com</p>
            <p className="text-gray-300">Phone: +123 456 7890</p>
          </div>
          <div className="mb-4 flex flex-col items-center">
            <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4 ">
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-300">&copy; 2023 Your Website. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
