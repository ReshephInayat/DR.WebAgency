import {
  AtSign,
  Copy,
  LockKeyhole,
  RefreshCcw,
  Store,
  Files,
} from "lucide-react";
import Link from "next/link";

interface SubscriptionCardProps {
  icon: "email" | "copy" | "lock" | "refresh" | "store" | "files";
  className?: string;
}

const iconMap = {
  email: AtSign,
  copy: Copy,
  lock: LockKeyhole,
  refresh: RefreshCcw,
  store: Store,
  files: Files,
};

const iconColors = {
  email: "bg-gradient-to-br from-red-400 to-red-500",
  copy: "bg-gradient-to-br from-orange-400 to-orange-500",
  lock: "bg-gradient-to-br from-purple-400 to-blue-500",
  refresh: "bg-gradient-to-br from-cyan-400 to-cyan-500",
  store: "bg-gradient-to-br from-pink-400 to-pink-500",
  files: "bg-gradient-to-br from-orange-400 to-orange-500",
};

export function SubscriptionCard({ icon, className }: SubscriptionCardProps) {
  const Icon = iconMap[icon];
  const colorClass = iconColors[icon];

  return (
    <div className={`bg-gray-50 rounded-lg shadow-sm ${className}`}>
      <div className="p-6 text-center">
        <div
          className={`mx-auto w-16 h-16 rounded-full ${colorClass} flex items-center justify-center mb-4`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Email Subscription
        </h3>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, hic
          molestiae consequuntur expedita unde facere.
        </p>
        <Link
          href="#"
          className="text-red-500 hover:text-red-600 font-medium inline-block transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
