import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import packages from "../../../data/packages";
import PackageCard from "../../../components/common/PackageCard";

const PopularTransfersSection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 5,
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Most Popular Transfers
            </Typography>

            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Fixed rates, no hidden fees. All inclusive of taxes and parking
            </Typography>
          </Box>

          <Button
            variant="outlined"
            onClick={() => navigate("/packages")}
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              color: "black",
              borderColor: "#DEE1E6FF",
              px: 3,
              "&:hover": {
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                borderColor: "#1FB1F9",
                transition: "0.3s",
              },
            }}
          >
            See All Packages
          </Button>
        </Box>

        {/* Cards */}
        {/* <Grid container spacing={3} sx={{ px: 5 }}>
          {transfers.map((item) => (
            <Grid size={{ xs: 12, md: 6 }} key={item.id}>
              <TransferCard {...item} />
            </Grid>
          ))}
        </Grid> */}
        <Grid container spacing={3} sx={{ px: 5 }}>
          {packages.slice(0, 3).map((item) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.id}>
              <PackageCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PopularTransfersSection;
