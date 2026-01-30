import { Container } from "../components/layout/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { IndustryGrid } from "../components/industries/IndustryGrid";
import { IndustryCTA } from "../components/industries/IndustryCTA";

import { industriesData } from "../data/industries.js";

const IndustriesPage = () => (
  <main className="py-20">
    <Container>
      <SectionTitle
        title="Industries We Support"
        subtitle="JSAT works across diverse supply chain ecosystems, delivering integrated capabilities adapted to regulatory, operational, and commercial realities."
      />
      <IndustryGrid industries={industriesData} />
      <IndustryCTA />
    </Container>
  </main>
);

export default IndustriesPage;
