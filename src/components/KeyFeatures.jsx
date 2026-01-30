export default function KeyFeatures() {
  const features = [
    {
      title: "Execute – Integrated Logistics",
      description:
        "Coordination of freight, warehousing, distribution, and transport across multiple regions and markets. Ensures goods move efficiently, rellably, and on time.",
    },
    {
      title: "Enable – Supply Chain Technology",
      description:
        "Provides real-time visibility, data analytics, and operational control. Our technology platforms allow clients to monitor analyze, and optimize performance across all supply chain nodes.",
    },
    {
      title: "Optimise – Advisory & Transformation",
      description:
        "Designs and implements strategic improvements to make supply chains resilient, efficient, and scalable. Continuous optimization through analytics, process redesign, and expert guidance.",
    },
  ];

  return (
    <section className="px-6 py-16 bg-white">
      <p className="text-orange-500 font-semibold tracking-widest mb-3">
        KEY FEATURES
      </p>

      <h2 className="text-3xl font-bold mb-2">One integrated partner.</h2>

      <h3 className="text-xl text-gray-700 mb-10">
        End-to-end supply chain capability
      </h3>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition"
          >
            <h4 className="font-semibold mb-3">{feature.title}</h4>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
