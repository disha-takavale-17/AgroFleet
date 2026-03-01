import Link from "next/link";
import { Leaf, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-400 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AgroFleet</span>
            </div>
            <p className="text-sm text-gray-400">Empowering farmers with smart agricultural solutions.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-green-400 transition">Home</Link></li>
              <li><Link href="/machinery-rental" className="text-gray-400 hover:text-green-400 transition">Machinery</Link></li>
              <li><Link href="/schemes" className="text-gray-400 hover:text-green-400 transition">Schemes</Link></li>
              <li><Link href="/fertilizer" className="text-gray-400 hover:text-green-400 transition">Fertilizer</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition">Press</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400" />
                <a href="tel:+91-XXXXXXXXXX" className="text-gray-400 hover:text-green-400 transition">+91-XXXXXXXXXX</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-400" />
                <a href="mailto:support@agrofleet.com" className="text-gray-400 hover:text-green-400 transition">support@agrofleet.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green-400 mt-0.5" />
                <span className="text-gray-400">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">&copy; 2024 AgroFleet. All rights reserved.</p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Terms</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
