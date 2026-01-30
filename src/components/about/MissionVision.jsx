const Card = ({ title, text, icon }) => (
  <div className="flex gap-4 rounded-xl bg-gray-50 p-6">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{text}</p>
    </div>
  </div>
);

export default function MissionVision() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card
          title="Our Mission"
          text="To empower global supply chains through integrated solutions that improve efficiency, visibility, and resilience."
          icon="🎯"
        />
        <Card
          title="Our Vision"
          text="To become a trusted partner enabling sustainable, resilient supply chains across industries and regions."
          icon="💡"
        />
      </div>
    </section>
  );
}
