import { InsightCard } from "./InsightCard";

export const InsightsGrid = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
    {Array.from({ length: 4 }).map((_, i) => (
      <InsightCard key={i} />
    ))}
  </div>
);
