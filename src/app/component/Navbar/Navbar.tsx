"use client";
// Header.tsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { IoLogInOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [cartCount, setCartCount] = useState(0);
  const { cartItems } = useCart(); 
  const router = useRouter();
  const cartCount = cartItems.length;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (href: string) => {
    router.push(href);
    setIsOpen(false); // Close the mobile menu after navigation
  };

 

  return (
    <header className="bg-gradient-to-b from-blue-900 via-blue-600 to-blue-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-3xl text-white font-extrabold tracking-wider"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          My T-Shirt Shop
        </h1>
        <div
          className=" hidden md:flex  w-[40%] bg-gray-100 p-2 rounded-lg"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <input
            type="text"
            className="outline-none w-full bg-transparent placeholder-gray-600 text-sm"
            placeholder="Search"
            autoComplete="false"
          />
          <button className="search-button transform hover:translate-x-3">
            <BiSearch size={20} className="text-gray-500" />
          </button>
        </div>
        <nav className="hidden md:flex space-x-10">
          <NavItem onClick={() => navigateTo("/")}>
            <AiOutlineHome size={30} className="text-white" />
            <span className="text-white hover:text-gray-300 cursor-pointer capitalize">
              Home
            </span>
          </NavItem>
          <NavItem onClick={() => navigateTo("/cart")}>
            <BsCart size={30} className="text-white" />
            <span className="text-white hover:text-gray-300 text-sm cursor-pointer capitalize">
              Cart
            </span>
            {cartCount > 0 && (
            <span className= "text-white text-xs bottom-11  relative">
              {cartCount}
            </span>
            )}
          </NavItem>
          <NavItem onClick={() => navigateTo("/login")}>
            <IoLogInOutline size={30} className="text-white" />
            <span className="text-white hover:text-gray-300 cursor-pointer capitalize">
              Login
            </span>
          </NavItem>
          <NavItem onClick={() => navigateTo("/wishlist")}>
            <FaRegHeart size={30} className="text-white" />
            <span className="text-white hover:text-gray-300 cursor-pointer capitalize">
              Wishlist
            </span>
          </NavItem>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}  mt-4`}>
        <ul className="flex items-center justify-between text-white text-sm ">
          <NavItem onClick={() => navigateTo("/")} mobile>
            <AiOutlineHome size={24} className="text-white" />
            <span className="text-white hover:text-gray-300 cursor-pointer capitalize">
              Home
            </span>
          </NavItem>
          <NavItem onClick={() => navigateTo("/cart")} mobile>
            <BsCart size={30} className="text-white" />
            <span className="text-white hover:text-gray-300 cursor-pointer left-2 relative capitalize">
              Cart
              {cartCount > 0 && (
              <span className=" text-white text-xs bottom-7 right-5   relative">
                {cartCount}
              </span>
              )}
            </span>
              
          </NavItem>
          <NavItem onClick={() => navigateTo("/login")} mobile>
            <IoLogInOutline size={30} className="text-white" />
            <span className="text-white hover:text-gray-300 cursor-pointer capitalize">
              Login
            </span>
          </NavItem>
          <NavItem onClick={() => navigateTo("/wishlist")} mobile>
            <FaRegHeart size={30} className="text-white" />
            <span className="text-white hover:text-gray-300 cursor-pointer capitalize">
              Wishlist
            </span>
          </NavItem>
        </ul>
        <div className="flex items-center bg-gray-100 p-2 rounded-lg mt-4">
          <input
            type="text"
            className="outline-none w-full bg-transparent placeholder-gray-600 text-sm"
            placeholder="Search"
            autoComplete="false"
          />
          <button>
            <BiSearch size={20} className="text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
};

// Create a custom NavItem component for handling navigation
const NavItem: React.FC<{ onClick: () => void; mobile?: boolean }> = ({
  onClick,
  mobile,
  children,
}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer flex transition-all ${
        mobile ? "py-2" : "space-x-2"
      } transition-transform transform-gpu group hover:scale-110`}
    >
      <span
        className="relative group flex flex-col items-center"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        {children}
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
      </span>
    </div>
  );
};

export default Navbar;
