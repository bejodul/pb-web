"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  "/images/products/product1.jpg",
  "/images/products/product2.jpg",
  "/images/products/product3.jpg",
  "/images/products/product4.jpg",
  "/images/products/product5.jpg",
  "/images/products/product6.jpg",
];

export default function Solutions() {
  const [index, setIndex] = useState(0);
  const maxVisible = 2;

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const getTransformStyles = (distance: number) => {
    const scale = 1 - Math.abs(distance) * 0.1;
    const translateX = distance * 70;
    const translateY = distance === 0 ? 0 : distance > 0 ? 20 : -20;
    const rotate = distance === 0 ? 0 : distance > 0 ? -6 : 6;
    const opacity = 1 - Math.abs(distance) * 0.2;
    const zIndex = 10 - Math.abs(distance);
    const blur = Math.abs(distance) === 0 ? "none" : "blur(3px)";

    return {
      transform: `translateX(-50%) translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
      opacity,
      zIndex,
      filter: blur,
    };
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-700">
      <h2 className="text-3xl font-extrabold text-green-700 dark:text-green-400 mb-3">
        Our Solutions
      </h2>
      <p className="max-w-2xl text-center mb-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        Our winning service has drawn a strong following and interest in
        providing affordable, reliable and customizable Integrated Port &
        Logistics Solutions. Our integrated solutions offer a wide range of
        features accommodating our clients’ requirements. Be it discharging &
        loading, yard operations, reporting, or billing, our tried and tested
        solution are tailored to simplify the intricacies associated with the
        business of logistics.
      </p>

      <div className="relative w-full max-w-xl h-[400px] overflow-visible mb-8">
        {products.map((product, i) => {
          let distance = i - index;
          if (distance > products.length / 2) distance -= products.length;
          if (distance < -products.length / 2) distance += products.length;
          if (Math.abs(distance) > maxVisible) return null;

          return (
            <motion.div
              key={i}
              className="absolute top-0 left-1/2 w-[85%] h-[90%] transition-all duration-500 ease-in-out rounded-xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-sm"
              style={getTransformStyles(distance)}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={product}
                alt={`Product ${i}`}
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="flex space-x-6">
        <button
          onClick={handlePrev}
          className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:scale-110 transition text-green-700 dark:text-green-300"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:scale-110 transition text-green-700 dark:text-green-300"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
