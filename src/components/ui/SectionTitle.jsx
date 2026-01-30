export const SectionTitle = ({ title, subtitle }) => (
  <div className="max-w-2xl">
    <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-gray-600 leading-relaxed">{subtitle}</p>
    )}
  </div>
);
