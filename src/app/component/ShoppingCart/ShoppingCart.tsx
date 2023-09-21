"use client";
import React, { useState } from "react";
import Image from "next/image";
interface CartItem {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  discount: number;
  quantity: number;
}

const dummyCartData: CartItem[] = [
  {
    id: 1,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/DSC_3003.JPG",
    price: "19.99",
    discount: 60,
    quantity: 2,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/DSC_3003.JPG",
    price: "24.99",
    discount: 60,
    quantity: 1,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/DSC_3003.JPG",
    price: "24.99",
    discount: 60,
    quantity: 1,
  },
  // Add more cart items here
];

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(dummyCartData);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price) * item.quantity,
      0
    );
  };

  const increaseQuantity = (itemId: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (itemId: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  const removeItem = (itemId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-row items-center w-full justify-between ">
        <div className="flex items-center flex-col w-full">
          <div className="flex items-center justify-center w-full">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
              Shopping Cart
            </h2>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white flex flex-col items-center rounded-lg shadow-md p-4"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={320}
                    height={320}
                    className=" object-cover mx-auto rounded-t-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="text-blue-500 hover:text-blue-600 focus:outline-none"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="text-blue-500 hover:text-blue-600 focus:outline-none"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="text-red-500 hover:text-red-600 ml-4 focus:outline-none"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-xl font-semibold text-gray-800">
            Total Price: ${getTotalPrice().toFixed(2)}
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
