import {
  IndianRupee,
  Shield,
  Sun,
  CreditCard,
  FileText,
  Leaf,
  TrendingUp,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SchemeCard from "../components/SchemeCard";
import EligibilityForm from "../components/EligibilityForm";

export default function Schemes() {
  const schemes = [
    {
      icon: IndianRupee,
      name: "PM-KISAN",
      description: "₹6000 per year income support to all eligible farmers",
      benefits: [
        "Direct bank transfer (₹2000 every 4 months)",
        "No middlemen involved",
        "Supports small and marginal farmers",
      ],
      officialLink: "https://pmkisan.gov.in",
      iconColor: "bg-gradient-to-br from-green-600 to-green-400",
      bgGradient: "from-green-50 to-green-100",
    },
    {
      icon: Shield,
      name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      description: "Comprehensive crop insurance protection for all crops",
      benefits: [
        "Low premium rates (1.5-5% of sum insured)",
        "Natural disaster coverage",
        "Fast claim settlement process",
      ],
      officialLink: "https://pmfby.gov.in",
      iconColor: "bg-gradient-to-br from-blue-600 to-blue-400",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      icon: CreditCard,
      name: "Kisan Credit Card (KCC)",
      description: "Affordable credit facility for agricultural needs",
      benefits: [
        "Low interest rates (4-6% per annum)",
        "Flexible repayment tenure",
        "No collateral required for small amounts",
      ],
      officialLink: "https://www.myscheme.gov.in/schemes/kcc",
      iconColor: "bg-gradient-to-br from-purple-600 to-purple-400",
      bgGradient: "from-purple-50 to-purple-100",
    },
    {
      icon: Leaf,
      name: "Soil Health Card",
      description: "Free soil testing and nutrient management guide",
      benefits: [
        "Comprehensive soil analysis",
        "Personalized fertilizer recommendations",
        "Improved crop productivity by 20-30%",
      ],
      officialLink: "https://soilhealth.dac.gov.in",
      iconColor: "bg-gradient-to-br from-emerald-600 to-emerald-400",
      bgGradient: "from-emerald-50 to-emerald-100",
    },
    {
      icon: Sun,
      name: "PM-KUSUM",
      description: "Pradhan Mantri Kisan Urja Suraksha Evam Utthaan Mahabhiyam",
      benefits: [
        "Solar pump subsidy up to 60%",
        "Reduced electricity costs",
        "Additional income from solar energy",
      ],
      officialLink: "https://pmkusum.mnre.gov.in",
      iconColor: "bg-gradient-to-br from-yellow-600 to-yellow-400",
      bgGradient: "from-yellow-50 to-yellow-100",
    },
    {
      icon: TrendingUp,
      name: "e-NAM (National Agriculture Market)",
      description: "Online platform for transparent crop trading",
      benefits: [
        "Direct online trading with buyers",
        "Transparent price discovery",
        "Reduced market middlemen",
      ],
      officialLink: "https://www.enam.gov.in",
      iconColor: "bg-gradient-to-br from-orange-600 to-orange-400",
      bgGradient: "from-orange-50 to-orange-100",
    },
    {
      icon: FileText,
      name: "Rashtriya Krishi Vikas Yojana (RKVY)",
      description: "Infrastructure development and agricultural growth support",
      benefits: [
        "State-specific agriculture infrastructure",
        "Post-harvest management facilities",
        "Market linkage support",
      ],
      officialLink: "https://rkvy.nic.in",
      iconColor: "bg-gradient-to-br from-indigo-600 to-indigo-400",
      bgGradient: "from-indigo-50 to-indigo-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Government Schemes for Farmers</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Explore central and state government schemes designed to support
            Indian farmers financially and technically. Discover benefits,
            check eligibility, and apply to relevant schemes.
          </p>
        </div>
      </section>

      {/* Schemes Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Government Schemes
            </h2>
            <p className="text-lg text-gray-600">
              Browse through our curated list of government schemes available for
              farmers across India.
            </p>
          </div>

          {/* Schemes Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {schemes.map((scheme, idx) => (
              <SchemeCard key={idx} {...scheme} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50 border-y border-green-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">50+</p>
              <p className="text-gray-700 font-semibold">Total Schemes</p>
              <p className="text-sm text-gray-600">Central & State Govt.</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">₹80,000 Cr+</p>
              <p className="text-gray-700 font-semibold">Total Budget</p>
              <p className="text-sm text-gray-600">Allocated Annually</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">15M+</p>
              <p className="text-gray-700 font-semibold">Farmers Benefited</p>
              <p className="text-sm text-gray-600">Across India</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">₹5000+</p>
              <p className="text-gray-700 font-semibold">Avg. Annual Support</p>
              <p className="text-sm text-gray-600">Per Farmer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Checker Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find Schemes You're Eligible For
            </h2>
            <p className="text-lg text-gray-600">
              Answer a few simple questions to discover which government schemes
              you can apply for based on your farm details.
            </p>
          </div>

          <EligibilityForm />
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How to Apply
          </h2>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: 1,
                title: "Check Eligibility",
                desc: "Use our checker above to see which schemes you qualify for",
              },
              {
                step: 2,
                title: "Gather Documents",
                desc: "Prepare required papers like land certificate, ID proof",
              },
              {
                step: 3,
                title: "Visit Portal/Office",
                desc: "Visit official scheme portal or nearest agricultural office",
              },
              {
                step: 4,
                title: "Submit Application",
                desc: "Fill the application form with required details",
              },
              {
                step: 5,
                title: "Receive Benefits",
                desc: "Get approval and receive benefits in your bank account",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white p-6 rounded-xl border-2 border-green-200 text-center hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Documents Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50 border-y border-blue-200">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            📋 Important Documents Required
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">Essential Documents</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Aadhar Card</li>
                <li>✓ Land Ownership/Lease Certificate</li>
                <li>✓ Bank Account Details</li>
                <li>✓ Phone Number and Email</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">
                Scheme-Specific Documents
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Crop Insurance Policy (for PMFBY)</li>
                <li>✓ Soil Testing Report (for Soil Health)</li>
                <li>✓ Electricity Bill (for PM-KUSUM)</li>
                <li>✓ Farm Registration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {[
              {
                q: "Who is eligible for PM-KISAN?",
                a: "All landholding farmers with valid land ownership documents are eligible.",
              },
              {
                q: "How long does it take to receive benefits?",
                a: "Usually 30-60 days after application approval. Direct bank transfer ensures faster processing.",
              },
              {
                q: "Can I apply for multiple schemes?",
                a: "Yes! You can apply for multiple schemes based on your eligibility.",
              },
              {
                q: "What if my application is rejected?",
                a: "You can appeal to the district agricultural office within 30 days with corrected documents.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="bg-white border border-gray-300 rounded-lg p-6 hover:border-green-400 transition cursor-pointer group"
              >
                <summary className="font-bold text-gray-900 flex items-center justify-between">
                  {item.q}
                  <span className="group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Apply?</h2>
          <p className="text-lg text-green-100">
            Check your eligibility and start your application journey today
          </p>
          <a
            href="#"
            className="inline-block bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Contact Support
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
