'use client';

import { useState } from 'react';
import Link from 'next/link';

type Language = 'en' | 'hi';
type EligibilityStep = 'form' | 'results';

const schemes = {
  en: [
    {
      id: 1,
      name: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
      desc: 'Direct income support to farmers for their livelihoods',
      benefits: ['₹6,000 per year', 'Deposited directly in bank account', 'No eligibility restrictions'],
      financial: 'Direct cash transfer: ₹6,000 annually in 3 installments of ₹2,000 each',
      link: 'https://pmkisan.gov.in/'
    },
    {
      id: 2,
      name: 'PMFBY (Pradhan Mantri Fasal Bima Yojana)',
      desc: 'Comprehensive crop insurance scheme to protect against crop loss',
      benefits: ['Full crop coverage', 'Low premium rates', 'Quick claims settlement'],
      financial: 'Farmers pay 2% premium. Government subsidizes remaining amount',
      link: 'https://pmfby.gov.in/'
    },
    {
      id: 3,
      name: 'Kisan Credit Card (KCC)',
      desc: 'Easy credit access for agricultural needs at low interest rates',
      benefits: ['Low interest rate (4%)', 'Flexible repayment', 'Quick approval'],
      financial: 'Credit up to ₹3-4 lakhs depending on landholding',
      link: 'https://www.rbi.org.in/'
    },
    {
      id: 4,
      name: 'Soil Health Card Scheme',
      desc: 'Free soil testing to improve crop productivity and reduce fertilizer costs',
      benefits: ['Free soil testing', 'Recommendations for crops', 'Increased yields'],
      financial: 'Completely free. Farmers save on unnecessary fertilizer costs',
      link: 'https://soilhealth.dac.gov.in/'
    },
    {
      id: 5,
      name: 'PMKSY (Pradhan Mantri Krishi Sinchai Yojana)',
      desc: 'Irrigation scheme to improve water management and crop productivity',
      benefits: ['60% subsidy on irrigation', 'Water-efficient systems', 'Increased yields'],
      financial: '60% subsidy on drip/sprinkler irrigation systems. Farmers pay 40%',
      link: 'https://pmksy.gov.in/'
    },
    {
      id: 6,
      name: 'Agriculture Infrastructure Fund',
      desc: 'Financing facility for agricultural infrastructure at low interest rates',
      benefits: ['Low interest rates', 'Longer repayment period', 'Flexible terms'],
      financial: 'Loans up to ₹2 crores at subsidized interest rates',
      link: 'https://agriinfra.gov.in/'
    }
  ],
  hi: [
    {
      id: 1,
      name: 'पीएम-किसान (प्रधान मंत्री किसान सम्मान निधि)',
      desc: 'किसानों की आजीविका के लिए सीधी आय सहायता',
      benefits: ['₹6,000 प्रति वर्ष', 'सीधे बैंक खाते में जमा', 'कोई पात्रता प्रतिबंध नहीं'],
      financial: 'प्रत्यक्ष नकद हस्तांतरण: ₹6,000 वार्षिक रूप से 3 किस्तों में ₹2,000 प्रत्येक',
      link: 'https://pmkisan.gov.in/'
    },
    {
      id: 2,
      name: 'पीएमएफबीवाई (प्रधान मंत्री फसल बीमा योजना)',
      desc: 'फसल नुकसान से बचाने के लिए व्यापक फसल बीमा योजना',
      benefits: ['पूर्ण फसल कवरेज', 'कम प्रीमियम दर', 'त्वरित दावा निपटान'],
      financial: 'किसान 2% प्रीमियम का भुगतान करें। सरकार शेष राशि को सब्सिडी देती है',
      link: 'https://pmfby.gov.in/'
    },
    {
      id: 3,
      name: 'किसान क्रेडिट कार्ड (केसीसी)',
      desc: 'कृषि आवश्यकताओं के लिए कम ब्याज दरों पर आसान क्रेडिट पहुंच',
      benefits: ['कम ब्याज दर (4%)', 'लचीली चुकौती', 'तेजी से अनुमोदन'],
      financial: 'जोत आकार के आधार पर ₹3-4 लाख तक क्रेडिट',
      link: 'https://www.rbi.org.in/'
    },
    {
      id: 4,
      name: 'मृदा स्वास्थ्य कार्ड योजना',
      desc: 'फसल उत्पादकता में सुधार और उर्वरक लागत कम करने के लिए मुफ्त मिट्टी परीक्षण',
      benefits: ['मुफ्त मिट्टी परीक्षण', 'फसलों के लिए सिफारिशें', 'बढ़ी हुई उपज'],
      financial: 'पूरी तरह से मुफ्त। किसान अनावश्यक उर्वरक पर बचाते हैं',
      link: 'https://soilhealth.dac.gov.in/'
    },
    {
      id: 5,
      name: 'पीएमकेएसवाई (प्रधान मंत्री कृषि सिंचाई योजना)',
      desc: 'जल प्रबंधन और फसल उत्पादकता में सुधार के लिए सिंचाई योजना',
      benefits: ['सिंचाई पर 60% सब्सिडी', 'जल-कुशल प्रणालियां', 'बढ़ी हुई पैदावार'],
      financial: 'ड्रिप/स्प्रिंकलर सिंचाई प्रणालियों पर 60% सब्सिडी। किसान 40% का भुगतान करें',
      link: 'https://pmksy.gov.in/'
    },
    {
      id: 6,
      name: 'कृषि अवसंरचना कोष',
      desc: 'कम ब्याज दरों पर कृषि बुनियादी ढांचे के लिए वित्तपोषण सुविधा',
      benefits: ['कम ब्याज दरें', 'लंबी चुकौती अवधि', 'लचीली शर्तें'],
      financial: 'रियायती ब्याज दरों पर ₹2 करोड़ तक के ऋण',
      link: 'https://agriinfra.gov.in/'
    }
  ]
};

const documents = {
  en: ['Aadhaar Card', 'Land ownership records (Jamabandi/Pattra)', 'Bank account details', 'Mobile number', 'Crop information', 'Income certificate (for some schemes)'],
  hi: ['आधार कार्ड', 'जमीन के स्वामित्व के दस्तावेज (जमाबंदी/पत्ता)', 'बैंक खाते का विवरण', 'मोबाइल नंबर', 'फसल की जानकारी', 'आय प्रमाण पत्र (कुछ योजनाओं के लिए)']
};

const financialAids = {
  en: [
    { title: 'Subsidies', desc: 'Government contributes a portion of your purchase. You pay the rest.' },
    { title: 'Crop Insurance', desc: 'Protects against crop failure, natural disasters, and pests. Get compensated if crops fail.' },
    { title: 'Agricultural Loans', desc: 'Low-interest loans for buying equipment, seeds, or improving farm infrastructure.' },
    { title: 'Grants & Incentives', desc: 'Direct financial support for adopting modern farming techniques and equipment.' }
  ],
  hi: [
    { title: 'सब्सिडी', desc: 'सरकार आपकी खरीद का एक हिस्सा देती है। आप बाकी का भुगतान करें।' },
    { title: 'फसल बीमा', desc: 'फसल की विफलता, प्राकृतिक आपदाओं और कीटों से सुरक्षा। यदि फसल विफल हो तो मुआवजा प्राप्त करें।' },
    { title: 'कृषि ऋण', desc: 'उपकरण, बीज खरीदने या खेत की बुनियादी ढांचे में सुधार के लिए कम ब्याज दरों पर ऋण।' },
    { title: 'अनुदान और प्रोत्साहन', desc: 'आधुनिक खेती तकनीकों और उपकरणों को अपनाने के लिए सीधी वित्तीय सहायता।' }
  ]
};

export default function GovernmentSchemes() {
  const [language, setLanguage] = useState<Language>('en');
  const [eligibilityStep, setEligibilityStep] = useState<EligibilityStep>('form');
  const [formData, setFormData] = useState({
    landSize: '',
    cropType: '',
    income: '',
    state: '',
    ownership: '',
    needType: ''
  });

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const handleEligibilityChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleCheckEligibility = () => {
    if (Object.values(formData).every(val => val !== '')) {
      setEligibilityStep('results');
    }
  };

  const recommendedSchemes = [1, 2, 4, 5]; // Example: recommend schemes 1, 2, 4, 5

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header with Language Toggle */}
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
            {language === 'en' ? 'Government Schemes for Farmers' : 'किसानों के लिए सरकारी योजनाएं'}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Discover and apply for government schemes designed to support your farming operations.' 
              : 'आपके खेती के संचालन को समर्थन देने के लिए डिज़ाइन की गई सरकारी योजनाओं की खोज करें और आवेदन करें।'}
          </p>
        </div>
      </section>

      {/* Schemes List Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          {language === 'en' ? 'Popular Government Schemes' : 'लोकप्रिय सरकारी योजनाएं'}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {schemes[language].map((scheme) => (
            <div key={scheme.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{scheme.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{scheme.desc}</p>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">
                  {language === 'en' ? 'Key Benefits:' : 'मुख्य लाभ:'}
                </h4>
                <ul className="space-y-2">
                  {scheme.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-6 border border-green-200">
                <h4 className="font-bold text-gray-900 mb-2">
                  {language === 'en' ? 'Financial Support:' : 'वित्तीय सहायता:'}
                </h4>
                <p className="text-gray-700 text-sm">{scheme.financial}</p>
              </div>

              <div className="flex gap-3">
                <a
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition text-center"
                >
                  {language === 'en' ? 'Apply Now' : 'अभी आवेदन करें'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility Checker Section */}
      <section className="bg-gradient-to-b from-white to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            {language === 'en' ? 'Check Your Eligibility' : 'अपनी पात्रता जांचें'}
          </h2>
          <p className="text-gray-600 text-center mb-12">
            {language === 'en' 
              ? 'Answer a few simple questions to find schemes you qualify for.' 
              : 'आप किन योजनाओं के लिए योग्य हैं, यह जानने के लिए कुछ सरल प्रश्नों का उत्तर दें।'}
          </p>

          {eligibilityStep === 'form' ? (
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="space-y-6">
                {/* Land Size */}
                <div>
                  <label className="block text-gray-900 font-bold mb-3">
                    {language === 'en' ? 'Land Size (in acres):' : 'भूमि का आकार (एकड़ में):'}
                  </label>
                  <select
                    value={formData.landSize}
                    onChange={(e) => handleEligibilityChange('landSize', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">{language === 'en' ? 'Select...' : 'चुनें...'}</option>
                    <option value="small">{language === 'en' ? 'Less than 1 acre' : '1 एकड़ से कम'}</option>
                    <option value="medium">{language === 'en' ? '1-5 acres' : '1-5 एकड़'}</option>
                    <option value="large">{language === 'en' ? 'More than 5 acres' : '5 एकड़ से अधिक'}</option>
                  </select>
                </div>

                {/* Crop Type */}
                <div>
                  <label className="block text-gray-900 font-bold mb-3">
                    {language === 'en' ? 'Primary Crop:' : 'प्राथमिक फसल:'}
                  </label>
                  <select
                    value={formData.cropType}
                    onChange={(e) => handleEligibilityChange('cropType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">{language === 'en' ? 'Select...' : 'चुनें...'}</option>
                    <option value="wheat">{language === 'en' ? 'Wheat' : 'गेहूं'}</option>
                    <option value="rice">{language === 'en' ? 'Rice' : 'चावल'}</option>
                    <option value="cotton">{language === 'en' ? 'Cotton' : 'कपास'}</option>
                    <option value="sugarcane">{language === 'en' ? 'Sugarcane' : 'गन्ना'}</option>
                    <option value="vegetable">{language === 'en' ? 'Vegetables' : 'सब्जियां'}</option>
                  </select>
                </div>

                {/* Income */}
                <div>
                  <label className="block text-gray-900 font-bold mb-3">
                    {language === 'en' ? 'Annual Income:' : 'वार्षिक आय:'}
                  </label>
                  <select
                    value={formData.income}
                    onChange={(e) => handleEligibilityChange('income', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">{language === 'en' ? 'Select...' : 'चुनें...'}</option>
                    <option value="low">{language === 'en' ? 'Below ₹1,50,000' : '₹1,50,000 से कम'}</option>
                    <option value="medium">{language === 'en' ? '₹1,50,000 - ₹5,00,000' : '₹1,50,000 - ₹5,00,000'}</option>
                    <option value="high">{language === 'en' ? 'Above ₹5,00,000' : '₹5,00,000 से ऊपर'}</option>
                  </select>
                </div>

                {/* State */}
                <div>
                  <label className="block text-gray-900 font-bold mb-3">
                    {language === 'en' ? 'State/Location:' : 'राज्य/स्थान:'}
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => handleEligibilityChange('state', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">{language === 'en' ? 'Select...' : 'चुनें...'}</option>
                    <option value="maharashtra">{language === 'en' ? 'Maharashtra' : 'महाराष्ट्र'}</option>
                    <option value="punjab">{language === 'en' ? 'Punjab' : 'पंजाब'}</option>
                    <option value="uttar-pradesh">{language === 'en' ? 'Uttar Pradesh' : 'उत्तर प्रदेश'}</option>
                    <option value="haryana">{language === 'en' ? 'Haryana' : 'हरियाणा'}</option>
                  </select>
                </div>

                {/* Ownership */}
                <div>
                  <label className="block text-gray-900 font-bold mb-3">
                    {language === 'en' ? 'Land Ownership:' : 'जमीन का स्वामित्व:'}
                  </label>
                  <select
                    value={formData.ownership}
                    onChange={(e) => handleEligibilityChange('ownership', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">{language === 'en' ? 'Select...' : 'चुनें...'}</option>
                    <option value="own">{language === 'en' ? 'Own' : 'अपनी'}</option>
                    <option value="lease">{language === 'en' ? 'Leased' : 'पट्टे पर'}</option>
                  </select>
                </div>

                {/* Need Type */}
                <div>
                  <label className="block text-gray-900 font-bold mb-3">
                    {language === 'en' ? 'What do you need?' : 'आपको क्या चाहिए?'}
                  </label>
                  <select
                    value={formData.needType}
                    onChange={(e) => handleEligibilityChange('needType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">{language === 'en' ? 'Select...' : 'चुनें...'}</option>
                    <option value="loan">{language === 'en' ? 'Loan' : 'ऋण'}</option>
                    <option value="subsidy">{language === 'en' ? 'Subsidy' : 'सब्सिडी'}</option>
                    <option value="insurance">{language === 'en' ? 'Insurance' : 'बीमा'}</option>
                    <option value="irrigation">{language === 'en' ? 'Irrigation Support' : 'सिंचाई सहायता'}</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleCheckEligibility}
                className="w-full mt-8 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 rounded-lg hover:shadow-lg transition text-lg"
              >
                {language === 'en' ? 'Check Eligibility' : 'पात्रता जांचें'}
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center text-green-600">
                {language === 'en' ? '✓ Recommended Schemes For You' : '✓ आपके लिए अनुशंसित योजनाएं'}
              </h3>

              <div className="space-y-4 mb-8">
                {recommendedSchemes.map((schemeId) => {
                  const scheme = schemes[language].find(s => s.id === schemeId);
                  return (
                    <div key={schemeId} className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{scheme?.name}</h4>
                      <p className="text-gray-700 mb-3">{scheme?.financial}</p>
                      <a
                        href={scheme?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-semibold"
                      >
                        {language === 'en' ? 'Learn More' : 'अधिक जानें'}
                      </a>
                    </div>
                  );
                })}
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-300 mb-8">
                <h4 className="font-bold text-gray-900 mb-3">
                  {language === 'en' ? 'Required Documents:' : 'आवश्यक दस्तावेज:'}
                </h4>
                <ul className="space-y-2">
                  {documents[language].map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">📄</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  setEligibilityStep('form');
                  setFormData({ landSize: '', cropType: '', income: '', state: '', ownership: '', needType: '' });
                }}
                className="w-full bg-gray-300 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-400 transition"
              >
                {language === 'en' ? 'Check Another Profile' : 'एक अन्य प्रोफ़ाइल जांचें'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Documents Checklist */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          {language === 'en' ? 'Common Required Documents' : 'आमतौर पर आवश्यक दस्तावेज'}
        </h2>
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
          <div className="grid md:grid-cols-2 gap-6">
            {documents[language].map((doc, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                <input type="checkbox" className="w-6 h-6 text-green-600 mt-1" />
                <label className="text-gray-900 font-medium text-lg">{doc}</label>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid Information */}
      <section className="bg-gradient-to-b from-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {language === 'en' ? 'Types of Financial Support' : 'वित्तीय सहायता के प्रकार'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {financialAids[language].map((aid, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition">
                <div className="text-5xl mb-4">
                  {idx === 0 ? '💰' : idx === 1 ? '🛡️' : idx === 2 ? '💳' : '🎁'}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{aid.title}</h3>
                <p className="text-gray-700 leading-relaxed">{aid.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'en' ? 'Ready to Apply?' : 'आवेदन करने के लिए तैयार?'}
          </h2>
          <p className="text-xl text-gray-200 mb-12">
            {language === 'en' 
              ? 'Select a scheme above and start your application today. Get support from the government now!' 
              : 'ऊपर कोई योजना चुनें और आज ही अपना आवेदन शुरू करें। अभी सरकार से समर्थन प्राप्त करें!'}
          </p>
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
