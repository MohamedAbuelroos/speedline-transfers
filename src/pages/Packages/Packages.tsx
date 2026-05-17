import { Box, Container, Grid } from "@mui/material";
import { useState } from "react";
// import packagesData from "../../data/packages";
import PackageCard from "../../components/common/PackageCard";
import TopSection from "./Sections/TopSection";
import FilterSection from "./Sections/FilterSection";
import CustomCTASection from "./Sections/CustomCTASection";
import FeaturesSection from "./Sections/FeaturesSection";
import { travelPackages } from "../../data/travelPackages";
import Seo from "../../components/common/Seo";

const Packages = () => {
  const [active, setActive] = useState("All Packages");

  const filtered = travelPackages.filter((item) => {
    if (active === "All Packages") return true;
    return item.category === active;
  });

  return (
    <Box sx={{ background: "white" }}>
      <Seo
        title="Travel Packages | Airport & Chauffeur Services in Saudi Arabia | SpeedLine Transfers"
        description="Discover SpeedLine Transfers’ curated travel packages — from airport transfers and city-to-city rides to hourly chauffeur services. Choose the package that fits your journey and enjoy safe, reliable, and comfortable transportation across Saudi Arabia."
        keywords="Saudi travel packages, airport transfer packages, chauffeur packages Saudi Arabia, Riyadh transfer deals, Jeddah airport rides"
      />

      {/* HEADER */}
      <TopSection />
      <Container>
        {/* FILTER */}
        <FilterSection active={active} onChange={setActive} />

        {/* GRID */}
        <Grid container spacing={3}>
          {filtered.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
              <PackageCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <CustomCTASection />
      <FeaturesSection />
    </Box>
  );
};

export default Packages;
