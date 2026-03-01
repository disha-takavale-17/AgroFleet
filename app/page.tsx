import { ChevronRight, Tractor, Leaf, Zap, ShieldCheck, TrendingUp, Award } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Empowering Farmers with Smart Solutions
                </h1>
                <p className="text-xl text-green-100 leading-relaxed">
                  AgroFleet provides modern farming support through machinery rental, government schemes, and AI-powered fertilizer recommendations. Transform your farm today.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/machinery" className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition transform hover:scale-105">
                  Explore Machinery
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link href="/fertilizer" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition">
                  Get Fertilizer Advice
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold">50K+</p>
                  <p className="text-green-100">Farmers Served</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-green-100">Machines Available</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">99%</p>
                  <p className="text-green-100">Satisfaction Rate</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop"
                alt="Farmer working in field with tractor"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About AgroFleet Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">About AgroFleet</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to revolutionizing agriculture by providing farmers with access to modern tools, government support, and intelligent farming recommendations.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Machinery Rental */}
            <Link href="/machinery" className="group">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition transform hover:scale-105 cursor-pointer h-full">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Tractor className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Machinery Rental</h3>
                <p className="text-gray-700 leading-relaxed">
                  Access affordable, high-quality farming equipment and machinery on rent. From tractors to harvesters, we've got everything you need.
                </p>
              </div>
            </Link>

            {/* Government Schemes */}
            <Link href="/schemes" className="group">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition transform hover:scale-105 cursor-pointer h-full">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Government Schemes</h3>
                <p className="text-gray-700 leading-relaxed">
                  Discover and access government schemes and subsidies designed for farmers. Maximize your benefits with our guidance.
                </p>
              </div>
            </Link>

            {/* Fertilizer Recommendation */}
            <Link href="/fertilizer" className="group">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition transform hover:scale-105 cursor-pointer h-full">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Fertilizer Recommendation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Get AI-powered fertilizer recommendations based on your soil type, crops, and local climate. Increase yield while reducing costs.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose AgroFleet?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of farmers across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Affordable */}
            <div className="p-8 rounded-2xl bg-white border-2 border-green-100 hover:border-green-400 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable</h3>
              <p className="text-gray-600">
                Cost-effective solutions that help farmers save money while maximizing productivity and farm profits.
              </p>
            </div>

            {/* Trusted */}
            <div className="p-8 rounded-2xl bg-white border-2 border-green-100 hover:border-green-400 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted</h3>
              <p className="text-gray-600">
                Verified equipment, certified recommendations, and transparent processes you can rely on every season.
              </p>
            </div>

            {/* AI-Powered */}
            <div className="p-8 rounded-2xl bg-white border-2 border-green-100 hover:border-green-400 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Recommendations</h3>
              <p className="text-gray-600">
                Smart algorithms analyze your farm data to provide personalized fertilizer and farming recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">Ready to Transform Your Farm?</h2>
          <p className="text-xl text-gray-600">
            Join thousands of successful farmers using AgroFleet to optimize their operations
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition transform hover:scale-105">
            Get Started Today
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
