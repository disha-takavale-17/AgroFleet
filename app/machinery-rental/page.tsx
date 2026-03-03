'use client';

import { useState } from 'react';

export default function MachineryRental() {
  const [userRole, setUserRole] = useState<'role-select' | 'farmer' | 'owner'>('role-select');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'browse' | 'bookings' | 'dashboard'>('browse');
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const farmersData = [
    { icon: '🚜', name: 'Tractor', category: 'Ploughing', price: '₹1,500/day', location: 'Nashik, MH', owner: 'Rajesh P.', availability: 'Available', image: '🚜', rating: 4.8, distance: '2.5 km' },
    { icon: '🌾', name: 'Combine Harvester', category: 'Harvesting', price: '₹5,000/day', location: 'Aurangabad, MH', owner: 'Vikram S.', availability: 'Available', image: '🌾', rating: 4.9, distance: '5.2 km' },
    { icon: '🔄', name: 'Rotavator', category: 'Soil Preparation', price: '₹1,200/day', location: 'Parbhani, MH', owner: 'Priya M.', availability: 'Available', image: '🔄', rating: 4.7, distance: '3.8 km' },
    { icon: '🌱', name: 'Seeder Machine', category: 'Sowing', price: '₹800/day', location: 'Nashik, MH', owner: 'Arjun K.', availability: 'Available', image: '🌱', rating: 4.6, distance: '1.9 km' },
    { icon: '💨', name: 'Sprayer', category: 'Pest Control', price: '₹600/day', location: 'Aurangabad, MH', owner: 'Sanjay R.', availability: 'Available', image: '💨', rating: 4.5, distance: '6.1 km' },
    { icon: '🚜', name: 'Mini Tractor', category: 'Ploughing', price: '₹900/day', location: 'Parbhani, MH', owner: 'Ramesh N.', availability: 'Available', image: '🚜', rating: 4.8, distance: '4.3 km' }
  ];

  if (userRole === 'role-select') {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">Welcome to AgroFleet</h1>
            <p className="text-xl text-gray-200">Choose your role to get started</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Farmer Role */}
            <div 
              onClick={() => setUserRole('farmer')}
              className="group cursor-pointer bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="text-6xl mb-6 text-center">👨‍🌾</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Farmer</h2>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">Rent quality machinery for your farm operations at affordable rates</p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  Browse nearby machines
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  Easy booking system
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  Secure payment
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  24/7 support
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 rounded-full hover:shadow-lg transition">
                Continue as Farmer
              </button>
            </div>

            {/* Owner Role */}
            <div 
              onClick={() => setUserRole('owner')}
              className="group cursor-pointer bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="text-6xl mb-6 text-center">🏭</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Owner / Hub</h2>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">Earn passive income by renting your farming machinery on AgroFleet</p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  List your machinery
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  Secure bookings
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  Track earnings
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  Premium support
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 rounded-full hover:shadow-lg transition">
                Continue as Owner
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-2xl">
          <button 
            onClick={() => setUserRole('role-select')}
            className="text-gray-600 hover:text-gray-900 mb-6 flex items-center gap-2"
          >
            ← Back to Role Selection
          </button>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {userRole === 'farmer' ? 'Farmer' : 'Owner'} Login
          </h2>
          <p className="text-gray-600 mb-8">Sign in to your account</p>

          <div className="space-y-4 mb-6">
            <input type="email" placeholder="Email address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200" />
            <input type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200" />
          </div>

          <button 
            onClick={() => setIsLoggedIn(true)}
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

  // Farmer Dashboard
  if (userRole === 'farmer') {
    return (
      <div className="w-full min-h-screen bg-gray-50">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">AgroFleet</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">Profile</button>
              <button 
                onClick={() => { setIsLoggedIn(false); setUserRole('role-select'); }}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Tab Navigation */}
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

        {activeTab === 'browse' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Map Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Nearby Machinery</h2>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center border-2 border-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-xl font-semibold">Interactive Map View</p>
                    <p className="text-gray-600 mt-2">📍 Your Location: Nashik, Maharashtra</p>
                    <p className="text-green-600 font-semibold mt-3">Found 12 machines nearby</p>
                  </div>
                </div>
                {/* Map pins simulation */}
                <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute bottom-1/4 left-1/2 w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>

              {/* Search and Filters */}
              <div className="grid md:grid-cols-2 gap-4 mt-6">
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
            </div>

            {/* Machinery Grid */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Nearby Machines Based on Your Location</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {farmersData.map((machine, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100">
                    {/* Machine Image */}
                    <div className="bg-gradient-to-br from-green-100 to-green-50 h-48 flex items-center justify-center text-7xl relative">
                      {machine.image}
                      <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{machine.availability}</span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{machine.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{machine.category}</p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">💰 Rental Price</span>
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

                      {/* Calendar Preview */}
                      <div className="mb-6 p-4 bg-green-50 rounded-lg text-sm">
                        <p className="font-semibold text-gray-900 mb-2">📅 Availability</p>
                        <p className="text-green-700">Available: Mon, Tue, Thu, Fri, Sat</p>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-3">
                        <button 
                          onClick={() => { setSelectedMachine(machine); setShowPaymentModal(true); }}
                          className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-2 rounded-lg hover:shadow-lg transition"
                        >
                          Book Now
                        </button>
                        <button className="flex-1 border-2 border-green-500 text-green-600 font-bold py-2 rounded-lg hover:bg-green-50 transition">
                          Compare
                        </button>
                      </div>

                      {/* Communication Options */}
                      <div className="mt-4 flex gap-2">
                        <button className="flex-1 text-sm bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition font-semibold">💬 Chat</button>
                        <button className="flex-1 text-sm bg-orange-50 text-orange-600 py-2 rounded-lg hover:bg-orange-100 transition font-semibold">📞 Call</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Bookings & Usage Tracking</h2>

            {/* Active Booking Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 border-l-4 border-blue-500">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🚜 Tractor Rental</h3>
                  <p className="text-gray-600 mb-6">Booked from: Rajesh P. (Nashik, MH)</p>
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
                  <p className="text-sm text-gray-600">Current location: Your Farm, Nashik</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="font-semibold text-yellow-800">⚠️ AI Monitoring</p>
                    <p className="text-sm text-yellow-700 mt-2">Machine returned 2 hours late</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="font-semibold text-green-800">✓ Work Status</p>
                    <p className="text-sm text-green-700 mt-2">In Progress - 85% completed</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="font-semibold text-blue-800">📸 Documentation</p>
                    <p className="text-sm text-blue-700 mt-2">Upload before/after photos</p>
                  </div>
                </div>
              </div>

              {/* Photo Upload Section */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Before & After Photos</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition cursor-pointer">
                    <p className="text-2xl mb-2">📷</p>
                    <p className="text-gray-700">Upload Before Photo</p>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition cursor-pointer">
                    <p className="text-2xl mb-2">📷</p>
                    <p className="text-gray-700">Upload After Photo</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:shadow-lg transition">
                  Mark as Completed
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition">
                  Contact Support
                </button>
              </div>
            </div>

            {/* AI Alerts */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Monitoring Alerts</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <p className="font-bold text-orange-800 mb-2">🚨 Late Arrival Warning</p>
                <p className="text-sm text-orange-700">Pickup was delayed by 30 minutes</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <p className="font-bold text-red-800 mb-2">⚠️ Incomplete Work Alert</p>
                <p className="text-sm text-red-700">Only 85% of field completed</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="font-bold text-green-800 mb-2">✓ No False Cancellation</p>
                <p className="text-sm text-green-700">Booking completed as promised</p>
              </div>
            </div>

            {/* Past Bookings */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Past Bookings</h3>
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b">
                  <div>
                    <p className="font-bold text-gray-900">🚜 Tractor - Rajesh P.</p>
                    <p className="text-sm text-gray-600">Completed on Dec 15, 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">₹1,500</p>
                    <p className="text-sm text-yellow-500">⭐ 4.8/5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Owner Dashboard
  if (userRole === 'owner') {
    return (
      <div className="w-full min-h-screen bg-gray-50">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">AgroFleet - Owner Hub</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">Profile</button>
              <button 
                onClick={() => { setIsLoggedIn(false); setUserRole('role-select'); }}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Dashboard Overview */}
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
              <p className="text-xs text-gray-500 mt-2">32 farmer reviews</p>
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
                  <label className="block text-gray-700 font-semibold mb-2">Location (Village/City)</label>
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
                    <p className="text-gray-700 font-semibold">Click to upload images</p>
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

          {/* My Machines List */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Machines</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {farmersData.slice(0, 4).map((machine, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-green-100 to-green-50 h-32 flex items-center justify-center text-5xl">{machine.image}</div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{machine.name}</h3>
                  <div className="space-y-2 text-gray-700 mb-4">
                    <p><span className="font-semibold">Category:</span> {machine.category}</p>
                    <p><span className="font-semibold">Price:</span> {machine.price}</p>
                    <p><span className="font-semibold">Location:</span> {machine.location}</p>
                    <p><span className="font-semibold">Status:</span> <span className="text-green-600 font-bold">Available</span></p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 text-sm font-bold">Edit</button>
                    <button className="flex-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 text-sm font-bold">📊 Stats</button>
                    <button className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 text-sm font-bold">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Requests */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Booking Requests</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
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
                    { farmer: 'Priya Sharma', machine: 'Harvester', dates: 'Dec 23-25', amount: '₹15,000', status: 'Confirmed' },
                    { farmer: 'Rajesh Kumar', machine: 'Rotavator', dates: 'Dec 26', amount: '₹1,200', status: 'Completed' }
                  ].map((req, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 font-semibold">{req.farmer}</td>
                      <td className="px-6 py-4 text-gray-700">{req.machine}</td>
                      <td className="px-6 py-4 text-gray-700">{req.dates}</td>
                      <td className="px-6 py-4 text-green-600 font-bold">{req.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${req.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : req.status === 'Confirmed' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
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

          {/* Maintenance Status */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-8">Machine Maintenance Status</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
              <h3 className="font-bold text-gray-900 mb-4">✓ Well Maintained</h3>
              <p className="text-gray-600">🚜 Tractor - Next service: Jan 15, 2025</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-gray-900 mb-4">⚠️ Needs Attention</h3>
              <p className="text-gray-600">🌾 Harvester - Schedule maintenance</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
