import { ExternalLink, LucideIcon, CheckCircle2 } from "lucide-react";

interface SchemeCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  benefits: string[];
  officialLink: string;
  iconColor: string;
  bgGradient: string;
}

export default function SchemeCard({
  icon: Icon,
  name,
  description,
  benefits,
  officialLink,
  iconColor,
  bgGradient,
}: SchemeCardProps) {
  return (
    <div
      className={`bg-gradient-to-br ${bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-full flex flex-col`}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-lg ${iconColor} flex items-center justify-center mb-4`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Benefits */}
      <div className="space-y-2 mb-6">
        <p className="text-sm font-semibold text-gray-800">Key Benefits:</p>
        <ul className="space-y-1">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <a
        href={officialLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 group"
      >
        Apply Now
        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition" />
      </a>
    </div>
  );
}
