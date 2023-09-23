"use client"
import React from 'react'
import { useRouter } from "next/navigation";
type Props = {}

export default function AddToCartButton({}: Props) {
    const router = useRouter();
    const navigateTo = (href: string) => {
      router.push(href);
    };
  return (
    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300" onClick={() => navigateTo("/cart")}>
    Add to Cart
  </button>
  )
}