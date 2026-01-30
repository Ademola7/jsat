import { InsightCard } from "./InsightCard";

export const InsightsGrid = () => (
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
    {Array.from({ length: 4 }).map((_, i) => (
      <InsightCard key={i} />
    ))}
  </div>
);
