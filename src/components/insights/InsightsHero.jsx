import { SectionTitle } from "../ui/SectionTitle";
import insightHero from "../../assets/insightHero.jpg";

export const InsightsHero = () => (
  <div
    className="py-16 bg-cover bg-center bg-no-repeat relative"
    style={{
      backgroundImage: `url(${insightHero})`,
    }}
  >
    <div className="absolute inset-0 bg-white/90"></div>
    <div className="relative z-10">
      <SectionTitle
        title="Insights on Supply Chain, Logistics & Market Strategy"
        subtitle="Research-backed perspectives from the field, across industries and regions."
      />
    </div>
  </div>
);
