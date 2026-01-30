import { IndustryCard } from "./IndustryCard";

export const IndustryGrid = ({ industries }) => (
  <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {industries.map((industry) => (
      <IndustryCard
        key={industry.title}
        title={industry.title}
        description={industry.description}
      />
    ))}
  </div>
);
