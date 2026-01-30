export const InsightsTabs = ({ tabs, active }) => (
  <div className="mt-10 flex flex-wrap gap-6">
    {tabs.map((tab, index) => (
      <button
        key={tab}
        className={`text-sm font-medium pb-2 border-b-2 transition ${
          index === active
            ? "border-red-500 text-red-500"
            : "border-transparent text-gray-600 hover:text-gray-900"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
);
