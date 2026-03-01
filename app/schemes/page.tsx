import { ChevronRight, ShieldCheck, DollarSign, Zap, Users, Clock, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Schemes() {
  const schemes = [
    {
      name: "PM-KISAN",
      amount: "₹6,000/year",
      eligibility: "All landholding farmers",
      benefits: ["Direct income support", "3 installments per year", "No age limit"],
      deadline: "Open",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Pradhan Mantri Fasal Bima Yojana",
      amount: "Up to claim value",
      eligibility: "All farmers, lenders",
      benefits: ["Crop insurance", "Covers losses", "Weather-indexed"],
      deadline: "Seasonal",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Kisan Credit Card",
      amount: "Up to ₹5,00,000",
      eligibility: "Farmers with land",
      benefits: ["Low interest rate", "Quick processing", "Flexible repayment"],
      deadline: "Ongoing",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Soil Health Card Scheme",
      amount: "Free testing",
      eligibility: "All farmers",
      benefits: ["Free soil testing", "Fertilizer recommendations", "Better yields"],
      deadline: "Ongoing",
      color: "from-amber-500 to-amber-600"
    },
    {
      name: "National Agriculture Market (e-NAM)",
      amount: "No fee for basic features",
      eligibility: "Farmers and traders",
      benefits: ["Online trading", "Better prices", "Transparent market"],
      deadline: "Open",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Paramparagat Krishi Vikas Yojana",
      amount: "₹50,000 cluster incentive",
      eligibility: "Organic farming interested",
      benefits: ["Organic farming support", "Cluster bonuses", "Training programs"],
      deadline: "Seasonal",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-400 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Government Schemes</h1>
            <p className="text-xl text-purple-100">
              Discover subsidies and schemes designed to support farmers
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Government Schemes Matter</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Indian government offers multiple schemes to support farmers with financial assistance, insurance, credit facilities, and technical support. These schemes are designed to improve crop production, reduce farming costs, and ensure sustainable agriculture.
            </p>
            <p className="text-gray-700 leading-relaxed">
              AgroFleet helps you navigate these schemes, understand eligibility criteria, and complete applications smoothly.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-purple-600 mb-2">50+</p>
              <p className="text-gray-700">Active Schemes</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">₹50,000 Cr+</p>
              <p className="text-gray-700">Total Benefits</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">10M+</p>
              <p className="text-gray-700">Farmers Benefited</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-orange-600 mb-2">24/7</p>
              <p className="text-gray-700">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schemes Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Popular Government Schemes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {schemes.map((scheme, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
                {/* Header with Color */}
                <div className={`h-2 bg-gradient-to-r ${scheme.color}`}></div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{scheme.name}</h3>
                    <p className="text-3xl font-bold text-green-600">{scheme.amount}</p>
                  </div>

                  {/* Eligibility */}
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Eligibility:</p>
                    <p className="text-gray-600">{scheme.eligibility}</p>
                  </div>

                  {/* Benefits */}
                  <div>
                    <p className="font-semibold text-gray-700 mb-3">Key Benefits:</p>
                    <ul className="space-y-2">
                      {scheme.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deadline & CTA */}
                  <div className="border-t pt-4 flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-600">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {scheme.deadline}
                    </span>
                    <button className={`bg-gradient-to-r ${scheme.color} text-white px-6 py-2 rounded-lg font-semibold transition transform hover:scale-105`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How to Apply</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center border-2 border-purple-200">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Check Eligibility</h3>
              <p className="text-gray-600 text-sm">Verify if you meet the scheme requirements</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center border-2 border-purple-200">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Gather Documents</h3>
              <p className="text-gray-600 text-sm">Prepare required documents and details</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center border-2 border-purple-200">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Get Assistance</h3>
              <p className="text-gray-600 text-sm">Our team guides you through the process</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center border-2 border-purple-200">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                4
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Submit Application</h3>
              <p className="text-gray-600 text-sm">Get approval and receive benefits</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-400 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Don't Miss Out on Benefits</h2>
          <p className="text-lg text-purple-100">
            Connect with our experts to find schemes you're eligible for
          </p>
          <button className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 rounded-lg font-semibold transition">
            Get Started Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
