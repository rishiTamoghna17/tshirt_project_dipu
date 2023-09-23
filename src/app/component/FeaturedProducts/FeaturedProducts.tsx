"use client";

// FeaturedProducts.tsx

import React, { useState } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  discount: number;
  description: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Product 1",
    image: "/DSC_3003.JPG",
    price: "19.99",
    discount: 60, // 60% off
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Product 2",
    image: "/DSC_3003.JPG",
    price: "24.99",
    discount: 60, // 60% off
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Product 3",
    image: "/DSC_3003.JPG",
    price: "29.99",
    discount: 60, // 60% off
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Product 4",
    image: "/DSC_3003.JPG",
    price: "39.99",
    discount: 60, // 60% off
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const FeaturedProducts: React.FC = () => {
  const [wishlistClicked, setWishlistClicked] = useState<boolean[]>(
    Array(featuredProducts.length).fill(false)
  );
  const { addToCart } = useCart();
  const handleWishlistClick = (index: number) => {
    const updatedWishlistClicked = [...wishlistClicked];
    updatedWishlistClicked[index] = !updatedWishlistClicked[index];
    setWishlistClicked(updatedWishlistClicked);
  };
  const addToCartClicked = (product: Product) => {
    toast("Item successfully added")
    // Here, you can call the addToCart function from CartContext
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      discount: product.discount,
      quantity: 1, // You can start with a quantity of 1, or adjust as needed
    });
  };

  return (
    <section className=" py-8 px-5" id="shop" data-aos="fade-up">
      <ToastContainer />
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform delay-150 ease-in-out transition-transform hover:scale-110 cursor-pointer"
            >
              <Link href={`/dashboard/${product.id}`}>
              <Image
                src={product.image}
                alt={product.name}
                height={320} // Adjust image height as needed
                width={320} // Adjust image width as needed
                className="w-full  object-cover"
              />
               </Link>
              <div  className="p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <p className={`text-gray-600 truncate`}>
                      {product.description.slice(0, 40)}...
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-amber-300 rounded">
                  <div className="flex items-center ml-1">
                    <span className="text-xl font-bold ">
                      $
                      {(
                        parseFloat(product.price) *
                        (1 - product.discount / 100)
                      ).toFixed(2)}
                    </span>
                    <span className="text-sm font-bold text-slate-500 line-through m-2">
                      ${Number(product.price).toFixed(2)}
                    </span>
                    <span className="text-lg font-semibold text-red-500 m-2">
                      {(product.discount).toFixed(2)}% OFF
                    </span>
                  </div>
                  <div className="flex items-center mr-1">
                    <button
                      className={`focus:outline-none transform transition-transform hover:scale-110`}
                      onClick={() => handleWishlistClick(index)}
                    >
                      {wishlistClicked[index] ? (
                        <FaHeart size={24} color="red" />
                      ) : (
                        <AiOutlineHeart size={24} color="red" />
                      )}
                    </button>
                  </div>
                </div>
               
                <div className="mt-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300" onClick={() => addToCartClicked(product)}>
                    Add to Cart
                  </button>
                  
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
