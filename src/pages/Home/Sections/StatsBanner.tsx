import { Box, Container, Grid, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "./AnimatedCounter";
import useLanguage from "../../../hooks/useLanguage";
import { translations } from "../../../i18n";

const StatsBanner = () => {
  const lang = useLanguage();
  const translate = translations[lang];
  const isRtl = lang === "ar";
  const stats = [
    {
      number: 10000,
      suffix: "+",

      label: translate.home.statsBanner.totalTransfers,
    },

    {
      number: 5000,
      suffix: "+",

      label: translate.home.statsBanner.activeTravelers,
    },

    {
      number: 24,
      suffix: " / 7",

      label: translate.home.statsBanner.supportAvailability,
    },

    {
      number: 100,
      suffix: "+",

      label: translate.home.statsBanner.corporateClients,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,

    threshold: 0.3,
  });

  return (
    <Box
      ref={ref}
      sx={{
        py: {
          xs: 5,
          md: 6,
        },

        px: {
          xs: 2,
          md: 12,
        },
        background: "linear-gradient(135deg, #f8fbff 0%, #edf6fc 100%)",

        position: "relative",

        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",

          bottom: -120,
          left: -120,

          width: 350,
          height: 350,

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(245,153,61,0.10) 0%, transparent 70%)",
        }}
      />

      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.8)",

            backdropFilter: "blur(10px)",

            border: "1px solid rgba(31,177,249,0.08)",

            borderRadius: "32px",

            py: {
              xs: 4,
              md: 5,
            },

            px: {
              xs: 2,
              md: 5,
            },

            boxShadow: "0 10px 40px rgba(15,23,42,0.04)",
          }}
        >
          <Grid
            container
            spacing={{
              xs: 5,
              md: 3,
            }}
          >
            {stats.map((item, index) => (
              <Grid
                key={index}
                size={{
                  xs: 6,
                  md: 3,
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",

                    position: "relative",

                    "&::after":
                      index !== stats.length - 1
                        ? {
                            content: '""',

                            position: "absolute",

                            top: "50%",
                            right: -12,

                            transform: "translateY(-50%)",

                            width: 1,
                            height: 70,

                            background:
                              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)",

                            display: {
                              xs: "none",
                              md: "block",
                            },
                          }
                        : {},
                  }}
                >
                  {/* NUMBER */}
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 28,
                        md: 40,
                      },

                      fontWeight: 900,

                      lineHeight: 1,

                      mb: 1,

                      color: "#031B2D",
                    }}
                  >
                    {inView && <AnimatedCounter end={item.number} />}
                    {item.suffix}
                  </Typography>

                  {/* LABEL */}
                  <Typography
                    sx={{
                      color: "#6b7280",

                      fontWeight: 800,

                      letterSpacing: 1.5,

                      textTransform: "uppercase",

                      fontSize: isRtl ? { xs: 14, md: 16 } : { xs: 10, md: 14 },
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default StatsBanner;
