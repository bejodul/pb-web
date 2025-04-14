// components/ServicesSolutions.tsx
import Image from "next/image";

export default function ServicesSolutions() {
  return (
    <section id="services" className="bg-white py-37 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-green mb-6">
          Services &amp; Solutions
        </h2>
        <p className="text-blue-900 mb-12 max-w-3xl mx-auto">
          As a systems integrator in the business of information technology, we
          offer a portfolio of customizable products and services. From the
          traditional servers to cloud solutions, our organization is immersed
          in the latest technological and business demands.
        </p>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-center items-start">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
            <Image
              src="/images/solution.png" // ganti sesuai path gambar kamu
              alt="Our Solutions"
              width={120}
              height={120}
              className="mx-auto mb-4"
            />
            <h4 className="text-lg font-medium text-gray-700">Our Solutions</h4>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-xl transition duration-300">
            <Image
              src="/images/service.png"
              alt="Our Services"
              width={120}
              height={120}
              className="mx-auto mb-4"
            />
            <h4 className="text-lg font-medium text-gray-700">Our Services</h4>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-xl transition duration-300">
            <Image
              src="/images/warranty.png"
              alt="Our Warranties"
              width={120}
              height={120}
              className="mx-auto mb-4"
            />
            <h4 className="text-lg font-medium text-gray-700">
              Our Warranties
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
