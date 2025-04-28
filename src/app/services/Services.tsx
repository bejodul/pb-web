/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  "/images/services/service1.png",
  "/images/services/service2.png",
  "/images/services/service3.png",
  "/images/services/service4.png",
  "/images/services/service5.png",
  "/images/services/service6.png",
];

export default function Services() {
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
    const translateX = distance * 100;
    const rotate = distance === 0 ? 0 : distance > 0 ? -6 : 6;
    const opacity = 1 - Math.abs(distance) * 0.3;
    const zIndex = 10 - Math.abs(distance);
    const blur = distance === 0 ? "none" : "blur(3px)";

    return {
      transform: `translateX(-50%) translateX(${translateX}px) scale(${scale}) rotate(${rotate}deg)`,
      opacity,
      zIndex,
      filter: blur,
    };
  };

  return (
    <section className="flex flex-col items-center justify-center px-6 py-28 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-700">
      <h2 className="text-4xl font-extrabold text-green-700 dark:text-green-400 mb-4">
        Our Services
      </h2>
      <p className="max-w-2xl text-center mb-8 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        We provide comprehensive services from design to deployment. Here’s what
        we can help you with:
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-gray-700 dark:text-gray-300 text-base font-medium">
        <li className="flex items-center gap-2">
          ✔ Application Software Development
        </li>
        <li className="flex items-center gap-2">
          ✔ Cloud Solution Implementation
        </li>
        <li className="flex items-center gap-2">✔ Site Preparation</li>
        <li className="flex items-center gap-2">✔ Outsourcing</li>
        <li className="flex items-center gap-2">
          ✔ Disaster Recovery Center (DRC)
        </li>
        <li className="flex items-center gap-2">✔ Managed Services</li>
        <li className="col-span-2 text-center">
          ✔ Truck Online Booking System (Troboss)
        </li>
      </ul>

      <div className="relative w-full max-w-3xl h-[400px] overflow-visible mb-10">
        {products.map((product, i) => {
          let distance = i - index;
          if (distance > products.length / 2) distance -= products.length;
          if (distance < -products.length / 2) distance += products.length;

          if (Math.abs(distance) > maxVisible) return null;

          return (
            <motion.div
              key={i}
              className="absolute top-0 left-1/2 w-[70%] h-full transition-all duration-500 ease-in-out rounded-xl overflow-hidden shadow-xl border border-white/10 backdrop-blur-sm"
              style={getTransformStyles(distance)}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={product}
                alt={`Product ${i}`}
                className="object-cover rounded-xl"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="flex space-x-6">
        <button
          onClick={handlePrev}
          className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:scale-110 transition-transform text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-800"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:scale-110 transition-transform text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-800"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
