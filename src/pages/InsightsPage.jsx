import { Container } from "../components/layout/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { InsightsTabs } from "../components/insights/InsightsTabs";
import { FeaturedInsight } from "../components/insights/FeaturedInsight";
import { InsightsGrid } from "../components/insights/InsightsGrid";
import { InsightsCTA } from "../components/insights/InsightsCTA";
import insightHero from "../assets/insightHero.jpg";

const tabs = [
  "All Insights",
  "Supply Chain Strategy",
  "Logistics & Operations",
  "Technology & Digitalization",
  "Industry Deep Dives",
];

const InsightsPage = () => (
  <main className="py-20 bg-gray-50">
    <Container>
      <SectionTitle
        title="Insights on Supply Chain, Logistics & Market Strategy"
        subtitle="Research-backed perspectives from the field, across industries and regions."
        backgroundImage={insightHero}
      />
      <InsightsTabs tabs={tabs} active={0} />
      <div className="mt-12 grid gap-8">
        <div>
          <FeaturedInsight />
        </div>
        <div>
          <InsightsGrid />
        </div>
      </div>
      <InsightsCTA />
    </Container>
  </main>
);

export default InsightsPage;
