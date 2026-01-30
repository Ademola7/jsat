import aroundTheWorld from "../assets/around-the-world.svg";
import eye from "../assets/eye.svg";
import science from "../assets/science.svg";
export default function PressureSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-2xl font-bold leading-snug md:text-[28px]">
          Global Supply Chains are under <br /> Pressure
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-6 text-gray-600">
          Across industries and regions, supply chains are facing growing
          complexity. Fragmented logistics networks, limited visibility,
          regulatory variation, and cost volatility make it difficult for
          organizations to operate efficiently and scale with confidence.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border bg-white p-6 text-center shadow-sm"
            >
              <div className="mb-4 flex justify-center">
                <img src={card.image} alt="" />
              </div>
              <h3 className="text-sm font-semibold">{card.title}</h3>
              <p className="mt-2 text-xs leading-5 text-gray-600">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const cards = [
  {
    image: aroundTheWorld,
    title: "Fragmented Networks",
    text: "Inconsistent infrastructure and disconnected systems across regions.",
  },
  {
    image: eye,
    title: "Limited End-to-End Visibility",
    text: "Lack of real-time insights across logistics, inventory, and performance metrics.",
  },
  {
    image: science,

    title: "Cross-Border Complexity",
    text: "Customs processes, documentation variation, and compliance challenges across markets.",
  },
  {
    image: science,

    title: "Cost Volatility & Inefficiency",
    text: "Rising transport costs, buffer Inventory, and inefficiencies driven by uncertainty.",
  },
  {
    image: science,

    title: "Execution Gaps",
    text: "Strong strategy but inconsistent on-the-ground execution in emerging markets.",
  },
];
