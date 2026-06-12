import { Box, Container, Typography, Button, Divider } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import useLanguage from "../../../hooks/useLanguage";
import useDelayedNavigate from "../../../hooks/useDelayedNavigate";

const CTASection = () => {
  const navigate = useDelayedNavigate();
  const lang = useLanguage();
  const isRTL = lang === "ar";

  return (
    <Box
      sx={{
        py: {
          xs: 8,
          md: 12,
        },

        background: `
    linear-gradient(
      180deg,
      #ffffff 0%,
      #f8fbff 100%
    )
  `,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",

            overflow: "hidden",

            background: "linear-gradient(135deg, #0F172A 0%, #111827 100%)",

            borderRadius: "36px",

            p: {
              xs: 3,
              md: 6,
            },

            display: "flex",

            flexDirection: {
              xs: "column",
              lg: "row",
            },

            justifyContent: "space-between",

            alignItems: "center",

            gap: 5,

            boxShadow: "0 25px 60px rgba(15,23,42,0.16)",

            color: "#fff",
          }}
        >
          {/* BACKGROUND GLOW */}
          <Box
            sx={{
              position: "absolute",

              top: -120,
              right: -120,

              width: 320,
              height: 320,

              borderRadius: "50%",

              background: "rgba(31,177,249,0.18)",

              filter: "blur(80px)",
            }}
          />
          {/* LEFT */}
          <Box
            sx={{
              position: "relative",

              zIndex: 2,

              textAlign: {
                xs: "center",
                md: "left",
              },

              maxWidth: 620,
            }}
          >
            <Typography
              sx={{
                fontWeight: 900,

                lineHeight: 1.1,

                mb: 2,

                fontSize: {
                  xs: 36,
                  md: 54,
                },
              }}
            >
              Ready for Your
              <br />
              Next Journey?
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.72)",

                mb: 4,

                lineHeight: 1.9,

                fontSize: {
                  xs: 15,
                  md: 17,
                },

                maxWidth: 520,
              }}
            >
              Book your transfer in seconds. Professional drivers, fixed
              pricing, and premium comfort — all in one place.
            </Typography>

            <Box
              sx={{
                display: "flex",

                flexDirection: {
                  xs: "column",
                  sm: "row",
                },

                gap: 2,

                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                },
              }}
            >
              <Button
                onClick={() => navigate("/booking")}
                variant="contained"
                sx={{
                  borderRadius: "999px",

                  textTransform: "none",

                  px: 4,
                  py: 1.5,

                  fontWeight: 700,

                  fontSize: 15,

                  background:
                    "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

                  boxShadow: "0 12px 30px rgba(31,177,249,0.25)",

                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #19a6ec 0%, #138cc5 100%)",
                  },
                }}
              >
                Book Now
              </Button>

              <Button
                variant="contained"
                target="_blank"
                href="https://wa.me/966547417085?text=Hello,%20I%20want%20to%20book%20a%20custom%20transfer"
                sx={{
                  borderRadius: "999px",

                  textTransform: "none",

                  px: 4,
                  py: 1.5,

                  fontWeight: 700,

                  fontSize: 15,

                  backgroundColor: "rgba(255,255,255,0.08)",

                  backdropFilter: "blur(10px)",

                  border: "1px solid rgba(255,255,255,0.12)",

                  color: "#fff",

                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.12)",
                  },
                }}
              >
                Chat on WhatsApp
              </Button>
            </Box>
          </Box>

          {/* RIGHT BOX */}
          <Box
            sx={{
              position: "relative",

              zIndex: 2,

              borderRadius: "28px",

              backdropFilter: "blur(18px)",

              backgroundColor: "rgba(255,255,255,0.08)",

              border: "1px solid rgba(255,255,255,0.12)",

              boxShadow: "0 15px 40px rgba(0,0,0,0.12)",

              p: 4,

              minWidth: {
                xs: "100%",
                md: 360,
              },
            }}
          >
            {/* Phone */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <PhoneIcon
                sx={{
                  color: "#fff",

                  width: 52,
                  height: 52,

                  background:
                    "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

                  borderRadius: "18px",

                  p: 1.2,

                  boxShadow: "0 10px 25px rgba(31,177,249,0.25)",
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  Call Us 24/7
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    direction: isRTL ? "rtl" : "ltr",
                    unicodeBidi: "embed",
                    color: "rgba(255,255,255,0.72)",
                  }}
                >
                  +96654 741 7085
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Response Time */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <AccessTimeIcon
                sx={{
                  color: "#fff",

                  width: 52,
                  height: 52,

                  background:
                    "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

                  borderRadius: "18px",

                  p: 1.2,

                  boxShadow: "0 10px 25px rgba(31,177,249,0.25)",
                }}
              />
              <Box>
                <Typography sx={{ fontWeight: 600, color: "#fff" }}>
                  Avg Response Time
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2 Minutes
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;
