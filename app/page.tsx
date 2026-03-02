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
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-white/80 z-50 border-b border-green-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              🚜
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">AgroFleet</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-700 hover:text-green-600 transition font-medium text-sm">Features</a>
            <a href="#benefits" className="text-gray-700 hover:text-green-600 transition font-medium text-sm">Benefits</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition font-medium text-sm">Contact</a>
          </div>
          <button className="px-6 py-2.5 bg-green-600 text-white rounded-full hover:bg-green-700 transition font-medium text-sm shadow-lg shadow-green-600/20">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient relative pt-32 pb-24 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="float-animation">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Transform Your <span className="bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">Farm</span>
                </h1>
                <p className="text-lg text-gray-100 mb-8 leading-relaxed">
                  Modern farming intelligence that adapts to your needs. Real-time insights, predictive analytics, and actionable recommendations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cta-button px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:shadow-xl shadow-green-500/30 transition">
                  Start Free Trial
                </button>
                <button className="cta-button px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-700 transition">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="relative w-full h-96 bg-gradient-to-br from-green-200 to-white rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://cdn.builder.io/api/v1/image/assets%2Fb79a64d886b0462488d71f4f7a86048f%2Fb86d194e5fe841d28f0349dc4571b5ed?format=webp&width=600" alt="Modern farming" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flowing Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>

      {/* Features Section */}
      <section id="features" className="relative py-32 bg-gradient-to-b from-white via-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to optimize your farming operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flow-card feature-gradient-1 p-8 rounded-2xl border border-green-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                📊
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Real-Time Analytics
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Monitor crop health, soil conditions, and weather patterns with live data streaming and intelligent dashboards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flow-card feature-gradient-2 p-8 rounded-2xl border border-green-200 shadow-lg transform md:translate-y-8">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                🌐
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Weather Intelligence
              </h3>
              <p className="text-gray-700 leading-relaxed">
                AI-powered weather predictions and hyperlocal forecasts to optimize irrigation, spraying, and harvesting schedules.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flow-card feature-gradient-3 p-8 rounded-2xl border border-green-300 shadow-lg">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Predictive Insights
              </h3>
              <p className="text-green-50 leading-relaxed">
                Machine learning models that predict yields, disease outbreaks, and optimal harvest times with 95% accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flowing Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>

      {/* Benefits Section */}
      <section id="benefits" className="relative py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Why Farmers <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Love</span> AgroFleet
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { icon: "📈", title: "30% Yield Increase", desc: "Proven results with data-driven farming decisions" },
              { icon: "💧", title: "25% Water Savings", desc: "Optimize irrigation with precision watering" },
              { icon: "🚨", title: "24/7 Alerts", desc: "Never miss critical farm events with instant notifications" },
              { icon: "📱", title: "Mobile First", desc: "Manage your farm from anywhere with our app" }
            ].map((benefit, index) => (
              <div key={index} className="flow-card group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-8 rounded-2xl border border-green-100 hover:border-green-300 transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
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
            Ready to Revolutionize Your Farming?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Join thousands of farmers worldwide who are already growing smarter with AgroFleet.
          </p>
          <button className="cta-button px-10 py-5 bg-gradient-to-r from-green-400 to-green-500 text-gray-900 rounded-full font-bold text-lg hover:shadow-2xl shadow-green-500/50 transition">
            Start Your Journey Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                  🚜
                </div>
                <span className="font-bold text-white text-lg">AgroFleet</span>
              </div>
              <p className="text-sm text-gray-400">Modern farming intelligence for the next generation.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">About</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 AgroFleet. Transforming agriculture with technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
