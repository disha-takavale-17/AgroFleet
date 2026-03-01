import { ChevronRight, Tractor, Wind, Zap, Calendar, MapPin, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const LocationBasedBanner = () => (
  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <h3 className="text-lg font-bold">Try Our New Feature!</h3>
        <p className="text-purple-100">Location-based machinery rental with GPS detection</p>
      </div>
      <Link href="/machinery-rental" className="bg-white hover:bg-gray-100 text-purple-600 px-6 py-2 rounded-lg font-semibold transition">
        View Nearby Machinery
      </Link>
    </div>
  </div>
);

export default function Machinery() {
  const machines = [
    // This is the old machinery page - kept for reference
    // The new location-based rental system is at /machinery-rental
    {
      name: "Tractor (35 HP)",
      price: "₹800/day",
      image: "🚜",
      rating: 4.8,
      reviews: 245,
      features: ["Power Steering", "Diesel Engine", "4WD"]
    },
    {
      name: "Harvester Combine",
      price: "₹2,500/day",
      image: "🌾",
      rating: 4.9,
      reviews: 189,
      features: ["Latest Technology", "Fuel Efficient", "High Capacity"]
    },
    {
      name: "Rotavator",
      price: "₹600/day",
      image: "🚜",
      rating: 4.7,
      reviews: 156,
      features: ["Soil Preparation", "Deep Tilling", "Compact Design"]
    },
    {
      name: "Sprayer (500L)",
      price: "₹400/day",
      image: "💨",
      rating: 4.6,
      reviews: 203,
      features: ["Precision Spray", "Easy Operation", "Adjustable Nozzles"]
    },
    {
      name: "Thresher Machine",
      price: "₹1,200/day",
      image: "🌾",
      rating: 4.8,
      reviews: 178,
      features: ["High Speed", "Durable", "Low Vibration"]
    },
    {
      name: "Water Pump",
      price: "₹300/day",
      image: "💧",
      rating: 4.5,
      reviews: 234,
      features: ["Powerful Output", "Portable", "Fuel/Electric"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Location-Based Banner */}
      <LocationBasedBanner />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Machinery Rental</h1>
            <p className="text-xl text-blue-100">
              Access affordable, high-quality farming equipment on rent
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-xl bg-blue-50 border-l-4 border-blue-600">
              <Calendar className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Rental</h3>
              <p className="text-gray-600">Rent for days, weeks, or months based on your needs</p>
            </div>
            <div className="p-6 rounded-xl bg-green-50 border-l-4 border-green-600">
              <Zap className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Machines</h3>
              <p className="text-gray-600">Well-maintained, modern equipment with regular servicing</p>
            </div>
            <div className="p-6 rounded-xl bg-purple-50 border-l-4 border-purple-600">
              <MapPin className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Delivery Available</h3>
              <p className="text-gray-600">Free delivery to your farm within service area</p>
            </div>
          </div>

          {/* Search/Filter Section */}
          <div className="mb-12 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Find Your Machine</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <input type="text" placeholder="Search machines..." className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Category</option>
                <option>Tractors</option>
                <option>Harvesters</option>
                <option>Sprayers</option>
                <option>Pumps</option>
              </select>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Machines Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Available Machines</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map((machine, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group">
                {/* Image */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-6xl group-hover:scale-110 transition">
                  {machine.image}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{machine.name}</h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(machine.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{machine.rating} ({machine.reviews})</span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {machine.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="border-t pt-4 flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{machine.price}</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Need Help Choosing?</h2>
          <p className="text-lg text-blue-100">
            Our experts can help you find the perfect equipment for your farming needs
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition">
            Contact Our Team
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
