import { ChevronRight, Leaf, Zap, BarChart3, Droplets, Wind, AlertCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Fertilizer() {
  const recommendations = [
    {
      crop: "Rice",
      season: "Kharif",
      nitrogen: "120 kg/ha",
      phosphorus: "60 kg/ha",
      potassium: "40 kg/ha",
      timing: "Split application",
      yield: "50-60 quintals/ha"
    },
    {
      crop: "Wheat",
      season: "Rabi",
      nitrogen: "100 kg/ha",
      phosphorus: "60 kg/ha",
      potassium: "40 kg/ha",
      timing: "Basal + 2 splits",
      yield: "40-50 quintals/ha"
    },
    {
      crop: "Cotton",
      season: "Kharif",
      nitrogen: "150 kg/ha",
      phosphorus: "80 kg/ha",
      potassium: "60 kg/ha",
      timing: "Basal + 3 splits",
      yield: "20-25 quintals/ha"
    },
    {
      crop: "Sugarcane",
      season: "Yearlong",
      nitrogen: "200 kg/ha",
      phosphorus: "100 kg/ha",
      potassium: "80 kg/ha",
      timing: "Basal + splits",
      yield: "80-100 tons/ha"
    },
    {
      crop: "Corn",
      season: "Kharif/Rabi",
      nitrogen: "120 kg/ha",
      phosphorus: "60 kg/ha",
      potassium: "40 kg/ha",
      timing: "2-3 splits",
      yield: "50-60 quintals/ha"
    },
    {
      crop: "Pulses",
      season: "Rabi",
      nitrogen: "40 kg/ha",
      phosphorus: "80 kg/ha",
      potassium: "40 kg/ha",
      timing: "Basal only",
      yield: "20-25 quintals/ha"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Smart Fertilizer Recommendations</h1>
            <p className="text-xl text-green-100">
              AI-powered recommendations to maximize yield and reduce costs
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-xl bg-green-50 border-l-4 border-green-600">
              <BarChart3 className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Customized Plans</h3>
              <p className="text-gray-600">Based on soil type, crop, location, and weather</p>
            </div>
            <div className="p-6 rounded-xl bg-blue-50 border-l-4 border-blue-600">
              <Zap className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Efficient</h3>
              <p className="text-gray-600">Optimize fertilizer usage and save up to 25%</p>
            </div>
            <div className="p-6 rounded-xl bg-purple-50 border-l-4 border-purple-600">
              <Leaf className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sustainable</h3>
              <p className="text-gray-600">Eco-friendly farming for better soil health</p>
            </div>
          </div>

          {/* Assessment Form */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Custom Recommendation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Your Crop</label>
                <select className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-600">
                  <option>Choose crop...</option>
                  <option>Rice</option>
                  <option>Wheat</option>
                  <option>Cotton</option>
                  <option>Sugarcane</option>
                  <option>Corn</option>
                  <option>Pulses</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Soil Type</label>
                <select className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-600">
                  <option>Choose soil...</option>
                  <option>Loamy</option>
                  <option>Sandy</option>
                  <option>Clayey</option>
                  <option>Red Soil</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Farm Size (Hectares)</label>
                <input type="number" placeholder="Enter size" className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-600" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                <input type="text" placeholder="Enter your state" className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-600" />
              </div>
            </div>
            <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition">
              Get Recommendation
            </button>
          </div>
        </div>
      </section>

      {/* Crop Recommendations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Crop-wise Recommendations</h2>
          <div className="space-y-6">
            {recommendations.map((rec, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Side */}
                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{rec.crop}</h3>
                      <p className="text-gray-600">
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {rec.season}
                        </span>
                      </p>
                    </div>

                    {/* Nutrient Cards */}
                    <div className="space-y-3">
                      <div className="p-4 rounded-lg bg-blue-50 border-l-4 border-blue-600">
                        <p className="text-sm text-gray-600 font-semibold">Nitrogen (N)</p>
                        <p className="text-xl font-bold text-blue-600">{rec.nitrogen}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-green-50 border-l-4 border-green-600">
                        <p className="text-sm text-gray-600 font-semibold">Phosphorus (P)</p>
                        <p className="text-xl font-bold text-green-600">{rec.phosphorus}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-purple-50 border-l-4 border-purple-600">
                        <p className="text-sm text-gray-600 font-semibold">Potassium (K)</p>
                        <p className="text-xl font-bold text-purple-600">{rec.potassium}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="space-y-6">
                    <div className="p-4 rounded-lg bg-amber-50 border-2 border-amber-200">
                      <p className="text-sm text-gray-600 font-semibold mb-1">Application Timing</p>
                      <p className="text-lg font-bold text-gray-900">{rec.timing}</p>
                      <p className="text-sm text-gray-600 mt-2">Optimal timing for maximum nutrient uptake</p>
                    </div>

                    <div className="p-4 rounded-lg bg-orange-50 border-2 border-orange-200">
                      <p className="text-sm text-gray-600 font-semibold mb-1">Expected Yield</p>
                      <p className="text-lg font-bold text-gray-900">{rec.yield}</p>
                      <p className="text-sm text-gray-600 mt-2">Achievable with proper application</p>
                    </div>

                    <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                      View Detailed Guide
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Key Tips for Optimal Results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-white border-2 border-green-200">
              <Droplets className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proper Irrigation</h3>
              <p className="text-gray-600 leading-relaxed">
                Ensure adequate water supply during and after fertilizer application for better nutrient absorption by plants.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border-2 border-green-200">
              <Wind className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Weather Consideration</h3>
              <p className="text-gray-600 leading-relaxed">
                Apply fertilizers during favorable weather conditions to prevent nutrient loss and maximize effectiveness.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border-2 border-green-200">
              <Leaf className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Soil Testing</h3>
              <p className="text-gray-600 leading-relaxed">
                Conduct soil tests periodically to understand nutrient levels and adjust fertilizer recommendations accordingly.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border-2 border-green-200">
              <BarChart3 className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Monitor Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Track plant growth and nutritional status throughout the season for timely adjustments if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Increase Your Yield by 30%</h2>
          <p className="text-lg text-green-100">
            Get personalized fertilizer recommendations from our AI-powered system
          </p>
          <button className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-lg font-semibold transition">
            Start Assessment
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
