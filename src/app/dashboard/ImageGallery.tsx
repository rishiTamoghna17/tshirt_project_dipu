"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
type Props = {
  imageUrls: string;
};

const ImageGallery = ({ imageUrls }: Props) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [startIndex, setStartIndex] = useState<number>(0);

  const rotateImages = (direction: "next" | "prev") => {
    setSelectedImage((prevSelectedImage) => {
      let newIndex = prevSelectedImage;

      if (direction === "next") {
        newIndex = (newIndex + 1) % imageUrls.length;
      } else {
        newIndex = (newIndex - 1 + imageUrls.length) % imageUrls.length;
      }

      return newIndex;
    });
  };

  const visibleImages = [
    (selectedImage - 1 + imageUrls.length) % imageUrls.length,
    selectedImage,
    (selectedImage + 1) % imageUrls.length,
  ];

  // Synchronize startIndex with selectedImage
  useEffect(() => {
    setStartIndex(selectedImage);
  }, [selectedImage]);

  return (
    <div className="images grid grid-cols-1 sm:grid-cols-7">
    {/* Mobile View */}
    <div className="sm:hidden">
      <div className="selected-image flex items-center justify-center">
        <Image
          src={imageUrls[startIndex]}
          height={450}
          width={350}
          className="h-[450px] w-full p-2  object-cover object-top"
          alt="tShirt-image"
        />
      </div>
    </div>

    {/* Desktop View */}
    <div className="all-images col-span-2 justify-center hidden sm:flex">
      <div className="flex items-center justify-center flex-col ">
        <button
          className="carousel-button mb-3"
          onClick={() => rotateImages("prev")}
        >
          <IoIosArrowUp size={20} />
        </button>
        {visibleImages.map((index) => (
          <div
            key={index}
            className={`image relative h-[80px] ${
              selectedImage === index ? "scale-110" : "opacity-60"
            }`}
          >
            <Image
              onClick={() => setSelectedImage(index)}
              height={70}
              width={70}
              className={`w-[70px] h-[70px] rounded-lg mb-3 p-1 object-cover object-top ${
                selectedImage === index
                  ? "border-[1px] border-purple-500"
                  : "border-[1px] border-purple-200"
              }`}
              src={imageUrls[index]}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
        <button
          className="carousel-button"
          onClick={() => rotateImages("next")}
        >
          <IoIosArrowDown size={20} />
        </button>
      </div>
    </div>

    {/* Mobile View */}
    <div className="hidden sm:block sm:col-span-5">
      <div className="selected-image">
        <Image
          src={imageUrls[startIndex]}
          height={450}
          width={350}
          className="h-[450px] w-[350px]  object-cover object-top"
          alt="tShirt-image"
        />
      </div>
    </div>
  </div>
  );
};

export default ImageGallery;
