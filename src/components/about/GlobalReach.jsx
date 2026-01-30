import aboutMap from "../../assets/aboutMap.webp";

export default function GlobalReach() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Text */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">
            Global Reach. Local Insight.
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our experts operate across continents, delivering tailored
            strategies informed by local market knowledge and global best
            practices.
          </p>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-xl">
          <img src={aboutMap} alt="About Map" className="w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
