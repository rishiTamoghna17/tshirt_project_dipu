"use client";
import Image from "next/image";
import HeroSection from "./component/HeroSection/Hero";
import Navbar from "./component/Navbar/Navbar";
import ImageCarousel from "./component/Carousel/ImageCarousel";
import ProductCategories from "./component/ProductCategories/ProductCategories";
import FeaturedProducts from "./component/FeaturedProducts/FeaturedProducts";
import { useState } from "react";

export default function Home() {
  const pages = [
    { component: <HeroSection />, title: 'Hero Section' },
    { component: <ProductCategories />, title: 'Product Categories' },
    { component: <FeaturedProducts />, title: 'Featured Products' },
    // Add more components as needed
  ];
  const [currentPage, setCurrentPage] = useState(0);

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? pages.length - 1 : prevPage - 1));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage === pages.length - 1 ? 0 : prevPage + 1));
  };
  return (
    <div className="mx-auto ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">{pages[currentPage].title}</h1>
        <div className="space-x-2">
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded-lg"
            onClick={prevPage}
          >
            Previous
          </button>
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded-lg"
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
      <div className="mt-4">{pages[currentPage].component}</div>
    </div>
  );
}

