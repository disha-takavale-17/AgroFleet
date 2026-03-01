"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface EligibilityData {
  farmerCategory: string;
  landSize: string;
  annualIncome: string;
  cropType: string;
  state: string;
  cropInsurance: string;
  solarPump: string;
}

const eligibleSchemes: Record<string, string[]> = {
  default: [
    "PM-KISAN",
    "Soil Health Card",
    "Rashtriya Krishi Vikas Yojana",
  ],
  small_marginal: [
    "PM-KISAN",
    "Kisan Credit Card",
    "Soil Health Card",
    "PM-KUSUM",
  ],
  large: ["PMFBY", "Kisan Credit Card", "e-NAM", "RKVY"],
  no_insurance: ["PMFBY", "PM-KUSUM"],
  high_income: ["e-NAM", "RKVY"],
};

export default function EligibilityForm() {
  const [formData, setFormData] = useState<EligibilityData>({
    farmerCategory: "",
    landSize: "",
    annualIncome: "",
    cropType: "",
    state: "",
    cropInsurance: "",
    solarPump: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [eligibleSchemes, setEligibleSchemes] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateEligibility = (data: EligibilityData) => {
    const schemes = new Set<string>(eligibleSchemes.default);

    // Small/Marginal farmer eligibility
    if (data.farmerCategory === "small" || data.farmerCategory === "marginal") {
      eligibleSchemes.small_marginal.forEach((s) => schemes.add(s));
    }

    // Large farmer eligibility
    if (data.farmerCategory === "large") {
      eligibleSchemes.large.forEach((s) => schemes.add(s));
    }

    // No crop insurance = eligible for PMFBY
    if (data.cropInsurance === "no") {
      eligibleSchemes.no_insurance.forEach((s) => schemes.add(s));
    }

    // No solar pump = eligible for PM-KUSUM
    if (data.solarPump === "no") {
      schemes.add("PM-KUSUM");
    }

    // High income = eligible for e-NAM and RKVY
    if (data.annualIncome === "high") {
      eligibleSchemes.high_income.forEach((s) => schemes.add(s));
    }

    return Array.from(schemes).sort();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.farmerCategory &&
      formData.landSize &&
      formData.cropType &&
      formData.state
    ) {
      const schemes = calculateEligibility(formData);
      setEligibleSchemes(schemes);
      setSubmitted(true);
    }
  };

  const allSchemes = [
    "PM-KISAN",
    "PMFBY",
    "Kisan Credit Card",
    "Soil Health Card",
    "PM-KUSUM",
    "e-NAM",
    "Rashtriya Krishi Vikas Yojana",
  ];

  return (
    <div className="space-y-8">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-200"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Check Your Eligibility
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Farmer Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Farmer Category
            </label>
            <select
              name="farmerCategory"
              value={formData.farmerCategory}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-600 font-medium"
            >
              <option value="">Select category...</option>
              <option value="marginal">Marginal Farmer (&lt;1 hectare)</option>
              <option value="small">Small Farmer (1-2 hectares)</option>
              <option value="large">Large Farmer (&gt;2 hectares)</option>
            </select>
          </div>

          {/* Land Size */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Land Size (Acres)
            </label>
            <input
              type="number"
              name="landSize"
              value={formData.landSize}
              onChange={handleChange}
              placeholder="Enter acres"
              className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-600 font-medium"
            />
          </div>

          {/* Annual Income */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Annual Income
            </label>
            <select
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-600 font-medium"
            >
              <option value="">Select range...</option>
              <option value="low">&lt; ₹1 Lakh</option>
              <option value="medium">₹1-5 Lakh</option>
              <option value="high">&gt; ₹5 Lakh</option>
            </select>
          </div>

          {/* Crop Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Primary Crop Type
            </label>
            <select
              name="cropType"
              value={formData.cropType}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-600 font-medium"
            >
              <option value="">Select crop...</option>
              <option value="rice">Rice</option>
              <option value="wheat">Wheat</option>
              <option value="cotton">Cotton</option>
              <option value="sugarcane">Sugarcane</option>
              <option value="pulses">Pulses</option>
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              State
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-600 font-medium"
            >
              <option value="">Select state...</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="punjab">Punjab</option>
              <option value="karnataka">Karnataka</option>
              <option value="uttar-pradesh">Uttar Pradesh</option>
              <option value="madhya-pradesh">Madhya Pradesh</option>
              <option value="telangana">Telangana</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Crop Insurance */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Have Crop Insurance?
            </label>
            <select
              name="cropInsurance"
              value={formData.cropInsurance}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-600 font-medium"
            >
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Solar Pump */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Own Solar Pump?
            </label>
            <select
              name="solarPump"
              value={formData.solarPump}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-600 font-medium"
            >
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105"
        >
          Check Eligibility
        </button>
      </form>

      {/* Results */}
      {submitted && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-300">
          <div className="flex items-start gap-4 mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-2xl font-bold text-gray-900">
                Based on your details, you may be eligible for:
              </h4>
              <p className="text-gray-700 mt-1">
                {eligibleSchemes.length} schemes matched your profile
              </p>
            </div>
          </div>

          {/* Eligible Schemes */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {eligibleSchemes.map((scheme) => (
              <div
                key={scheme}
                className="bg-white p-4 rounded-lg border-2 border-green-200 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="font-semibold text-gray-900">{scheme}</span>
              </div>
            ))}
          </div>

          {/* Not Eligible Info */}
          {eligibleSchemes.length < allSchemes.length && (
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">💡 Tip:</span> You may also
                check eligibility for other schemes by updating your profile
                details. Schemes listed above are based on your current
                information.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
