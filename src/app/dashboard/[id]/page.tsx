import React from 'react'
import Image from 'next/image'
import ImageGallery from '../ImageGallery'

export default function page({params}:{params:{id:string}}) {
  const product ={
    id: 1,
    name: "Product 1",
    image: ["/DSC_3003.JPG", "/DSC_3020.JPG", "/DSC_3021.JPG","/DSC_3020.JPG","/DSC_3021.JPG","/DSC_3020.JPG","/DSC_3021.JPG"],
    price: "19.99",
    discount: 60, // 60% off
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }
  return (
    <div> <div className="container mx-auto mt-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <ImageGallery imageUrls = {product.image}/>
      </div>
      <div>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          {product.name}
        </h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-xl font-semibold mt-4">${product.price}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300">
          Add to Cart
        </button>
      </div>
    </div>
  </div></div>
  )
}