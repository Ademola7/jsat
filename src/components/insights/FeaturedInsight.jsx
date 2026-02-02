import insight1 from "../../assets/insight1.png";

export const FeaturedInsight = () => (
  <div
    className="relative overflow-hidden rounded-3xl p-10 text-white"
    style={{
      backgroundImage: `url(${insight1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <span className="text-xs uppercase tracking-wider text-red-400">
      Market and policy insight
    </span>
    <h3 className="mt-4 text-2xl sm:text-3xl font-semibold max-w-xl text-black">
      Global Supply Chain Trends to Watch in 2026
    </h3>
    <p className="mt-4 max-w-xl text-black">
      An in-depth look at key supply chain trends shaping global markets.
    </p>
    <span className="mt-8 inline-block text-sm font-medium text-red-400 hover:underline">
      Read Report →
    </span>
  </div>
);
