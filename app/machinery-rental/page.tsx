"use client";

import { useState, useEffect } from "react";
import {
  MapPin,
  MapIcon,
  List,
  Search,
  Filter,
  RotateCw,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LoginModal from "@/app/components/LoginModal";
import ComparisonModal from "@/app/components/ComparisonModal";
import BookingModal from "@/app/components/BookingModal";
import { machineryData, Machine } from "@/app/utils/machineData";
import { calculateDistance } from "@/app/utils/distance";
import Link from "next/link";

export default function MachineryRental() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<"farmer" | "owner" | null>(null);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [locationError, setLocationError] = useState("");
  const [viewType, setViewType] = useState<"list" | "map">("list");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"distance" | "price" | "rating">(
    "distance"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMachines, setSelectedMachines] = useState<string[]>([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showComparisonModal, setShowComparisonModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);

  // Request location permission
  const requestLocation = () => {
    setLocationError("");
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setLocationError("Unable to access location. Please enable GPS.");
          console.error(error);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by your browser.");
    }
  };

  // Auto-request location on farmer login
  useEffect(() => {
    if (isLoggedIn && userType === "farmer" && !userLocation) {
      requestLocation();
    }
  }, [isLoggedIn, userType, userLocation]);

  // Filter and sort machinery
  const filteredMachinery = machineryData
    .filter((machine) => {
      const matchesCategory =
        selectedCategory === "All" || machine.category === selectedCategory;
      const matchesSearch =
        machine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        machine.location.village
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .map((machine) => {
      const distance = userLocation
        ? calculateDistance(
            userLocation.latitude,
            userLocation.longitude,
            machine.location.latitude,
            machine.location.longitude
          )
        : null;
      return { ...machine, distance };
    })
    .sort((a, b) => {
      if (sortBy === "distance") {
        return (a.distance || 999) - (b.distance || 999);
      } else if (sortBy === "price") {
        return a.pricePerDay - b.pricePerDay;
      } else if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      return 0;
    });

  const handleLoginSuccess = (type: "farmer" | "owner") => {
    setUserType(type);
    setIsLoggedIn(true);
  };

  const handleCompare = () => {
    if (selectedMachines.length >= 2) {
      setShowComparisonModal(true);
    }
  };

  const toggleMachineSelection = (machineId: string) => {
    setSelectedMachines((prev) =>
      prev.includes(machineId)
        ? prev.filter((id) => id !== machineId)
        : [...prev, machineId]
    );
  };

  const handleBooking = (machine: Machine) => {
    if (!isLoggedIn || userType !== "farmer") {
      setShowLoginModal(true);
    } else {
      setSelectedMachine(machine);
      setShowBookingModal(true);
    }
  };

  const handleConfirmBooking = (bookingData: any) => {
    alert(
      `Booking confirmed!\nMachine: ${selectedMachine?.name}\nName: ${bookingData.name}\nPhone: ${bookingData.phone}\nDate: ${bookingData.rentalDate}\nDuration: ${bookingData.duration} days`
    );
    setShowBookingModal(false);
  };

  const comparisonMachines = selectedMachines
    .map((id) => filteredMachinery.find((m) => m.id === id))
    .filter((m) => m !== undefined) as Machine[];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {!isLoggedIn && (
        <div className="bg-blue-50 border-b-2 border-blue-200 py-4">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-blue-900 font-semibold mb-2">
              Please login to access location-based machinery rental
            </p>
            <button
              onClick={() => setShowLoginModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Login Now
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">
            Rent Farming Machinery Near You
          </h1>
          <p className="text-green-100">
            Find and book available farming equipment in your area
          </p>
        </div>
      </section>

      {/* Location Detection Banner */}
      {isLoggedIn && userType === "farmer" && (
        <section className="py-4 px-4 sm:px-6 lg:px-8 bg-white border-b">
          <div className="max-w-7xl mx-auto">
            {userLocation ? (
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      📍 Machinery available near you
                    </p>
                    <p className="text-sm text-gray-600">
                      Your location: {userLocation.latitude.toFixed(4)},{" "}
                      {userLocation.longitude.toFixed(4)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={requestLocation}
                  className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2"
                >
                  <RotateCw className="w-4 h-4" />
                  Refresh
                </button>
              </div>
            ) : (
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <p className="font-semibold text-gray-900">
                    Enable GPS to see nearby machinery
                  </p>
                </div>
                <button
                  onClick={requestLocation}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition"
                >
                  Enable GPS
                </button>
              </div>
            )}
            {locationError && (
              <p className="text-red-600 text-sm mt-2">{locationError}</p>
            )}
          </div>
        </section>
      )}

      {/* Filters and Controls */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search machinery or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Filters and Sorting */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Filter className="w-4 h-4 inline mr-1" />
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="All">All Machinery</option>
                <option value="Tractor">Tractor</option>
                <option value="Harvester">Harvester</option>
                <option value="Seeder">Seeder</option>
                <option value="Rotavator">Rotavator</option>
              </select>
            </div>

            {/* Sort Options */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "distance" | "price" | "rating")
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="distance">Distance (Nearest First)</option>
                <option value="price">Price (Low to High)</option>
                <option value="rating">Rating (Highest First)</option>
              </select>
            </div>

            {/* View Toggle */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                View
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewType("list")}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg font-semibold transition ${
                    viewType === "list"
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  <List className="w-4 h-4" />
                  List
                </button>
                <button
                  onClick={() => setViewType("map")}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg font-semibold transition ${
                    viewType === "map"
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  <MapIcon className="w-4 h-4" />
                  Map
                </button>
              </div>
            </div>
          </div>

          {/* Compare Button */}
          {selectedMachines.length >= 2 && (
            <button
              onClick={handleCompare}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition"
            >
              Compare {selectedMachines.length} Machinery
            </button>
          )}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredMachinery.length} Results Found
            </h2>
          </div>

          {viewType === "list" ? (
            // List View
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMachinery.map((machine) => (
                <div
                  key={machine.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
                >
                  {/* Image */}
                  <div className="w-full h-48 bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center text-6xl group-hover:scale-110 transition">
                    {machine.image}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {machine.name}
                    </h3>

                    {/* Location and Distance */}
                    <div>
                      <p className="text-sm text-gray-600">
                        <MapPin className="w-4 h-4 inline mr-1" />
                        {machine.location.village}
                      </p>
                      {machine.distance && (
                        <p className="text-xs text-gray-500">
                          {machine.distance} km away
                        </p>
                      )}
                    </div>

                    {/* Availability Badge */}
                    <div>
                      {machine.availability ? (
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                          Available
                        </span>
                      ) : (
                        <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                          Booked
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="text-sm">
                      <span className="text-yellow-500 font-bold">
                        {machine.rating}★
                      </span>
                      <span className="text-gray-600 ml-2">
                        ({machine.reviews} reviews)
                      </span>
                    </div>

                    {/* Price */}
                    <p className="text-2xl font-bold text-green-600">
                      ₹{machine.pricePerDay}/day
                    </p>

                    {/* Compare Checkbox and Book Button */}
                    <div className="flex gap-2">
                      <label className="flex items-center gap-2 cursor-pointer flex-1">
                        <input
                          type="checkbox"
                          checked={selectedMachines.includes(machine.id)}
                          onChange={() => toggleMachineSelection(machine.id)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm text-gray-700">Compare</span>
                      </label>
                      <button
                        onClick={() => handleBooking(machine)}
                        disabled={!machine.availability}
                        className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-semibold transition"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Map View Placeholder
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center border-2 border-gray-300">
              <div className="text-center space-y-4">
                <MapIcon className="w-16 h-16 mx-auto text-gray-600" />
                <p className="text-xl font-bold text-gray-800">Map View</p>
                <p className="text-gray-600 max-w-md">
                  Google Maps integration coming soon. Currently showing list
                  view sorted by distance.
                </p>
                <button
                  onClick={() => setViewType("list")}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                >
                  Switch to List View
                </button>
              </div>
            </div>
          )}

          {filteredMachinery.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No machinery found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <ComparisonModal
        isOpen={showComparisonModal}
        machines={comparisonMachines}
        onClose={() => setShowComparisonModal(false)}
      />

      <BookingModal
        isOpen={showBookingModal}
        machine={selectedMachine}
        userLocation={userLocation}
        onClose={() => setShowBookingModal(false)}
        onConfirm={handleConfirmBooking}
      />

      <Footer />
    </div>
  );
}
