/* eslint-disable @next/next/no-img-element */
// components/ServicesSolutions.tsx
import Link from "next/link";

export default function ServicesSolutions() {
  return (
    <section id="services" className="bg-white py-37 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-6">
          Services & Solutions
        </h2>
        <p className="text-blue-900 mb-12 max-w-3xl mx-auto">
          Explore the wide range of solutions, services, and warranties we
          offer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-center items-start">
          {/* Link to Solutions Page */}
          <Link href="/solutions">
            <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300">
              <img
                src="/images/solution.png"
                alt="Our Solutions"
                width="120"
                height="120"
                className="mx-auto mb-4"
                loading="lazy" // opsional, untuk lazy-loading
              />

              <h4 className="text-lg font-medium text-gray-700">
                Our Solutions
              </h4>
            </div>
          </Link>

          {/* Link to Services Page */}
          <Link href="/services">
            <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300">
              <img
                src="/images/service.png"
                alt="Our Services"
                width="120"
                height="120"
                className="mx-auto mb-4"
                loading="lazy" // opsional, untuk lazy-loading
              />

              <h4 className="text-lg font-medium text-gray-700">
                Our Services
              </h4>
            </div>
          </Link>

          {/* Link to Warranties Page */}
          <Link href="#">
            <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300">
              <img
                src="/images/warranty.png"
                alt="Our Warranties"
                width="120"
                height="120"
                className="mx-auto mb-4"
                loading="lazy" // opsional, untuk lazy-loading
              />

              <h4 className="text-lg font-medium text-gray-700">
                Our Warranties
              </h4>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
