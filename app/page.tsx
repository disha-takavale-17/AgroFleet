import Image from "next/image";
import { ChevronRight, Leaf, BarChart3, Zap, Users, TrendingUp, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-400 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-green-900">AgroFleet</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-green-600 transition">Features</a>
              <a href="#benefits" className="text-gray-700 hover:text-green-600 transition">Benefits</a>
              <a href="#footer" className="text-gray-700 hover:text-green-600 transition">Contact</a>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                Farm Management Revolution
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Smart Agriculture Starts Here
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                AgroFleet empowers farmers with real-time insights, automated logistics, and data-driven decisions. Transform your farming operations today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition transform hover:scale-105">
                Start Free Trial
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition">
                Watch Demo
              </button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div>
                <p className="text-3xl font-bold text-green-600">10K+</p>
                <p className="text-gray-600">Active Farmers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">50M+</p>
                <p className="text-gray-600">Acres Managed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">99.9%</p>
                <p className="text-gray-600">Uptime</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 md:h-full min-h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white space-y-4">
                <Leaf className="w-24 h-24 mx-auto opacity-80" />
                <p className="text-lg font-semibold">Smart Farm Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to optimize farm operations and maximize productivity
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Real-Time Analytics",
                description: "Monitor crop health, soil conditions, and yield predictions with advanced analytics dashboard.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Zap,
                title: "Automated Logistics",
                description: "Optimize routes, manage inventory, and schedule operations automatically with AI.",
                color: "from-yellow-500 to-orange-600"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Coordinate with farm workers, suppliers, and stakeholders in one unified platform.",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: TrendingUp,
                title: "Yield Optimization",
                description: "Increase productivity by 30% with data-driven recommendations and best practices.",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: Shield,
                title: "Data Security",
                description: "Bank-level encryption and compliance with agricultural data protection standards.",
                color: "from-red-500 to-rose-600"
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description: "Track carbon footprint, water usage, and optimize for sustainable farming practices.",
                color: "from-teal-500 to-cyan-600"
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="group p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition transform hover:scale-105">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">Why Choose AgroFleet?</h2>
              <div className="space-y-6">
                {[
                  { title: "Increase Efficiency", desc: "Save 20+ hours per week on farm management tasks" },
                  { title: "Reduce Costs", desc: "Cut operational costs by up to 25% with smart automation" },
                  { title: "Boost Yield", desc: "Improve crop yield by 30% with data-driven insights" },
                  { title: "Scale Operations", desc: "Manage multiple farms effortlessly from one dashboard" },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 text-white">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                      <p className="text-green-100">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="text-center border-b border-white/20 pb-6">
                  <p className="text-5xl font-bold">4.9/5</p>
                  <p className="text-green-100 mt-2">Rating from 2000+ farmers</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold mb-4">Trusted by leading agricultural regions</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["California", "Iowa", "Texas", "Illinois", "Nebraska"].map((region, idx) => (
                      <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
            Start Your Free Trial Today
            <ChevronRight className="w-5 h-5" />
          </button>
          <p className="text-gray-500 text-sm">No credit card required. 30-day free trial.</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-400 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">AgroFleet</span>
              </div>
              <p className="text-sm">Smart agriculture for the modern farmer.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Security</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">About</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Careers</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Cookies</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2024 AgroFleet. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
