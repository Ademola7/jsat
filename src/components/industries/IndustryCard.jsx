export const IndustryCard = ({ title, description }) => (
  <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-3 text-sm text-gray-600">{description}</p>
    <span className="mt-6 inline-block text-sm font-medium text-red-500 group-hover:underline">
      View Industry Overview →
    </span>
  </div>
);
