import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-400 rounded-lg flex items-center justify-center group-hover:shadow-lg transition">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-green-900">AgroFleet</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition">
              Home
            </Link>
            <Link href="/machinery" className="text-gray-700 hover:text-green-600 font-medium transition">
              Machinery
            </Link>
            <Link href="/schemes" className="text-gray-700 hover:text-green-600 font-medium transition">
              Schemes
            </Link>
            <Link href="/fertilizer" className="text-gray-700 hover:text-green-600 font-medium transition">
              Fertilizer
            </Link>
          </div>

          {/* CTA Button */}
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
