/* eslint-disable @next/next/no-img-element */
// components/OurClients.tsx

export default function OurClients() {
  return (
    <section id="clients" className="bg-white py-35 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Judul */}
        <h2 className="text-4xl font-bold text-green mb-4">Our Clients</h2>
        <p className="text-blue-900 max-w-3xl mx-auto mb-12">
          We have been privileged to collaborate and work with many clients over
          the years. Here are some of our most valued business partners, whose
          success stories reflect our dedication to quality solutions.
        </p>

        {/* Logo image */}
        <div className="flex justify-center">
          <img
            src="/images/client.png" // ganti sesuai path gambarmu
            alt="Our Clients"
            className="w-full h-auto max-w-5xl max-h-[600px]"
            width="1200"
            height="800"
            loading="lazy" // opsional, untuk lazy-load
          />
        </div>
      </div>
    </section>
  );
}
