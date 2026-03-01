"use client";

import { X, Tractor, Users } from "lucide-react";
import { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (userType: "farmer" | "owner") => void;
}

export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [step, setStep] = useState<"select" | "form">("select");
  const [userType, setUserType] = useState<"farmer" | "owner" | null>(null);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleUserTypeSelect = (type: "farmer" | "owner") => {
    setUserType(type);
    setStep("form");
  };

  const handleLogin = () => {
    if (formData.email && formData.password) {
      onLoginSuccess(userType!);
      setStep("select");
      setUserType(null);
      setFormData({ email: "", password: "" });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold">AgroFleet Login</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-lg transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          {step === "select" ? (
            <>
              <p className="text-gray-700 text-center mb-6">
                Choose your role to continue
              </p>
              <div className="space-y-4">
                {/* Farmer Login */}
                <button
                  onClick={() => handleUserTypeSelect("farmer")}
                  className="w-full p-6 border-2 border-green-200 rounded-xl hover:border-green-600 hover:bg-green-50 transition text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition">
                      <Tractor className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Farmer</h3>
                      <p className="text-sm text-gray-600">
                        Rent farming machinery
                      </p>
                    </div>
                  </div>
                </button>

                {/* Owner Login */}
                <button
                  onClick={() => handleUserTypeSelect("owner")}
                  className="w-full p-6 border-2 border-blue-200 rounded-xl hover:border-blue-600 hover:bg-blue-50 transition text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Equipment Owner</h3>
                      <p className="text-sm text-gray-600">
                        Manage your machinery
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => setStep("select")}
                className="text-green-600 font-semibold mb-4 hover:underline text-sm"
              >
                ← Back
              </button>

              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {userType === "farmer" ? "Farmer" : "Equipment Owner"} Login
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder="••••••••"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <button
                  onClick={handleLogin}
                  disabled={!formData.email || !formData.password}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-semibold transition mt-4"
                >
                  Login
                </button>
              </div>

              <p className="text-center text-sm text-gray-600 mt-4">
                Don't have an account?{" "}
                <a href="#" className="text-green-600 font-semibold">
                  Sign up
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
