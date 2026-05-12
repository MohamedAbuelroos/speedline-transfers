import { useParams } from "react-router-dom";
import { travelPackages } from "../../data/travelPackages";
import { Box, Grid } from "@mui/material";
import PackageHero from "./Sections/PackageHero";
import PackageGallery from "./Sections/PackageGallery";
import PackageBookingCard from "./Sections/PackageBookingCard";
import PackageOverview from "./Sections/PackageOverview";
import PackageItinerary from "./Sections/PackageItinerary";
import PackageTerms from "./Sections/PackageTerms";

const PackageDetails = () => {
  const { slug } = useParams();

  const packageItem = travelPackages.find((item) => item.slug === slug);

  if (!packageItem) {
    return <div>Package not found</div>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1400px",
        mx: "auto",

        px: {
          xs: 2,
          md: 4,
          lg: 8,
        },

        py: 4,
      }}
    >
      <PackageHero data={packageItem} />
      <Grid
        container
        spacing={4}
        sx={{
          mb: { xs: 4, lg: 0 },
          alignItems: "center",
        }}
      >
        {/* GALLERY */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <PackageGallery data={packageItem} />
        </Grid>

        {/* BOOKING CARD DESKTOP */}
        <Grid
          size={{ lg: 4 }}
          sx={{
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          <PackageBookingCard data={packageItem} />
        </Grid>
      </Grid>
      <PackageOverview data={packageItem} />
      <PackageItinerary data={packageItem} />
      <PackageTerms data={packageItem} />
      <Box
        sx={{
          display: {
            xs: "block",
            lg: "none",
          },

          mt: 6,
        }}
      >
        <PackageBookingCard data={packageItem} />
      </Box>
    </Box>
  );
};

export default PackageDetails;
