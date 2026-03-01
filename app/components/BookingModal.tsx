"use client";

import { X, MapPin } from "lucide-react";
import { Machine } from "@/app/utils/machineData";
import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  machine: Machine | null;
  userLocation: { latitude: number; longitude: number } | null;
  onClose: () => void;
  onConfirm: (bookingData: any) => void;
}

export default function BookingModal({
  isOpen,
  machine,
  userLocation,
  onClose,
  onConfirm,
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    rentalDate: "",
    duration: 1,
    notes: "",
  });

  const handleConfirm = () => {
    if (formData.name && formData.phone && formData.rentalDate) {
      onConfirm({
        ...formData,
        machineId: machine?.id,
        userLocation,
      });
      setFormData({ name: "", phone: "", rentalDate: "", duration: 1, notes: "" });
      onClose();
    }
  };

  if (!isOpen || !machine) return null;

  const totalPrice = machine.pricePerDay * formData.duration;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Book Machinery</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-lg transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Machine Info */}
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-semibold text-gray-900">{machine.name}</p>
            <p className="text-sm text-gray-700">
              {machine.location.village}
            </p>
            <p className="text-lg font-bold text-green-600 mt-2">
              ₹{machine.pricePerDay}/day
            </p>
          </div>

          {/* Location Confirmation */}
          {userLocation && (
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 flex items-start gap-2">
              <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-gray-900">
                  Location Confirmed
                </p>
                <p className="text-gray-600 text-xs">
                  Lat: {userLocation.latitude.toFixed(4)}, Lon:{" "}
                  {userLocation.longitude.toFixed(4)}
                </p>
              </div>
            </div>
          )}

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91-XXXXXXXXXX"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
          </div>

          {/* Rental Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Rental Date
            </label>
            <input
              type="date"
              value={formData.rentalDate}
              onChange={(e) =>
                setFormData({ ...formData, rentalDate: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Duration (Days)
            </label>
            <input
              type="number"
              min="1"
              value={formData.duration}
              onChange={(e) =>
                setFormData({ ...formData, duration: parseInt(e.target.value) })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
          </div>

          {/* Total Price */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-900">Total Price:</span>
              <span className="text-2xl font-bold text-green-600">
                ₹{totalPrice.toLocaleString()}
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              {formData.duration} day{formData.duration > 1 ? "s" : ""} × ₹
              {machine.pricePerDay}
            </p>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            disabled={!formData.name || !formData.phone || !formData.rentalDate}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-3 rounded-lg font-semibold transition mt-4"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}
