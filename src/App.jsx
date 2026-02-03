import { Routes, Route } from "react-router-dom";

// Global layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import IndustriesPage from "./pages/IndustriesPage";
import InsightsPage from "./pages/InsightsPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Legal
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/about-us" element={<About />} />

        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/integrated-logistics"
          element={<div className="p-10">Integrated Logistics</div>}
        />
        <Route
          path="/supply-chain-technology"
          element={<div className="p-10">Supply Chain Technology</div>}
        />
        <Route
          path="/consulting-advisory"
          element={<div className="p-10">Consulting & Advisory</div>}
        />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
      </Routes>

      <Footer />
    </div>
  );
}
