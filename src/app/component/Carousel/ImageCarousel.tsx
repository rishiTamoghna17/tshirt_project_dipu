"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import "./index.scss";

type Props = {};

function ImageCarousel({}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const images = ["/DSC_3003.JPG", "/DSC_3020.JPG", "/DSC_3021.JPG"];

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    if (!animationInProgress) {
      // Check if animation is not in progress
      setDirection("right");
      setAnimationInProgress(true); // Set animation in progress
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrevious = () => {
    if (!animationInProgress) {
      // Check if animation is not in progress
      setDirection("left");
      setAnimationInProgress(true); // Set animation in progress
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleDotClick = (index) => {
    if (!animationInProgress) {
      // Check if animation is not in progress
      setDirection(index > currentIndex ? "right" : "left");
      setAnimationInProgress(true); // Set animation in progress
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  // Update the animationInProgress state after the animation duration
  useEffect(() => {
    if (animationInProgress) {
      const animationTimeout = setTimeout(() => {
        setAnimationInProgress(false);
      }, 1000); // Adjust the duration based on your animation duration
      return () => clearTimeout(animationTimeout);
    }
  }, [animationInProgress]);

  return (
    <div className="carousel" data-aos="flip-left"data-aos-duration="1000">
      <div className="carousel-images">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            variants={slideVariants}
            onAnimationComplete={() => setAnimationInProgress(false)}
          />
        </AnimatePresence>
        <div className="slide_direction">
          {!animationInProgress && (
            <>
              <motion.div
                variants={slidersVariants}
                whileHover="hover"
                className="left"
                onClick={handlePrevious}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 96 960 960"
                  width="20"
                  className="absolute bottom-[4px] left-[5px]"
                >
                  <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                </svg>
              </motion.div>
              <motion.div
                variants={slidersVariants}
                whileHover="hover"
                className="right"
                onClick={handleNext}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 96 960 960"
                  width="20"
                  className="absolute bottom-[4px] right-[2px]"
                >
                  <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                </svg>
              </motion.div>
            </>
          )}
        </div>
      </div>
      <div className="carousel-indicator">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
