import React from "react";

export default function ValueCard({ title, description }) {
  return (
    <div
      className="rounded-2xl bg-white p-8
      shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
    >
      <h4 className="text-[16px] font-semibold text-gray-900">{title}</h4>

      <p className="mt-3 text-[14px] leading-6 text-gray-600">{description}</p>
    </div>
  );
}
