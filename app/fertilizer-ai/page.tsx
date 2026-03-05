'use client';

import { useState } from 'react';
import Link from 'next/link';

type Language = 'en' | 'hi';
type RecommendationStep = 'form' | 'results';

const mlModels = {
  en: [
    { name: 'Random Forest', confidence: 94, icon: '🌳' },
    { name: 'Gradient Boosting', confidence: 92, icon: '📈' },
    { name: 'Support Vector Machine', confidence: 89, icon: '⚙️' },
    { name: 'Neural Network', confidence: 91, icon: '🧠' },
    { name: 'Decision Tree', confidence: 87, icon: '🎯' },
    { name: 'Ensemble Model', confidence: 95, icon: '🤝' }
  ],
  hi: [
    { name: 'रैंडम फॉरेस्ट', confidence: 94, icon: '🌳' },
    { name: 'ग्रेडिएंट बूस्टिंग', confidence: 92, icon: '📈' },
    { name: 'सपोर्ट वेक्टर मशीन', confidence: 89, icon: '⚙️' },
    { name: 'न्यूरल नेटवर्क', confidence: 91, icon: '🧠' },
    { name: 'डिसिजन ट्री', confidence: 87, icon: '🎯' },
    { name: 'एनसेंबल मॉडल', confidence: 95, icon: '🤝' }
  ]
};

const fertilizers = {
  en: [
    { name: 'Urea (46% Nitrogen)', quantity: '50 kg/acre', timing: 'During growth phase', price: '₹350-400/bag' },
    { name: 'DAP (18% P, 46% K)', quantity: '25 kg/acre', timing: 'At sowing', price: '₹1,200-1,400/bag' },
    { name: 'Potash (Muriate)', quantity: '40 kg/acre', timing: 'During growth', price: '₹1,100-1,300/bag' },
    { name: 'Neem Based Organic', quantity: '100 kg/acre', timing: 'Before sowing', price: '₹500-600/bag' },
    { name: 'Vermicompost', quantity: '5 ton/acre', timing: 'Pre-sowing', price: '₹3,000-4,000/ton' }
  ],
  hi: [
    { name: 'यूरिया (46% नाइट्रोजन)', quantity: '50 किग्रा/एकड़', timing: 'वृद्धि चरण में', price: '₹350-400/बैग' },
    { name: 'डीएपी (18% पी, 46% के)', quantity: '25 किग्रा/एकड़', timing: 'बुवाई पर', price: '₹1,200-1,400/बैग' },
    { name: 'पोटाश (म्यूरिएट)', quantity: '40 किग्रा/एकड़', timing: 'वृद्धि के दौरान', price: '₹1,100-1,300/बैग' },
    { name: 'नीम आधारित जैविक', quantity: '100 किग्रा/एकड़', timing: 'बुवाई से पहले', price: '₹500-600/बैग' },
    { name: 'वर्मीकम्पोस्ट', quantity: '5 टन/एकड़', timing: 'पूर्व-बुवाई', price: '₹3,000-4,000/टन' }
  ]
};

const stores = {
  en: [
    { name: 'AgroMart Nashik', distance: '2.5 km away', fertilizers: 'Urea, DAP, Potash', price: '₹400-1,400', phone: '+91 9876543210' },
    { name: 'Farmer Store Aurangabad', distance: '5.2 km away', fertilizers: 'All major brands', price: '₹350-1,300', phone: '+91 9765432109' },
    { name: 'Green Harvest Supplies', distance: '3.8 km away', fertilizers: 'Organic, DAP, Urea', price: '₹500-1,200', phone: '+91 9654321098' }
  ],
  hi: [
    { name: 'आगोमार्ट नाशिक', distance: '2.5 किमी दूर', fertilizers: 'यूरिया, डीएपी, पोटाश', price: '₹400-1,400', phone: '+91 9876543210' },
    { name: 'फार्मर स्टोर औरंगाबाद', distance: '5.2 किमी दूर', fertilizers: 'सभी प्रमुख ब्रांड', price: '₹350-1,300', phone: '+91 9765432109' },
    { name: 'ग्रीन हार्वेस्ट सप्लाई', distance: '3.8 किमी दूर', fertilizers: 'जैविक, डीएपी, यूरिया', price: '₹500-1,200', phone: '+91 9654321098' }
  ]
};

export default function FertilizerAI() {
  const [language, setLanguage] = useState<Language>('en');
  const [recommendationStep, setRecommendationStep] = useState<RecommendationStep>('form');
  const [formData, setFormData] = useState({
    cropType: '',
    soilType: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    ph: '',
    temperature: '',
    rainfall: '',
    location: '',
    farmSize: '',
    previousCrop: '',
    irrigation: ''
  });

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleGetRecommendation = () => {
    if (Object.values(formData).every(val => val !== '')) {
      setRecommendationStep('results');
    }
  };

  const labels = {
    en: {
      cropType: 'Crop Type:',
      soilType: 'Soil Type:',
      nitrogen: 'Nitrogen Level (mg/kg):',
      phosphorus: 'Phosphorus Level (mg/kg):',
      potassium: 'Potassium Level (mg/kg):',
      ph: 'Soil pH:',
      temperature: 'Average Temperature (°C):',
      rainfall: 'Annual Rainfall (mm):',
      location: 'Location/State:',
      farmSize: 'Farm Size (acres):',
      previousCrop: 'Previous Crop:',
      irrigation: 'Irrigation Type:'
    },
    hi: {
      cropType: 'फसल का प्रकार:',
      soilType: 'मिट्टी का प्रकार:',
      nitrogen: 'नाइट्रोजन स्तर (मिग्रा/किग्रा):',
      phosphorus: 'फॉस्फोरस स्तर (मिग्रा/किग्रा):',
      potassium: 'पोटेशियम स्तर (मिग्रा/किग्रा):',
      ph: 'मिट्टी का पीएच:',
      temperature: 'औसत तापमान (°C):',
      rainfall: 'वार्षिक वर्षा (मिमी):',
      location: 'स्थान/राज्य:',
      farmSize: 'खेत का आकार (एकड़):',
      previousCrop: 'पिछली फसल:',
      irrigation: 'सिंचाई का प्रकार:'
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent cursor-pointer">
              AgroFleet
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={handleLanguageToggle}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition font-semibold text-sm"
            >
              {language === 'en' ? '🇮🇳 हिंदी' : '🇬🇧 English'}
            </button>
            <Link href="/">
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
                {language === 'en' ? '← Back' : '← वापस'}
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 py-20 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {language === 'en' ? 'AI Fertilizer Advisor' : 'एआई उर्वरक सलाहकार'}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Get personalized fertilizer recommendations using advanced machine learning models.' 
              : 'उन्नत मशीन लर्निंग मॉडल का उपयोग करके व्यक्तिगत उर्वरक सिफारिशें प्राप्त करें।'}
          </p>
        </div>
      </section>

      {/* Recommendation Form Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          {language === 'en' ? 'Fertilizer Recommendation Assistant' : 'उर्वरक सिफारिश सहायक'}
        </h2>

        {recommendationStep === 'form' ? (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Crop Type */}
              <div>
                <label className="block text-gray-900 font-bold mb-3">{labels[language].cropType}</label>
                <select
                  value={formData.cropType}
                  onChange={(e) => handleFormChange('cropType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="">{language === 'en' ? 'Select...' : 'चुनें...'}</option>
                  <option value="wheat">{language === 'en' ? 'Wheat' : 'गेहूं'}</option>
                  <option value="rice">{language === 'en' ? 'Rice' : 'चावल'}</option>
                  <option value="corn">{language === 'en' ? 'Corn' : 'मकई'}</option>
                  <option value="cotton">{language === 'en' ? 'Cotton' : 'कपास'}</option>
                  <option value="sugarcane">{language === 'en' ? 'Sugarcane' : 'गन्ना'}</option>
                </select>
              </div>

              {/* Soil Type */}
              <div>
                <label className="block text-gray-900 font-bold mb-3">{labels[language].soilType}</label>
                <select
                  value={formData.soilType}
                  onChange={(e) => handleFormChange('soilType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="">{language === 'en' ? 'Select...' : 'चुनें...'}</option>
                  <option value="loamy">{language === 'en' ? 'Loamy' : 'दोमट'}</option>
                  <option value="clay">{language === 'en' ? 'Clay' : 'चिकनी मिट्टी'}</option>
                  <option value="sandy">{language === 'en' ? 'Sandy' : 'बलुई'}</option>
                  <option value="black">{language === 'en' ? 'Black Soil' : 'काली मिट्टी'}</option>
                </select>
              </div>

              {/* Nitrogen */}
              <div>
                <label className="block text-gray-900 font-bold mb-3">{labels[language].nitrogen}</label>
                <input
                  type="number"
                  placeholder={language === 'en' ? 'Enter value' : 'मान दर्ज करें'}
                  value={formData.nitrogen}
                  onChange={(e) => handleFormChange('nitrogen', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Phosphorus */}
              <div>
                <label className="block text-gray-900 font-bold mb-3">{labels[language].phosphorus}</label>
                <input
                  type="number"
                  placeholder={language === 'en' ? 'Enter value' : 'मान दर्ज करें'}
                  value={formData.phosphorus}
                  onChange={(e) => handleFormChange('phosphorus', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Potassium */}
              <div>
                <label className="block text-gray-900 font-bold mb-3">{labels[language].potassium}</label>
                <input
                  type="number"
                  placeholder={language === 'en' ? 'Enter value' : 'मान दर्ज करें'}
                  value={formData.potassium}
                  onChange={(e) => handleFormChange('potassium', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* pH */}
              <div>
                <label className="block text-gray-900 font-bold mb-3">{labels[language].ph}</label>
                <input
                  type="number"
                  step="0.1"
                  placeholder={language === 'en' ? '6.5' : '6.5'}
                  value={formData.ph}
                  onChange={(e) => handleFormChange('ph', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Temperature */}
              <div>
                <label className="block text-gray-900 font-bold mb-3">{labels[language].temperature}</label>
                <input
                  type="number"
                  placeholder={language === 'en' ? 'Enter temperature' : 'तापमान दर्ज करें'}
                  value={formData.temperature}
                  onChange={(e) => handleFormChange('temperature', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Rainfall */}
              <div>
                <label className="block text-gray-900 font-bold mb-3">{labels[language].rainfall}</label>
                <input
                  type="number"
                  placeholder={language === 'en' ? 'Enter rainfall' : 'वर्षा दर्ज करें'}
                  value={formData.rainfall}
                  onChange={(e) => handleFormChange('rainfall', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-gray-900 font-bold mb-3">{labels[language].location}</label>
                <select
                  value={formData.location}
                  onChange={(e) => handleFormChange('location', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="">{language === 'en' ? 'Select...' : 'चुनें...'}</option>
                  <option value="maharashtra">{language === 'en' ? 'Maharashtra' : 'महाराष्ट्र'}</option>
                  <option value="punjab">{language === 'en' ? 'Punjab' : 'पंजाब'}</option>
                  <option value="uttar-pradesh">{language === 'en' ? 'Uttar Pradesh' : 'उत्तर प्रदेश'}</option>
                  <option value="haryana">{language === 'en' ? 'Haryana' : 'हरियाणा'}</option>
                </select>
              </div>

              {/* Farm Size */}
              <div>
                <label className="block text-gray-900 font-bold mb-3">{labels[language].farmSize}</label>
                <input
                  type="number"
                  placeholder={language === 'en' ? 'Enter acres' : 'एकड़ दर्ज करें'}
                  value={formData.farmSize}
                  onChange={(e) => handleFormChange('farmSize', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Previous Crop */}
              <div>
                <label className="block text-gray-900 font-bold mb-3">{labels[language].previousCrop}</label>
                <select
                  value={formData.previousCrop}
                  onChange={(e) => handleFormChange('previousCrop', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="">{language === 'en' ? 'Select...' : 'चुनें...'}</option>
                  <option value="wheat">{language === 'en' ? 'Wheat' : 'गेहूं'}</option>
                  <option value="rice">{language === 'en' ? 'Rice' : 'चावल'}</option>
                  <option value="legumes">{language === 'en' ? 'Legumes' : 'दालें'}</option>
                  <option value="vegetables">{language === 'en' ? 'Vegetables' : 'सब्जियां'}</option>
                </select>
              </div>

              {/* Irrigation */}
              <div>
                <label className="block text-gray-900 font-bold mb-3">{labels[language].irrigation}</label>
                <select
                  value={formData.irrigation}
                  onChange={(e) => handleFormChange('irrigation', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="">{language === 'en' ? 'Select...' : 'चुनें...'}</option>
                  <option value="drip">{language === 'en' ? 'Drip Irrigation' : 'ड्रिप सिंचाई'}</option>
                  <option value="flood">{language === 'en' ? 'Flood/Channel' : 'बाढ़/चैनल'}</option>
                  <option value="sprinkler">{language === 'en' ? 'Sprinkler' : 'स्प्रिंकलर'}</option>
                  <option value="rainfed">{language === 'en' ? 'Rainfed' : 'वर्षा आश्रित'}</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGetRecommendation}
              className="w-full mt-8 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 rounded-lg hover:shadow-lg transition text-lg"
            >
              {language === 'en' ? 'Get AI Recommendation' : 'एआई सिफारिश प्राप्त करें'}
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Recommended Fertilizers */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-green-600">
                {language === 'en' ? '✓ AI Recommended Fertilizers' : '✓ एआई अनुशंसित उर्वरक'}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {(language === 'en' ? fertilizers.en : fertilizers.hi).map((fert, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg border border-green-300">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{fert.name}</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><span className="font-semibold">{language === 'en' ? 'Quantity:' : 'मात्रा:'}</span> {fert.quantity}</p>
                      <p><span className="font-semibold">{language === 'en' ? 'Timing:' : 'समय:'}</span> {fert.timing}</p>
                      <p><span className="font-semibold">{language === 'en' ? 'Price:' : 'कीमत:'}</span> {fert.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ML Models Confidence */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                {language === 'en' ? '🤖 ML Model Confidence Scores' : '🤖 एमएल मॉडल विश्वास स्कोर'}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {(language === 'en' ? mlModels.en : mlModels.hi).map((model, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-200">
                    <div className="text-4xl mb-3">{model.icon}</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{model.name}</h4>
                    <div className="w-full bg-gray-300 rounded-full h-3 mb-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full"
                        style={{ width: `${model.confidence}%` }}
                      ></div>
                    </div>
                    <p className="text-center font-bold text-green-600">{model.confidence}%</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Soil Health Insights */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                {language === 'en' ? '🌱 Soil Health Insights' : '🌱 मिट्टी स्वास्थ्य अंतर्दृष्टि'}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-lg border border-yellow-300">
                  <div className="text-3xl mb-3">⚠️</div>
                  <h4 className="font-bold text-gray-900 mb-2">{language === 'en' ? 'Nitrogen Alert' : 'नाइट्रोजन सतर्कता'}</h4>
                  <p className="text-gray-700 text-sm">{language === 'en' ? 'Moderate deficiency detected' : 'मध्यम कमी का पता चला'}</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg border border-green-300">
                  <div className="text-3xl mb-3">✓</div>
                  <h4 className="font-bold text-gray-900 mb-2">{language === 'en' ? 'Soil Health' : 'मिट्टी स्वास्थ्य'}</h4>
                  <p className="text-gray-700 text-sm">{language === 'en' ? 'Good for wheat & rice' : 'गेहूं और चावल के लिए अच्छा'}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-300">
                  <div className="text-3xl mb-3">💧</div>
                  <h4 className="font-bold text-gray-900 mb-2">{language === 'en' ? 'pH Level' : 'पीएच स्तर'}</h4>
                  <p className="text-gray-700 text-sm">{language === 'en' ? 'Optimal (6.5)' : 'इष्टतम (6.5)'}</p>
                </div>
              </div>
            </div>

            {/* Nearby Fertilizer Stores */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                {language === 'en' ? '🏪 Nearby Fertilizer Stores' : '🏪 पास के उर्वरक दुकानें'}
              </h3>
              <div className="space-y-4">
                {(language === 'en' ? stores.en : stores.hi).map((store, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-green-50 to-white p-6 rounded-lg border-2 border-green-300">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{store.name}</h4>
                        <p className="text-gray-700 mb-1"><span className="font-semibold">📍</span> {store.distance}</p>
                        <p className="text-gray-700 mb-1"><span className="font-semibold">📦</span> {store.fertilizers}</p>
                        <p className="text-gray-700 mb-2"><span className="font-semibold">💵</span> {store.price}</p>
                      </div>
                      <a href={`tel:${store.phone}`} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold text-sm whitespace-nowrap">
                        {language === 'en' ? 'Call' : 'कॉल करें'}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Tips */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-6">
                {language === 'en' ? '💡 Farming Tips' : '💡 खेती के सुझाव'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌤️</span>
                  <span>{language === 'en' ? 'Apply fertilizers during early morning or late evening to minimize sun exposure.' : 'सूर्य के संपर्क को कम करने के लिए सुबह जल्दी या शाम को देर से उर्वरक लागू करें।'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💧</span>
                  <span>{language === 'en' ? 'Water your crops 2-3 days after fertilizer application for better absorption.' : 'बेहतर अवशोषण के लिए उर्वरक लागू करने के 2-3 दिन बाद अपनी फसल को पानी दें।'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🔄</span>
                  <span>{language === 'en' ? 'Rotate crops annually to maintain soil fertility and reduce nutrient depletion.' : 'मिट्टी की उर्वरता बनाए रखने और पोषक तत्वों की कमी को कम करने के लिए सालाना फसल घुमाएं।'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🦗</span>
                  <span>{language === 'en' ? 'Monitor for pests and diseases. Use organic pesticides when possible.' : 'कीटों और रोगों की निगरानी करें। जब संभव हो जैविक कीटनाशकों का उपयोग करें।'}</span>
                </li>
              </ul>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => {
                setRecommendationStep('form');
                setFormData({
                  cropType: '', soilType: '', nitrogen: '', phosphorus: '', potassium: '',
                  ph: '', temperature: '', rainfall: '', location: '', farmSize: '', previousCrop: '', irrigation: ''
                });
              }}
              className="w-full bg-gray-300 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-400 transition text-lg"
            >
              {language === 'en' ? 'Get Another Recommendation' : 'एक और सिफारिश प्राप्त करें'}
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'en' ? 'Start Improving Your Crop Yield Today' : 'आज अपनी फसल की पैदावार में सुधार करें'}
          </h2>
          <Link href="/">
            <button className="px-8 py-4 bg-green-500 text-white rounded-full font-bold text-lg hover:bg-green-600 transition">
              {language === 'en' ? '← Back to Home' : '← होम पर वापस जाएं'}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
