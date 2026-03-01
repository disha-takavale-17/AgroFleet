"use client";

import { X } from "lucide-react";
import { Machine } from "@/app/utils/machineData";

interface ComparisonModalProps {
  isOpen: boolean;
  machines: Machine[];
  onClose: () => void;
}

export default function ComparisonModal({
  isOpen,
  machines,
  onClose,
}: ComparisonModalProps) {
  if (!isOpen || machines.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 flex justify-between items-center sticky top-0">
          <h2 className="text-2xl font-bold">Compare Machinery</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-lg transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-green-200">
                <th className="text-left py-3 px-4 font-bold text-gray-900">
                  Feature
                </th>
                {machines.map((machine) => (
                  <th
                    key={machine.id}
                    className="text-left py-3 px-4 font-bold text-gray-900 text-center"
                  >
                    {machine.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Price */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold text-gray-900">
                  Price/Day
                </td>
                {machines.map((machine) => (
                  <td key={machine.id} className="py-3 px-4 text-center">
                    <span className="text-xl font-bold text-green-600">
                      ₹{machine.pricePerDay.toLocaleString()}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Distance */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold text-gray-900">
                  Location
                </td>
                {machines.map((machine) => (
                  <td key={machine.id} className="py-3 px-4 text-center">
                    <p className="text-sm text-gray-900">
                      {machine.location.village}
                    </p>
                  </td>
                ))}
              </tr>

              {/* Rating */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold text-gray-900">
                  Rating
                </td>
                {machines.map((machine) => (
                  <td key={machine.id} className="py-3 px-4 text-center">
                    <div>
                      <span className="text-lg font-bold text-yellow-500">
                        {machine.rating}★
                      </span>
                      <p className="text-xs text-gray-600">
                        ({machine.reviews} reviews)
                      </p>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Availability */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold text-gray-900">
                  Availability
                </td>
                {machines.map((machine) => (
                  <td key={machine.id} className="py-3 px-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        machine.availability
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {machine.availability ? "Available" : "Unavailable"}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Owner Response Time */}
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold text-gray-900">
                  Response Time
                </td>
                {machines.map((machine) => (
                  <td key={machine.id} className="py-3 px-4 text-center">
                    <p className="text-sm text-gray-700">
                      {machine.ownerResponseTime}
                    </p>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action */}
        <div className="bg-gray-50 p-6 border-t flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Select the best option and proceed to book
          </p>
          <button
            onClick={onClose}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
