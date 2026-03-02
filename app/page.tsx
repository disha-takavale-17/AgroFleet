import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 text-2xl">
            🚜
          </div>
          <div className="flex items-center justify-center text-2xl">
            🍃
          </div>
          <span className="font-bold text-lg text-gray-900">AgroFleet</span>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#features" className="text-gray-700 hover:text-green-700 transition">Features</a>
          <a href="#benefits" className="text-gray-700 hover:text-green-700 transition">Benefits</a>
          <a href="#contact" className="text-gray-700 hover:text-green-700 transition">Contact</a>
        </div>
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero-section relative px-6 py-20 md:py-32 bg-cover bg-center" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://cdn.builder.io/api/v1/image/assets%2Fb79a64d886b0462488d71f4f7a86048f%2Fb86d194e5fe841d28f0349dc4571b5ed?format=webp&width=1200')`}}>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="hero-title text-4xl md:text-5xl font-bold text-white mb-6">
            Smart Crop & Farm Management
          </h1>
          <p className="hero-subtitle text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Optimize your farming operations with real-time crop monitoring, weather tracking, and data-driven insights. Grow smarter, not harder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cta-primary px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
              Start Free Trial
            </button>
            <button className="cta-secondary px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-green-600 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="features-title text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Features for Modern Farmers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card p-8 bg-green-50 rounded-lg border border-green-200">
              <div className="feature-icon w-12 h-12 bg-green-600 rounded-lg mb-4"></div>
              <h3 className="feature-title text-xl font-semibold text-gray-900 mb-3">
                Real-Time Monitoring
              </h3>
              <p className="feature-description text-gray-600">
                Track crop health, soil conditions, and moisture levels in real-time with advanced sensors and analytics.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card p-8 bg-green-50 rounded-lg border border-green-200">
              <div className="feature-icon w-12 h-12 bg-green-600 rounded-lg mb-4"></div>
              <h3 className="feature-title text-xl font-semibold text-gray-900 mb-3">
                Weather Intelligence
              </h3>
              <p className="feature-description text-gray-600">
                Get precise weather forecasts and alerts to plan irrigation, pesticide application, and harvesting.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card p-8 bg-green-50 rounded-lg border border-green-200">
              <div className="feature-icon w-12 h-12 bg-green-600 rounded-lg mb-4"></div>
              <h3 className="feature-title text-xl font-semibold text-gray-900 mb-3">
                Data Analytics
              </h3>
              <p className="feature-description text-gray-600">
                Get actionable insights from your farming data to optimize yields and reduce costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits-section px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="benefits-title text-3xl font-bold text-center text-gray-900 mb-12">
            Why Farmers Choose AgroFleet
          </h2>
          <div className="space-y-4">
            {[
              "Increase crop yield by up to 30% with data-driven decisions",
              "Reduce water usage and operational costs by 25%",
              "Get alerts 24/7 for critical farm events",
              "Easy-to-use mobile app for on-the-go farm management"
            ].map((benefit, index) => (
              <div key={index} className="benefit-item flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="benefit-text text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section px-6 py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="cta-title text-3xl font-bold text-white mb-4">
            Ready to Transform Your Farm?
          </h2>
          <p className="cta-text text-green-100 mb-8 text-lg">
            Join thousands of farmers already using AgroFleet to maximize their harvests.
          </p>
          <button className="px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer px-6 py-12 bg-gray-900 text-gray-300">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center text-xl">
                  🚜
                </div>
                <div className="flex items-center justify-center text-xl">
                  🍃
                </div>
                <span className="font-bold text-white">AgroFleet</span>
              </div>
              <p className="text-sm text-gray-400">Smart farming solutions for modern agriculture.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-300 transition">Features</a></li>
                <li><a href="#" className="hover:text-green-300 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-green-300 transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-300 transition">About</a></li>
                <li><a href="#" className="hover:text-green-300 transition">Blog</a></li>
                <li><a href="#" className="hover:text-green-300 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-300 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-green-300 transition">Terms</a></li>
                <li><a href="#" className="hover:text-green-300 transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2024 AgroFleet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
