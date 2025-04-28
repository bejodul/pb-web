/* eslint-disable @next/next/no-img-element */
// components/OurPrincipals.tsx

export default function OurPrincipals() {
  return (
    <section id="principals" className="bg-white py-30 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Judul */}
        <h2 className="text-4xl font-bold text-green mb-4">Principals</h2>
        <p className="text-blue-900 max-w-3xl mx-auto mb-12">
          As Primus Indonesia’s subsidiary, we devote ourselves to constant
          solution development to meet our clients’ evolving needs. We have
          worked with some of the most reputable companies in technology
          development. Our business solutions and partners are leaders at the
          forefront of technological advancements. Meet some of them:
        </p>

        {/* Logo image */}
        <div className="flex justify-center">
          <img
            src="/images/principal.png" // Sesuaikan dengan nama file kamu
            alt="Our Principals"
            width="1200"
            height="800"
            className="w-full h-auto max-w-5xl max-h-[600px]"
            loading="lazy" // Gambar akan dimuat secara lazy ketika dibutuhkan
          />
        </div>
      </div>
    </section>
  );
}
