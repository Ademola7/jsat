export const InsightCard = () => (
  <div className="rounded-2xl border border-gray-200 bg-[#f4f4f4] p-6 hover:shadow-md transition">
    <span className="inline-block bg-white rounded-full px-3 py-1 text-xs text-gray-500 border border-gray-200">
      Supply Chain Strategy
    </span>
    <h4 className="mt-3 font-semibold text-gray-900">
      Resiliency Planning in Turbulent Times
    </h4>
    <p className="mt-2 text-sm text-gray-600">
      Strategies for building resilient supply chains amid uncertainty.
    </p>
    <div className="mt-6">
      <span className="inline-block bg-white rounded-full px-3 py-1 text-sm text-red-500">
        Article | 4 min read
      </span>
    </div>
  </div>
);
