import insight2 from "../../assets/insight2.png";

export const InsightsCTA = () => (
  <div
    className="mt-20 rounded-3xl p-12 text-white"
    style={{
      backgroundImage: `url(${insight2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <h3 className="text-2xl font-semibold">
      Let’s Apply This to Your Supply Chain
    </h3>
    <p className="mt-4 max-w-xl text-gray-300">
      Start a focused conversation with our team to explore how integrated
      execution, technology, and advisory can support your organization.
    </p>
    <button className="mt-8 rounded-full bg-red-500 px-8 py-3 text-sm font-medium hover:bg-red-600 transition">
      Start a Conversation
    </button>
  </div>
);
