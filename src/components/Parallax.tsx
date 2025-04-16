// components/Parallax.tsx
"use client";

import { useEffect, useState } from "react";

export default function Parallax() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[200vh]">
      {/* Layer background parallax */}
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('images/about.png')`,
          transform: `translateY(${offsetY * 0.7}px)`,
          zIndex: -1,
        }}
      />

      {/* Layer teks */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <h1 className="text-black text-5xl font-bold">Welcome to Parallax!</h1>
      </div>
    </div>
  );
}
