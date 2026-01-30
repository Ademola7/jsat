import React from "react";
import { ArrowRight } from "lucide-react";
import CapabilityCard from "../components/WhatWeDo/CapabilityCard";
import ValueCard from "../components/WhatWeDo/ValueCard";

export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/network-bg.svg')]
          bg-cover bg-center opacity-[0.15]"
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-28">
          <p
            className="text-[12px] tracking-[0.2em] font-semibold
            text-orange-500 uppercase"
          >
            Our Capabilities
          </p>

          <h1
            className="mt-4 text-[40px] md:text-[48px]
            font-bold text-gray-900"
          >
            What We Do at JSAT
          </h1>

          <p
            className="mt-6 max-w-2xl text-[16px]
            leading-7 text-gray-600"
          >
            We integrate logistics execution, supply chain technology, and
            strategic advisory to strengthen global supply chains, improve
            transparency, and align operations with enterprise goals.
          </p>

          <button
            className="mt-8 inline-flex items-center gap-2
            rounded-full bg-orange-500 px-7 py-3
            text-[14px] font-semibold text-white
            hover:bg-orange-600 transition"
          >
            Start a Conversation
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CapabilityCard
            title="Integrated Logistics"
            description="Execution across complex, global supply chains."
            to="/integrated-logistics"
            items={[
              "Origin & destination management",
              "Warehousing & distribution",
              "Cross-border & last-mile coordination",
              "Supply chain orchestration",
            ]}
          />

          <CapabilityCard
            title="Supply Chain Technology"
            description="Visibility, intelligence, and performance control."
            to="/supply-chain-technology"
            items={[
              "Real-time visibility",
              "Data integration & analytics",
              "Performance dashboards",
              "Automation & optimisation tools",
            ]}
          />

          <CapabilityCard
            title="Consulting & Advisory"
            description="Strategy, design, and transformation."
            to="/consulting-advisory"
            items={[
              "Supply chain strategy & design",
              "Process optimisation",
              "Risk & resilience planning",
              "Market entry & expansion advisory",
            ]}
          />
        </div>
      </section>

      {/* WHY JSAT */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[32px] font-bold text-gray-900">
            Why Organisations Choose JSAT
          </h2>

          <p
            className="mt-4 max-w-2xl text-[15px]
            leading-7 text-gray-600"
          >
            Organisations partner with JSAT to simplify complexity, gain
            visibility, and align execution with long-term strategy.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ValueCard
              title="Integrated by Design"
              description="We unify logistics execution, technology,
              and advisory into a single operating model."
            />

            <ValueCard
              title="Global Perspective, Local Execution"
              description="Global best practices adapted to local realities."
            />

            <ValueCard
              title="Technology-Enabled, Not Technology-Led"
              description="Technology supports decisions, not replaces them."
            />

            <ValueCard
              title="Built for Complexity and Scale"
              description="Enterprise-scale solutions for complex environments."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
