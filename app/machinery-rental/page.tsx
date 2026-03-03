'use client';

import { useState } from 'react';

type Step = 'landing' | 'farmer-login' | 'owner-login' | 'farmer-dashboard' | 'owner-dashboard';

export default function MachineryRental() {
  const [step, setStep] = useState<Step>('landing');
  const [activeTab, setActiveTab] = useState('browse');

  const handleLogout = () => {
    setStep('landing');
    setActiveTab('browse');
  };

  const farmersData = [
    { icon: '🚜', name: 'Tractor', category: 'Ploughing', price: '₹1,500/day', location: 'Nashik, MH', owner: 'Rajesh P.', availability: 'Available', rating: 4.8, distance: '2.5 km' },
    { icon: '🌾', name: 'Combine Harvester', category: 'Harvesting', price: '₹5,000/day', location: 'Aurangabad, MH', owner: 'Vikram S.', availability: 'Available', rating: 4.9, distance: '5.2 km' },
    { icon: '🔄', name: 'Rotavator', category: 'Soil Preparation', price: '₹1,200/day', location: 'Parbhani, MH', owner: 'Priya M.', availability: 'Available', rating: 4.7, distance: '3.8 km' },
    { icon: '🌱', name: 'Seeder Machine', category: 'Sowing', price: '₹800/day', location: 'Nashik, MH', owner: 'Arjun K.', availability: 'Available', rating: 4.6, distance: '1.9 km' },
    { icon: '💨', name: 'Sprayer', category: 'Pest Control', price: '₹600/day', location: 'Aurangabad, MH', owner: 'Sanjay R.', availability: 'Available', rating: 4.5, distance: '6.1 km' },
    { icon: '🚜', name: 'Mini Tractor', category: 'Ploughing', price: '₹900/day', location: 'Parbhani, MH', owner: 'Ramesh N.', availability: 'Available', rating: 4.8, distance: '4.3 km' }
  ];

  // LANDING PAGE
  if (step === 'landing') {
    return (
      <div className="w-full min-h-screen bg-gray-50">
        {/* Top Navigation */}
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">AgroFleet</h1>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setStep('farmer-login')}
                className="px-6 py-2 text-green-600 font-semibold hover:bg-green-50 rounded-lg transition"
              >
                Log in as Farmer
              </button>
              <button 
                onClick={() => setStep('owner-login')}
                className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
              >
                Log in as Owner
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 py-20 md:py-32 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Smart Machinery Rental Platform</h1>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">Rent farm equipment on-demand. Connect farmers with verified machinery owners. Real-time booking, transparent pricing, and secure payments.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setStep('farmer-login')}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-bold hover:shadow-lg transition"
              >
                Get Started as Farmer
              </button>
              <button 
                onClick={() => setStep('owner-login')}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-green-700 transition"
              >
                Earn as Owner
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose AgroFleet?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-green-50 rounded-2xl border border-green-200">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">GPS-Based Matching</h3>
                <p className="text-gray-700">Find available machinery near your farm with real-time GPS tracking and location-based recommendations.</p>
              </div>
              <div className="p-8 bg-green-50 rounded-2xl border border-green-200">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Secure & Verified</h3>
                <p className="text-gray-700">All owners are verified. Escrow payments protect both farmers and owners. 24/7 customer support.</p>
              </div>
              <div className="p-8 bg-green-50 rounded-2xl border border-green-200">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Instant Booking</h3>
                <p className="text-gray-700">Book machinery in minutes. Flexible rental periods. Real-time availability calendar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">50,000+</div>
                <p className="text-green-100">Active Farmers</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">5,000+</div>
                <p className="text-green-100">Verified Owners</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">₹10Cr+</div>
                <p className="text-green-100">Transactions</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">28</div>
                <p className="text-green-100">States Covered</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">1</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Search</h3>
                <p className="text-gray-700">Find machinery near your location using GPS-based search and filters.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">2</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Book</h3>
                <p className="text-gray-700">Select dates, confirm booking, and secure payment with escrow protection.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">3</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Use & Track</h3>
                <p className="text-gray-700">Track usage with GPS, upload photos, and complete your farm work.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Farming?</h2>
            <p className="text-xl text-gray-600 mb-12">Join thousands of farmers and owners already using AgroFleet to optimize their operations.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setStep('farmer-login')}
                className="px-8 py-4 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition"
              >
                Login as Farmer
              </button>
              <button 
                onClick={() => setStep('owner-login')}
                className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-full font-bold hover:bg-green-50 transition"
              >
                Login as Owner
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // FARMER LOGIN
  if (step === 'farmer-login') {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-2xl">
          <button 
            onClick={() => setStep('landing')}
            className="text-gray-600 hover:text-gray-900 mb-6 flex items-center gap-2 font-semibold"
          >
            ← Back to Home
          </button>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">Farmer Login</h2>
          <p className="text-gray-600 mb-8">Sign in to rent machinery</p>

          <div className="space-y-4 mb-6">
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200" 
            />
          </div>

          <button 
            onClick={() => setStep('farmer-dashboard')}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition mb-4"
          >
            Sign In
          </button>

          <p className="text-center text-gray-600">
            Don't have an account? <a href="#" className="text-green-600 font-semibold hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    );
  }

  // OWNER LOGIN
  if (step === 'owner-login') {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-2xl">
          <button 
            onClick={() => setStep('landing')}
            className="text-gray-600 hover:text-gray-900 mb-6 flex items-center gap-2 font-semibold"
          >
            ← Back to Home
          </button>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">Owner Login</h2>
          <p className="text-gray-600 mb-8">Sign in to manage your machinery</p>

          <div className="space-y-4 mb-6">
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200" 
            />
          </div>

          <button 
            onClick={() => setStep('owner-dashboard')}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition mb-4"
          >
            Sign In
          </button>

          <p className="text-center text-gray-600">
            Don't have an account? <a href="#" className="text-green-600 font-semibold hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    );
  }

  // FARMER DASHBOARD
  if (step === 'farmer-dashboard') {
    return (
      <div className="w-full min-h-screen bg-gray-50">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">AgroFleet - Farmer Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">Profile</button>
              <button 
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 flex gap-8">
            <button 
              onClick={() => setActiveTab('browse')}
              className={`py-4 font-semibold transition border-b-2 ${activeTab === 'browse' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-600'}`}
            >
              Browse Machinery
            </button>
            <button 
              onClick={() => setActiveTab('bookings')}
              className={`py-4 font-semibold transition border-b-2 ${activeTab === 'bookings' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-600'}`}
            >
              My Bookings
            </button>
          </div>
        </div>

        {/* Browse Tab */}
        {activeTab === 'browse' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Nearby Machinery</h2>
            
            {/* Map */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center border-2 border-gray-300 mb-12">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-xl font-semibold text-gray-700">Interactive Map View</p>
                <p className="text-gray-600 mt-2">📍 Your Location: Nashik, Maharashtra</p>
                <p className="text-green-600 font-semibold mt-3">Found 12 machines nearby</p>
              </div>
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <input 
                type="text" 
                placeholder="Search by location..." 
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <div className="flex gap-2">
                {['Tractor', 'Harvester', 'Seeder', 'Rotavator'].map((filter) => (
                  <button 
                    key={filter}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-green-50 hover:border-green-500 transition text-sm font-medium"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Machinery Cards */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Machinery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {farmersData.map((machine, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100">
                  <div className="bg-gradient-to-br from-green-100 to-green-50 h-48 flex items-center justify-center text-7xl relative">
                    {machine.icon}
                    <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{machine.availability}</span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{machine.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{machine.category}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">💰 Price</span>
                        <span className="font-bold text-green-600 text-lg">{machine.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">📍 Location</span>
                        <span className="font-semibold text-gray-900">{machine.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">🚗 Distance</span>
                        <span className="font-semibold text-gray-900">{machine.distance}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">⭐ Rating</span>
                        <span className="font-bold text-yellow-500">{machine.rating}/5</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Owner</span>
                        <span className="font-semibold text-gray-900">{machine.owner}</span>
                      </div>
                    </div>

                    <div className="mb-6 p-4 bg-green-50 rounded-lg text-sm">
                      <p className="font-semibold text-gray-900 mb-2">📅 Availability</p>
                      <p className="text-green-700">Mon, Tue, Thu, Fri, Sat</p>
                    </div>

                    <div className="flex gap-3 mb-4">
                      <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-2 rounded-lg hover:shadow-lg transition">
                        Book Now
                      </button>
                      <button className="flex-1 border-2 border-green-500 text-green-600 font-bold py-2 rounded-lg hover:bg-green-50 transition">
                        Compare
                      </button>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 text-sm bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition font-semibold">💬 Chat</button>
                      <button className="flex-1 text-sm bg-orange-50 text-orange-600 py-2 rounded-lg hover:bg-orange-100 transition font-semibold">📞 Call</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Active Bookings</h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🚜 Tractor Rental</h3>
                  <p className="text-gray-600 mb-6">From: Rajesh P. (Nashik)</p>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Start:</span> Today 08:00 AM</p>
                    <p className="text-gray-700"><span className="font-semibold">End:</span> Tomorrow 05:00 PM</p>
                    <p className="text-gray-700"><span className="font-semibold">Duration:</span> 21 hours</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-4">📍 GPS Tracking</h4>
                  <div className="bg-gray-100 h-40 rounded-lg flex items-center justify-center mb-4 text-gray-600">
                    🗺️ Live GPS Map
                  </div>
                  <p className="text-sm text-gray-600">Current location: Your Farm</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="font-semibold text-green-800">✓ Work Status</p>
                    <p className="text-sm text-green-700 mt-2">In Progress - 85%</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="font-semibold text-yellow-800">⚠️ AI Alert</p>
                    <p className="text-sm text-yellow-700 mt-2">2 hours late return</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:shadow-lg transition">
                  Mark Complete
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition">
                  Support
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // OWNER DASHBOARD
  if (step === 'owner-dashboard') {
    return (
      <div className="w-full min-h-screen bg-gray-50">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">AgroFleet - Owner Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">Profile</button>
              <button 
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 text-sm font-semibold mb-2">Total Earnings</p>
              <p className="text-4xl font-bold text-green-600">₹45,000</p>
              <p className="text-xs text-gray-500 mt-2">+₹3,200 this month</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 text-sm font-semibold mb-2">Active Bookings</p>
              <p className="text-4xl font-bold text-blue-600">3</p>
              <p className="text-xs text-gray-500 mt-2">2 in progress</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 text-sm font-semibold mb-2">My Machines</p>
              <p className="text-4xl font-bold text-purple-600">5</p>
              <p className="text-xs text-gray-500 mt-2">4 available</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 text-sm font-semibold mb-2">Trust Score</p>
              <p className="text-4xl font-bold text-yellow-600">4.8⭐</p>
              <p className="text-xs text-gray-500 mt-2">32 reviews</p>
            </div>
          </div>

          {/* Add Machine Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Add New Machinery</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Machine Name</label>
                  <input type="text" placeholder="e.g., Tractor Model X-500" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Category</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    <option>Ploughing</option>
                    <option>Harvesting</option>
                    <option>Sowing</option>
                    <option>Soil Preparation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Location</label>
                  <input type="text" placeholder="Nashik, Maharashtra" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Rental Price (Per Day)</label>
                  <input type="number" placeholder="₹ 1500" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Machine Images</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 cursor-pointer transition">
                    <p className="text-2xl mb-2">📸</p>
                    <p className="text-gray-700 font-semibold">Click to upload</p>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Availability Calendar</label>
                  <input type="text" placeholder="Click to select dates" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
                </div>
              </div>
            </div>

            <button className="mt-8 w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition">
              Add Machine
            </button>
          </div>

          {/* My Machines */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Machines</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {farmersData.slice(0, 4).map((machine, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-green-100 to-green-50 h-32 flex items-center justify-center text-5xl">{machine.icon}</div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{machine.name}</h3>
                  <div className="space-y-2 text-gray-700 mb-4">
                    <p><span className="font-semibold">Category:</span> {machine.category}</p>
                    <p><span className="font-semibold">Price:</span> {machine.price}</p>
                    <p><span className="font-semibold">Location:</span> {machine.location}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 text-sm font-bold">Edit</button>
                    <button className="flex-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 text-sm font-bold">Stats</button>
                    <button className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 text-sm font-bold">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Requests */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Booking Requests</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Farmer</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Machine</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Dates</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Amount</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { farmer: 'Arjun Singh', machine: 'Tractor', dates: 'Dec 20-22', amount: '₹3,000', status: 'Pending' },
                  { farmer: 'Priya Sharma', machine: 'Harvester', dates: 'Dec 23-25', amount: '₹15,000', status: 'Confirmed' }
                ].map((req, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-semibold">{req.farmer}</td>
                    <td className="px-6 py-4 text-gray-700">{req.machine}</td>
                    <td className="px-6 py-4 text-gray-700">{req.dates}</td>
                    <td className="px-6 py-4 text-green-600 font-bold">{req.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${req.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600">Accept</button>
                        <button className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600">Reject</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
