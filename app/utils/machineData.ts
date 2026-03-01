export interface Machine {
  id: string;
  name: string;
  category: "Tractor" | "Harvester" | "Seeder" | "Rotavator" | "Other";
  pricePerDay: number;
  image: string;
  rating: number;
  reviews: number;
  availability: boolean;
  ownerResponseTime: string;
  location: {
    village: string;
    latitude: number;
    longitude: number;
  };
  owner: {
    name: string;
    phone: string;
  };
  description: string;
  features: string[];
}

export const machineryData: Machine[] = [
  {
    id: "m1",
    name: "Tractor (35 HP)",
    category: "Tractor",
    pricePerDay: 1500,
    image: "🚜",
    rating: 4.8,
    reviews: 245,
    availability: true,
    ownerResponseTime: "5-10 mins",
    location: {
      village: "Nashik Farm Area",
      latitude: 19.9975,
      longitude: 73.7898,
    },
    owner: {
      name: "Raj Singh",
      phone: "+91-9876543210",
    },
    description: "Powerful 35 HP tractor with power steering and 4WD",
    features: ["Power Steering", "Diesel Engine", "4WD", "3-point linkage"],
  },
  {
    id: "m2",
    name: "Combine Harvester",
    category: "Harvester",
    pricePerDay: 5000,
    image: "🌾",
    rating: 4.9,
    reviews: 189,
    availability: true,
    ownerResponseTime: "10-15 mins",
    location: {
      village: "Shirdi Rural Zone",
      latitude: 19.7639,
      longitude: 74.4567,
    },
    owner: {
      name: "Priya Patel",
      phone: "+91-8765432109",
    },
    description: "Latest combine harvester for efficient crop harvesting",
    features: ["High Capacity", "Fuel Efficient", "Latest Technology"],
  },
  {
    id: "m3",
    name: "Rotavator",
    category: "Rotavator",
    pricePerDay: 1200,
    image: "🚜",
    rating: 4.7,
    reviews: 156,
    availability: true,
    ownerResponseTime: "8-12 mins",
    location: {
      village: "Murbad Village",
      latitude: 19.5865,
      longitude: 73.4328,
    },
    owner: {
      name: "Amit Kumar",
      phone: "+91-7654321098",
    },
    description: "Heavy-duty rotavator for deep soil preparation",
    features: ["Deep Tilling", "Soil Preparation", "Compact Design"],
  },
  {
    id: "m4",
    name: "Sprayer (500L)",
    category: "Other",
    pricePerDay: 800,
    image: "💨",
    rating: 4.6,
    reviews: 203,
    availability: true,
    ownerResponseTime: "5 mins",
    location: {
      village: "Nandgaon Area",
      latitude: 19.8234,
      longitude: 73.5432,
    },
    owner: {
      name: "Vikram Rao",
      phone: "+91-6543210987",
    },
    description: "500L capacity sprayer for pesticide/fertilizer application",
    features: ["Precision Spray", "Easy Operation", "Adjustable Nozzles"],
  },
  {
    id: "m5",
    name: "Seed Drill",
    category: "Seeder",
    pricePerDay: 900,
    image: "🌱",
    rating: 4.5,
    reviews: 178,
    availability: true,
    ownerResponseTime: "12-15 mins",
    location: {
      village: "Igatpuri Region",
      latitude: 19.5731,
      longitude: 73.5228,
    },
    owner: {
      name: "Suresh Desai",
      phone: "+91-5432109876",
    },
    description: "Precision seed drill for uniform seed distribution",
    features: ["Adjustable Depth", "Row Marking", "Efficient Distribution"],
  },
  {
    id: "m6",
    name: "Thresher Machine",
    category: "Other",
    pricePerDay: 2000,
    image: "🌾",
    rating: 4.8,
    reviews: 234,
    availability: false,
    ownerResponseTime: "15-20 mins",
    location: {
      village: "Kopargaon Town",
      latitude: 19.8811,
      longitude: 74.5042,
    },
    owner: {
      name: "Mahesh Wagh",
      phone: "+91-4321098765",
    },
    description: "High-speed thresher for grain separation",
    features: ["High Speed", "Durable", "Low Vibration", "Easy Maintenance"],
  },
];
