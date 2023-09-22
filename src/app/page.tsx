"use client";
import Image from "next/image";
import HeroSection from "./component/HeroSection/Hero";
import Navbar from "./component/Navbar/Navbar";
import ImageCarousel from "./component/Carousel/ImageCarousel";
import ProductCategories from "./component/ProductCategories/ProductCategories";
import FeaturedProducts from "./component/FeaturedProducts/FeaturedProducts";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
export default function Home() {
useEffect(()=>{
  AOS.init()
})

 // Initialize the cart state with an empty array
 const [cart, setCart] = useState([]);

 // Function to add an item to the cart
 const addToCart = (item) => {
   setCart([...cart, item]);
 };
  return (
    <div className="mx-auto ">
     
        <HeroSection/>
        <ImageCarousel />
        <ProductCategories />
        <FeaturedProducts />
  
    </div>
  );
}
