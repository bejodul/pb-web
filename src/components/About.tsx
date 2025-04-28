/* eslint-disable @next/next/no-img-element */
// components/AboutUs.tsx

export default function AboutUs() {
  return (
    <section id="about" className="relative bg-white py-37 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <h2 className="text-[40px] font-bold text-green mb-6">About Us</h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text section */}
        <div>
          <h3 className="text-blue-800 font-semibold text-[22px] mb-1">
            Our Vision
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            To contribute to regional development and to gain the shareholders
            value in Global Information Technology Industries
          </p>

          <h3 className="text-blue-800 font-semibold text-[22px] mb-1">
            Our Mission
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Established in 2025, our company was founded as a subsidiary of
            Primus Indonesia, a trusted name in integrated port solutions since
            1992. With over two decades of experience, PI has served a wide
            range of industries, focusing on port solutions as a critical part
            of economic growth across ASEAN countries—where ports act as the
            primary gateway for goods entering domestic markets.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Primus Indonesia has built its reputation as a system integrator,
            distributor, and value-added reseller (VAR) in the information
            technology sector, with core expertise in computers, networking,
            data communication, software development, and peripheral supplies.
          </p>
          <p className="text-lg text-gray-700">
            As part of the Primus Indonesia Group, we continue this legacy by
            delivering integrated and reliable technology solutions tailored to
            the needs of our clients. Backed by deep industry knowledge and a
            commitment to excellence, our team ensures that every solution is
            designed to drive results and long-term value.
          </p>
        </div>

        {/* Image section */}
        <div className="relative">
          {/* Background shape */}
          <div className="absolute -top-8 -right-8 w-80 h-80 bg-cyan-100 rounded-full -z-10"></div>

          {/* Image */}
          <img
            src="/images/about.png"
            alt="Port Containers"
            className="rounded-lg shadow-lg"
            width="600"
            height="400"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
