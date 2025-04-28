/* eslint-disable @next/next/no-img-element */
"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import style from "./Hero.module.css";

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);
  const [delayedArrow, setDelayedArrow] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setTimeout(() => {
      setDelayedArrow(true);
    }, 300); // delay 300ms
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setDelayedArrow(false);
  };

  return (
    <section
      id="home"
      className="relative bg-cover bg-center min-h-[92vh] mt-[70px] border-0 border-red-600"
      style={{
        backgroundImage: "url('/background/hero/hero.png')",
        backgroundSize: "cover", // Membuat gambar latar belakang memenuhi container
        backgroundPosition: "center", // Menjaga posisi gambar tetap di tengah
        // backgroundAttachment: "fixed", // Efek parallax (opsional)
      }}
    >
      {/* Overlay with opacity */}
      <div className="absolute inset-0 bg-white opacity-20"></div>{" "}
      {/* Overlay dengan opacity 50% */}
      {/* Content */}
      <div
        className="absolute z-10 flex items-center justify-center border-0 border-amber-300 w-full"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative flex-1 justify-center items-center bg-transparent border-0 border-black rounded-[150px] w-full h-full">
          {/* glow layer */}
          <div className="absolute inset-0 bg-[#D9D9D9]/50 blur-lg"></div>

          <div className="relative flex-1 z-0 item-center justify-center p-20 border-0 border-green-50">
            <h1 className={`text-[40px] font-bold ${style["title"]}`}>
              We bring You closer to Automation
            </h1>
            <p className={`text-lg ${style["subtitle"]}`}>
              In the midst of a world driven by the rapid evolution of
              technology, demands have shifted from basic needs to integrated,
              fast, and above all, reliable Prime Services. Imagine the growing
              need for technology across various business sectors, multiplied by
              countless countries around the world — and then focus in on the
              ASEAN region.
            </p>

            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="inline-flex items-center gap-2 px-8 py-3 mt-10 bg-[#1F3A93] text-white rounded-[10px] text-lg font-semibold w-40 transition-all duration-300 transform hover:w-50 hover:text-xl hover:scale-105"
            >
              <span
                className={`transition-all duration-300 ${
                  hovered ? "text-xl" : "text-lg"
                }`}
              >
                Explore Us
              </span>

              {/* Icon wrapper with absolute positioning */}
              <span className="absolute right-4">
                <div
                  className={`transition-opacity duration-300 ${
                    hovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {delayedArrow ? (
                    <ChevronRight size={30} color="white" />
                  ) : (
                    <ChevronDown size={30} color="white" />
                  )}
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
