import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { travelPackages } from "../../../data/travelPackages";
import PackageCard from "../../../components/common/PackageCard";
import useDelayedNavigate from "../../../hooks/useDelayedNavigate";
import useLanguage from "../../../hooks/useLanguage";
import { translations } from "../../../i18n";

const PopularTransfersSection = () => {
  const navigate = useDelayedNavigate();
  const lang = useLanguage();
  const translate = translations[lang];
  const isRtl = lang === "ar";

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 12 }, background: "#fff" }}>
      <Container maxWidth="xl">
        {/* SECTION HEADER */}
        <Box
          sx={{
            display: "flex",

            justifyContent: "space-between",

            alignItems: {
              xs: "flex-start",
              md: "flex-end",
            },

            flexDirection: {
              xs: "column",
              md: "row",
            },

            gap: 3,

            mb: 6,
          }}
        >
          {/* LEFT */}
          <Box>
            {/* BADGE */}
            <Box
              sx={{
                display: "inline-flex",

                alignItems: "center",

                justifyContent: "center",

                px: 2.5,
                py: 1,

                borderRadius: "999px",

                backgroundColor: "rgba(245,153,61,0.12)",

                border: "1px solid rgba(245,153,61,0.2)",

                color: "#F5993D",

                fontSize: isRtl ? 16 : 13,

                fontWeight: 700,

                mb: 2,
              }}
            >
              {translate.home.popularPackages.badge}
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                fontWeight: 900,

                lineHeight: 1.15,

                color: "#111827",

                mb: 1.5,

                fontSize: isRtl
                  ? {
                      xs: 48,
                      md: 58,
                    }
                  : {
                      xs: 34,
                      md: 48,
                    },
              }}
            >
              {translate.home.popularPackages.title}
            </Typography>

            {/* SUBTITLE */}
            <Typography
              sx={{
                color: "#6b7280",

                maxWidth: 620,

                lineHeight: 1.9,

                fontSize: isRtl
                  ? {
                      xs: 17,
                      md: 22,
                    }
                  : {
                      xs: 15,
                      md: 17,
                    },
              }}
            >
              {translate.home.popularPackages.subTitle}
            </Typography>
          </Box>

          {/* BUTTON */}
          <Button
            variant="contained"
            onClick={() => navigate("/packages")}
            sx={{
              px: 4,
              py: 1.2,
              borderRadius: "999px",
              textTransform: "none",
              color: "white",
              fontWeight: 600,
              fontSize: 15,
              backgroundColor: "#1FB1F9",
              "&:hover": {
                backgroundColor: "#1697d2",
              },
            }}
          >
            {translate.home.popularPackages.btn}
          </Button>
        </Box>

        <Grid
          container
          spacing={3}
          sx={{
            px: {
              xs: 0,
              md: 2,
            },
          }}
        >
          {travelPackages.slice(0, 3).map((item) => (
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
