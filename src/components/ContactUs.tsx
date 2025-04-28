// components/ContactUs.tsx
import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function ContactUs() {
  return (
    <section id="contact" className="bg-white px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green mb-8">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="w-full h-[300px]">
            <iframe
              title="Primus Niaga Brunei Location"
              src="https://www.google.com/maps?q=RPN+Bukit+Beruang,+Tutong,+Brunei&output=embed"
              width="100%"
              height="100%"
              className="rounded-md border"
              loading="lazy"
            ></iframe>
          </div>

          {/* Address */}
          <div className="flex flex-col justify-center text-blue-900">
            <h3 className="text-xl font-semibold mb-2">Head Office</h3>
            <p>
              No. 67, Spg 1185-73-180, RPN Bukit Beruang, Perumahan Negara Bukit Beruang,
              Telisai, Tutong, TC3345, Brunei Darussalam
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-12 flex justify-center gap-6 text-2xl text-green">
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="X"><FaXTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          © 2025 Primus Niaga (B) Sdn Bhd.<br />
          All rights reserved.
        </div>
      </div>
    </section>
  );
}
