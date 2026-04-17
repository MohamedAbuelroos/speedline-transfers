import { Box, Container, Grid } from "@mui/material";
import { useState } from "react";
import packagesData from "../../data/packages";
import PackageCard from "../../components/common/PackageCard";
import TopSection from "./Sections/TopSection";
import FilterSection from "./Sections/FilterSection";
import CustomCTASection from "./Sections/CustomCTASection";
import FeaturesSection from "./Sections/FeaturesSection";

const Packages = () => {
  const [active, setActive] = useState("All Packages");

  const filtered = packagesData.filter((item) => {
    if (active === "All Packages") return true;
    return item.category === active;
  });

  return (
    <Box sx={{ background: "white" }}>
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
