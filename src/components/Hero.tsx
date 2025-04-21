"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

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
      className="relative bg-cover bg-center min-h-[95vh] mt-[70px] bg-gradient-to-br from-[#1B4E3B] via-[#3EB489] to-[#3EB489]"
      // style={{ backgroundImage: "url('/background/layered-waves.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center md:px-50 sm:px-10 py-24">
        <div className="flex flex-col gap-15 max-w-4xl">
          <h1 className="text-[40px] font-bold text-white">
            We bring You closer to Automation
          </h1>
          <p className="text-lg text-white">
            In the midst of a world spurred by the fast-paced evolution of
            technology, demands have transformed from basic Information
            Communication Technology (ICT) requirements to those that are
            integrated, fast, and most of all, reliable. Imagine the need for
            technology in the different business sectors, multiplied by the many
            countries all over the globe – and then zero in on the ASEAN region.
          </p>

          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#1F3A93] text-white rounded-[10px] text-lg font-semibold w-40 transition-all duration-300 transform hover:w-50 hover:text-xl hover:scale-105"
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

      <div className="absolute bottom-0 right-0 w-[300px] md:w-[400px] lg:w-[950px]">
        <Image
          src="/background/port.png"
          alt="Port Automation Illustration"
          width={500}
          height={300}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
