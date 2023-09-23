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
  {
    id: 4,
    name: "Product 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/DSC_3003.JPG",
    price: "24.99",
    discount: 60,
    quantity: 1,
  },
  {
    id: 5,
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
    <div className="container mx-auto my-8">
      <div className="flex items-center px-5">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
          My Bag
          <span className="text-2xl font-bold"> {cartItems.length} items</span>
        </h2>
      </div>
      <div className="flex flex-row  w-full justify-between ">
        <div className="flex items-center flex-col w-[60%] ml-5">
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-6 w-full">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white flex flex-row  justify-between rounded-lg shadow-md p-4 bg"
                  data-aos="fade-up"
                >
                  <div className="flex flex-col items-center">
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
                  </div>
                  <div className="flex flex-col items-end gap-5">
                    <p>{item.description}</p>
                    <div className="flex items-center ml-1">
                      <span className="text-xl font-bold ">
                        $
                        {(
                          parseFloat(item.price) *
                          (1 - item.discount / 100)
                        ).toFixed(2)}
                      </span>
                      <span className="text-sm font-bold text-slate-500 line-through m-2">
                        ${Number(item.price).toFixed(2)}
                      </span>
                      <span className="text-lg font-semibold text-red-500 m-2">
                        {item.discount.toFixed(2)}% OFF
                      </span>
                    </div>
                    <div className="flex items-center mt-2 p-1 justify-center  bg-gray-100 rounded">
                      <span className="mx-5 text-sm font-bold capitalize tracking-widest">
                        qty :
                      </span>
                      <button
                        className="text-blue-500 hover:text-blue-600 focus:outline-none"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="text-blue-500 hover:text-blue-600 focus:outline-none mr-2"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-red-500 hover:text-red-600 ml-4 text-sm hover:bg-gray-100 font-semibold focus:outline-none p-2 border rounded "
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
        <div className="border border-gray-300"></div>
        <div className="mt-6 border-2 mr-10 rounded h-[300px] w-[350px] flex flex-col justify-between shadow-md">
          <div className="flex items-center justify-center p-2 h-10 bg-gray-300">
            <span className="mx-5 text-xl font-medium capitalize tracking-widest">
              price summery
            </span>
          </div>
          <div className="flex items-center justify-between p-2">
            <p className=" font-semibold text-xl text-gray-500 ">
              Total MRP :-
            </p>
            <p className="text-xl font-semibold text-gray-500 ">
              ${getTotalPrice().toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between p-2">
            <p className=" font-semibold text-xl text-gray-500 ">
              Shipping Charges :-
            </p>
            <p className="text-xl font-semibold text-gray-500 ">
              ${getTotalPrice().toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between p-2">
            <p className=" font-semibold text-xl text-gray-500 ">Discount :-</p>
            <p className="text-xl font-semibold  text-red-500">
              ${getTotalPrice().toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between p-2">
            <p className=" font-semibold text-xl text-gray-800 ">
              Sub Price :-
            </p>
            <p className="text-xl font-semibold text-gray-800 ">
              ${getTotalPrice().toFixed(2)}
            </p>
          </div>
          <div className="border border-gray-300"></div>
          <div className="flex flex-row items-center justify-between p-2">
            <p className="font-semibold text-xl text-gray-500">
              Total -{" "}
              <span className="font-semibold text-xl text-gray-800">
                ${getTotalPrice().toFixed(2)}
              </span>
            </p>
            <button className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-[10px] transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
