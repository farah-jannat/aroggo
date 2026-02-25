import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  MessageCircle,
  Phone,
  TwitterIcon,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0b1218] text-white py-12 px-6 md:px-16 font-sans relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand & Certification Section */}
        <div className="space-y-6">
          <div className="bg-white p-2 rounded w-40">
            {/* Replace with actual logo path */}
            <img src="/footer-logo.avif" alt="Arogga Logo" className="w-full" />
          </div>
          <p className="text-sm text-gray-300">
            Connect our specialist doctor at any time from any where
          </p>
          <div className="w-32">
            {/* Replace with actual LegitScript badge path */}
            <img
              src="/footer1.avif"
              alt="LegitScript Certified"
              className="w-full"
            />
          </div>
          <p className="text-xs text-gray-400 italic">
            Bangladesh's only LegitScript certified online healthcare platform
          </p>
        </div>

        {/* Links Sections Combined */}
        <div className="grid grid-cols-2 gap-4 lg:col-span-1">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-teal-400 cursor-pointer">Careers</li>
              <li className="hover:text-teal-400 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-teal-400 cursor-pointer">
                Terms and Conditions
              </li>
              <li className="hover:text-teal-400 cursor-pointer">
                Return and Refund Policy
              </li>
            </ul>
            <h3 className="text-lg font-bold pt-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-teal-400 cursor-pointer">
                Order Medicine
              </li>
              <li className="hover:text-teal-400 cursor-pointer">
                Healthcare Products
              </li>
              <li className="hover:text-teal-400 cursor-pointer">Lab Tests</li>
              <li className="hover:text-teal-400 cursor-pointer">Beauty</li>
            </ul>
          </div>

          {/* <div className="flex flex-col gap-4"> */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-teal-400 cursor-pointer">FAQ</li>
              <li className="hover:text-teal-400 cursor-pointer">Account</li>
              <li className="hover:text-teal-400 cursor-pointer">
                Register the Pharmacy
              </li>
              <li className="hover:text-teal-400 cursor-pointer">
                Special Offers
              </li>
            </ul>
          </div>
        </div>

        {/* Download App Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Download Our App</h3>
          <div className="space-y-3">
            <img
              src="/footer2.avif"
              alt="Google Play"
              className="w-36 cursor-pointer"
            />
            <img
              src="/footer3.avif"
              alt="App Store"
              className="w-36 cursor-pointer"
            />
            {/* </div> */}
          </div>
        </div>

        {/* Contact & Socials Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold">Contact Info</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-gray-400" />
              <span>
                Hotline: <b className="text-white">09610016778</b>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle size={18} className="text-gray-400" />
              <span>
                Whatsapp: <b className="text-white">01810-117100</b>
              </span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-gray-400 mt-1" />
              <span>
                D/15-1, Road-36, Block-D, Section-10, Mirpur, Dhaka-1216
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            {[Linkedin, Facebook, Instagram, TwitterIcon].map((Icon, idx) => (
              <div
                key={idx}
                className="bg-gray-700 p-2 rounded-full hover:bg-teal-600 transition-colors cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold">Pay With</p>
            <img
              src="/payment-methods.png"
              alt="Payment Methods"
              className="w-full max-w-[250px]"
            />
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p>DBID: 915741315</p>
        <p>© 2026 Arogga Limited. All rights reserved.</p>
      </div>

      {/* Floating Elements (Simulated) */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3">
        <div className="bg-white text-black px-4 py-2 rounded-lg text-xs shadow-lg flex items-center gap-2">
          <span>Welcome to Arogga! Ask your query here.👋</span>
          <button className="font-bold">✕</button>
        </div>
        <div className="bg-teal-500 p-4 rounded-full shadow-xl cursor-pointer">
          <MessageCircle className="text-white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
