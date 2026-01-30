import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CapabilityCard({ title, description, items, to }) {
  return (
    <div
      className="rounded-2xl border border-gray-200 bg-white p-8
      shadow-[0_4px_20px_rgba(0,0,0,0.04)]
      hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]
      transition"
    >
      <h3 className="text-[20px] font-semibold text-gray-900">{title}</h3>

      <p className="mt-3 text-[15px] leading-6 text-gray-600">{description}</p>

      <ul className="mt-6 space-y-2 text-[14px] text-gray-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>

      <Link
        to={to}
        className="mt-6 inline-flex items-center gap-2
        text-[14px] font-medium text-orange-500 hover:underline"
      >
        Explore {title}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
