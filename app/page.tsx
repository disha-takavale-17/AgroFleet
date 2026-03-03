import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slide-in-left {
          0% { transform: translateX(-30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.5); }
        }
        
        .gradient-bg {
          background: linear-gradient(-45deg, #ffffff, #dcfce7, #ffffff);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }
        
        .hero-gradient {
          background: linear-gradient(135deg, #1a1a1a 0%, #166534 50%, #ffffff 100%);
        }
        
        .feature-gradient-1 {
          background: linear-gradient(135deg, #dcfce7 0%, #ffffff 100%);
        }
        
        .feature-gradient-2 {
          background: linear-gradient(135deg, #ffffff 0%, #dcfce7 100%);
        }
        
        .feature-gradient-3 {
          background: linear-gradient(135deg, #16a34a 0%, #86efac 100%);
        }
        
        .float-animation {
          animation: float-up 0.8s ease-out forwards;
        }
        
        .flow-card {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
        }
        
        .flow-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(34, 197, 94, 0.2);
        }
        
        .cta-button {
          position: relative;
          overflow: hidden;
        }
        
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.3);
          transition: left 0.5s ease;
        }
        
        .cta-button:hover::before {
          left: 100%;
        }
        
        .service-card {
          background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%);
          border: 1px solid #dcfce7;
        }
        
        .step-number {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #15803d 0%, #22c55e 100%);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-white/80 z-50 border-b border-green-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 50C20 50 15 45 10 50M25 60L20 75M35 40L30 25M40 35C40 35 38 33 36 35M50 50C50 50 48 48 46 50M55 45C55 45 53 43 51 45M65 55C65 55 63 53 61 55M70 50C70 50 68 48 66 50M75 60L80 75M85 50C85 50 90 45 95 50" stroke="#000000" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="30" cy="65" r="12" stroke="#000000" strokeWidth="3" fill="none"/>
              <circle cx="70" cy="65" r="12" stroke="#000000" strokeWidth="3" fill="none"/>
              <rect x="35" y="55" width="30" height="15" stroke="#000000" strokeWidth="2.5" fill="none" rx="2"/>
            </svg>
            <span className="font-bold text-xl bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">AgroFleet</span>
          </div>
          <div className="hidden lg:flex gap-6">
            <a href="/machinery-rental" className="text-gray-700 hover:text-green-600 transition font-medium text-sm">Machinery Rental</a>
            <a href="#government-schemes" className="text-gray-700 hover:text-green-600 transition font-medium text-sm">Government Schemes</a>
            <a href="#fertilizer-ai" className="text-gray-700 hover:text-green-600 transition font-medium text-sm">Fertilizer AI</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition font-medium text-sm">How It Works</a>
          </div>
          <button className="px-6 py-2.5 bg-green-600 text-white rounded-full hover:bg-green-700 transition font-medium text-sm shadow-lg shadow-green-600/20">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient relative pt-32 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="float-animation">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Smart Farming Starts With <span className="bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">AgroFleet</span>
                </h1>
                <p className="text-lg text-gray-100 mb-8 leading-relaxed">
                  Access smart machinery rental, AI-powered fertilizer guidance, government scheme assistance, and expert recommendations - all in one platform designed for modern farmers.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cta-button px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:shadow-xl shadow-green-500/30 transition">
                  Get Started
                </button>
                <button className="cta-button px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-700 transition">
                  Explore Services
                </button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="relative w-full h-96 bg-gradient-to-br from-green-200 to-white rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://cdn.builder.io/api/v1/image/assets%2Fb79a64d886b0462488d71f4f7a86048f%2Fb86d194e5fe841d28f0349dc4571b5ed?format=webp&width=600" alt="Smart farming" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="bg-gradient-to-r from-green-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50,000+</div>
              <p className="text-gray-700 font-medium">Farmers Trusted</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5,000+</div>
              <p className="text-gray-700 font-medium">Machinery Owners</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">28</div>
              <p className="text-gray-700 font-medium">States Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flowing Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>

      {/* Services Section */}
      <section id="services" className="relative py-32 bg-gradient-to-b from-white via-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Farming Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to optimize your farm - from equipment to guidance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🚜", title: "Machinery Rental", desc: "Access quality farm equipment when you need it, without the ownership cost", id: "machinery-rental", link: "/machinery-rental" },
              { icon: "🧪", title: "Smart Fertilizer AI", desc: "Get AI-powered fertilizer recommendations based on soil health and crops", id: "fertilizer-ai", link: "#" },
              { icon: "📋", title: "Government Schemes", desc: "Navigate subsidies and schemes with expert guidance and easy applications", id: "government-schemes", link: "#" },
              { icon: "⚖️", title: "Machine Comparison", desc: "Compare farm equipment features, prices, and availability side-by-side", id: "machine-comparison", link: "#" },
              { icon: "🎯", title: "Personalized Recommendations", desc: "Receive tailored suggestions based on your farm profile and needs", id: "personalized-recommendations", link: "#" },
              { icon: "🌾", title: "Crop-Based Guidance", desc: "Expert tips for every crop - from sowing to harvesting", id: "crop-guidance", link: "#" }
            ].map((service, index) => (
              <a key={index} href={service.link} id={service.id} className="flow-card service-card p-8 rounded-2xl shadow-lg hover:shadow-xl scroll-mt-20 block cursor-pointer hover:no-underline">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center text-3xl mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Flowing Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>

      {/* How It Works */}
      <section id="how-it-works" className="relative py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20">
            How It <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Works</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "1", title: "Choose Service", desc: "Select the service you need - machinery rental, AI guidance, or scheme assistance" },
              { step: "2", title: "Get Recommendations", desc: "Receive personalized recommendations based on your farm and requirements" },
              { step: "3", title: "Book & Grow", desc: "Complete your booking securely and start seeing results immediately" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="step-number rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <svg className="w-12 h-12 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flowing Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>

      {/* Why Trust AgroFleet */}
      <section className="relative py-32 bg-gradient-to-b from-white via-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20">
            Why Trust <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">AgroFleet</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: "✓", title: "Verified Owners", color: "bg-blue-50 border-blue-200" },
              { icon: "💰", title: "Transparent Pricing", color: "bg-green-50 border-green-200" },
              { icon: "🤖", title: "AI-Powered Insights", color: "bg-purple-50 border-purple-200" },
              { icon: "🔒", title: "Secure Booking", color: "bg-orange-50 border-orange-200" },
              { icon: "👨‍🌾", title: "Farmer Support", color: "bg-red-50 border-red-200" }
            ].map((trust, index) => (
              <div key={index} className={`flow-card p-6 rounded-xl border ${trust.color} text-center`}>
                <div className="text-3xl mb-3">{trust.icon}</div>
                <h3 className="font-semibold text-gray-900">{trust.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flowing Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>

      {/* Testimonials */}
      <section className="relative py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20">
            What Farmers <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Say</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", location: "Punjab", text: "AgroFleet helped me reduce machinery costs by 40% and the AI fertilizer guidance increased my yield by 25%. Highly recommended!" },
              { name: "Priya Sharma", location: "Maharashtra", text: "The platform is so easy to use. I got government scheme assistance within days and saved thousands on paperwork. Great service!" },
              { name: "Vikram Singh", location: "Haryana", text: "As a machinery owner, AgroFleet has given me consistent business. The verified buyer system and transparent pricing are excellent." }
            ].map((testimonial, index) => (
              <div key={index} className="flow-card bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-200 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flowing Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>

      {/* CTA Section */}
      <section id="contact" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-green-900 to-gray-900"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join AgroFleet?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Thousands of farmers and machinery owners are already growing smarter. Be part of the farming revolution.
          </p>
          <button className="cta-button px-10 py-5 bg-gradient-to-r from-green-400 to-green-500 text-gray-900 rounded-full font-bold text-lg hover:shadow-2xl shadow-green-500/50 transition">
            Join AgroFleet Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 50C20 50 15 45 10 50M25 60L20 75M35 40L30 25M40 35C40 35 38 33 36 35M50 50C50 50 48 48 46 50M55 45C55 45 53 43 51 45M65 55C65 55 63 53 61 55M70 50C70 50 68 48 66 50M75 60L80 75M85 50C85 50 90 45 95 50" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="30" cy="65" r="12" stroke="#22c55e" strokeWidth="3" fill="none"/>
                  <circle cx="70" cy="65" r="12" stroke="#22c55e" strokeWidth="3" fill="none"/>
                  <rect x="35" y="55" width="30" height="15" stroke="#22c55e" strokeWidth="2.5" fill="none" rx="2"/>
                </svg>
                <span className="font-bold text-white text-lg">AgroFleet</span>
              </div>
              <p className="text-sm text-gray-400">Empowering farmers with technology and smart solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">About</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Mission</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Machinery Rental</a></li>
                <li><a href="#" className="hover:text-green-400 transition">AI Fertilizer</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Government Schemes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Contact: +91 9876543210</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Email: info@agrofleet.com</a></li>
                <li><a href="#" className="hover:text-green-400 transition">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
              <p className="text-sm text-gray-400">&copy; 2024 AgroFleet. Transforming agriculture with technology.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-green-400 transition">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
