import industries1 from "../../assets/industries1.png";

export const IndustryCTA = () => (
  <div className="mt-20 rounded-3xl overflow-hidden">
    <div className="md:flex">
      <div className="w-full md:w-1/2 bg-gray-100 p-8 md:p-12 text-gray-900">
        <h3 className="text-2xl font-semibold text-black">
          Let’s Apply This to Your Supply Chain
        </h3>
        <p className="mt-4 max-w-xl text-black">
          Start a focused conversation with our team to explore how integrated
          execution, technology, and advisory can support your organization.
        </p>
        <button
          className="mt-8 rounded-full px-8 py-3 text-sm font-medium text-white transition"
          style={{
            backgroundImage: "linear-gradient(90deg, #FF5733, #8B301C)",
          }}
        >
          Start a Conversation
        </button>
      </div>

      {/* Right: image (visible on md+) */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={industries1}
          alt="Industries"
          className="w-full h-full object-cover"
          style={{ minHeight: 220 }}
        />
      </div>
    </div>
  </div>
);
