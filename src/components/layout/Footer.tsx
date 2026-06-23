import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import useLanguage from "../../hooks/useLanguage";
import useDelayedNavigate from "../../hooks/useDelayedNavigate";
import { translations } from "../../i18n";

const socialIcons = [
  {
    icon: <WhatsAppIcon />,
    href: "https://wa.me/966547417085",
    color: "#fff",
    bgColor: "#1FB1F9",
    hoverColor: "#25D366",
  },
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/speedlinetransfers/",
    color: "#fff",
    bgColor: "#1FB1F9",
    hoverColor: "#E1306C",
  },
  {
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/speedlinetransfers",
    color: "#fff",
    bgColor: "#1FB1F9",
    hoverColor: "#1877F2",
  },
  {
    icon: <EmailIcon />,
    href: "mailto:contact@speedlinetransfers.com",
    color: "#fff",
    bgColor: "#1FB1F9",
    hoverColor: "#D44638",
  },
];
const Footer = () => {
  const lang = useLanguage();
  const translate = translations[lang];
  const isRTL = lang === "ar";
  const navigate = useDelayedNavigate();
  return (
    <Box
      sx={{
        position: "relative",

        overflow: "hidden",

        background: "linear-gradient(135deg, #0B1220 0%, #111827 100%)",

        color: "#fff",

        pt: {
          xs: 7,
          md: 9,
        },

        pb: 3,
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

          background: "rgba(31,177,249,0.12)",

          filter: "blur(90px)",
        }}
      />
      <Container>
        <Grid container spacing={6} sx={{ justifyContent: "space-between" }}>
          {/* Brand */}
          <Grid
            sx={{
              xs: 12,
              md: 4,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              component="img"
              src={logo}
              loading="lazy"
              alt="SpeedLine Logo"
              sx={{
                width: 240,
                filter: "brightness(1.1)",
              }}
            />

            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.9,
                maxWidth: 380,
                fontSize: isRTL ? 18 : 15,
              }}
            >
              {translate.footer.description}
            </Typography>
          </Grid>

          {/* Links */}
          <Grid sx={{ xs: 6, md: 2 }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: isRTL ? 22 : 20,
                mb: 2.5,
                color: "#fff",
              }}
            >
              {translate.footer.company}
            </Typography>

            <Typography
              variant="body2"
              onClick={() => navigate("/about")}
              sx={{
                color: "rgba(255,255,255,0.68)",
                textDecoration: "none",
                mb: 1.5,

                fontSize: isRTL ? 18 : 16,

                cursor: "pointer",

                transition: "0.3s ease",

                width: "fit-content",

                "&:hover": {
                  color: "#1FB1F9",

                  transform: "translateX(4px)",
                },
              }}
            >
              {translate.footer.about}
            </Typography>
            <Typography
              variant="body2"
              onClick={() => navigate("/fleet")}
              sx={{
                color: "rgba(255,255,255,0.68)",
                textDecoration: "none",
                mb: 1.5,
                fontSize: isRTL ? 18 : 16,

                cursor: "pointer",

                transition: "0.3s ease",

                width: "fit-content",

                "&:hover": {
                  color: "#1FB1F9",

                  transform: "translateX(4px)",
                },
              }}
            >
              {translate.footer.fleet}
            </Typography>
            <Typography
              variant="body2"
              onClick={() => navigate("/services")}
              sx={{
                color: "rgba(255,255,255,0.68)",
                textDecoration: "none",
                mb: 1.5,
                fontSize: isRTL ? 18 : 16,
                cursor: "pointer",

                transition: "0.3s ease",

                width: "fit-content",

                "&:hover": {
                  color: "#1FB1F9",

                  transform: "translateX(4px)",
                },
              }}
            >
              {translate.footer.services}
            </Typography>
            <Typography
              variant="body2"
              onClick={() => navigate("/packages")}
              sx={{
                color: "rgba(255,255,255,0.68)",
                textDecoration: "none",
                mb: 1.5,
                fontSize: isRTL ? 18 : 16,
                cursor: "pointer",

                transition: "0.3s ease",

                width: "fit-content",

                "&:hover": {
                  color: "#1FB1F9",

                  transform: "translateX(4px)",
                },
              }}
            >
              {translate.footer.packages}
            </Typography>
          </Grid>

          {/* Support */}
          <Grid sx={{ xs: 6, md: 3 }}>
            <Typography
              sx={{
                fontWeight: 700,

                fontSize: isRTL ? 22 : 20,

                mb: 2.5,

                color: "#fff",
              }}
            >
              {translate.footer.support}
            </Typography>

            <Typography
              variant="body2"
              onClick={() => navigate("/booking")}
              sx={{
                color: "rgba(255,255,255,0.68)",
                textDecoration: "none",

                mb: 1.5,
                fontSize: isRTL ? 18 : 16,
                cursor: "pointer",

                transition: "0.3s ease",

                width: "fit-content",

                "&:hover": {
                  color: "#1FB1F9",

                  transform: "translateX(4px)",
                },
              }}
            >
              {translate.footer.booking}
            </Typography>
            <Typography
              variant="body2"
              onClick={() => navigate("/services")}
              sx={{
                color: "rgba(255,255,255,0.68)",
                textDecoration: "none",
                mb: 1.5,

                cursor: "pointer",

                transition: "0.3s ease",
                fontSize: isRTL ? 18 : 16,
                width: "fit-content",

                "&:hover": {
                  color: "#1FB1F9",

                  transform: "translateX(4px)",
                },
              }}
            >
              {translate.footer.faq}
            </Typography>
            <Typography
              variant="body2"
              onClick={() => navigate("/contact")}
              sx={{
                color: "rgba(255,255,255,0.68)",
                textDecoration: "none",
                mb: 1.5,
                fontSize: isRTL ? 18 : 16,
                cursor: "pointer",

                transition: "0.3s ease",

                width: "fit-content",

                "&:hover": {
                  color: "#1FB1F9",

                  transform: "translateX(4px)",
                },
              }}
            >
              {translate.footer.contactUs}
            </Typography>
          </Grid>

          {/* Contact */}
          <Grid sx={{ xs: 12, md: 3 }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: isRTL ? 22 : 20,
                mb: 2.5,
                color: "#fff",
              }}
            >
              {translate.footer.contact}
            </Typography>
            <IconButton
              href="tel:+966547417085"
              sx={{
                display: "flex",

                alignItems: "center",

                justifyContent: "flex-start",

                gap: 1.2,

                mb: 1.5,

                color: "inherit",

                borderRadius: "14px",

                px: 1.5,
                py: 1,

                transition: "0.3s ease",

                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              <PhoneIcon
                sx={{
                  color: "#1FB1F9",

                  background: "rgba(31,177,249,0.12)",

                  padding: "8px",

                  borderRadius: "12px",

                  fontSize: 36,
                }}
              />
              <Typography
                variant="body2"
                sx={{ direction: isRTL ? "rtl" : "ltr", unicodeBidi: "embed" }}
              >
                +96654 741 7085
              </Typography>
            </IconButton>

            <IconButton
              href="mailto:contact@speedlinetransfers.com"
              sx={{
                display: "flex",

                alignItems: "center",

                justifyContent: "flex-start",

                gap: 1.2,

                mb: 1.5,

                color: "inherit",

                borderRadius: "14px",

                px: 1.5,
                py: 1,

                transition: "0.3s ease",

                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              <EmailIcon
                sx={{
                  color: "#1FB1F9",

                  background: "rgba(31,177,249,0.12)",

                  padding: "8px",

                  borderRadius: "12px",

                  fontSize: 36,
                }}
              />
              <Typography variant="body2">
                contact@speedlinetransfers.com
              </Typography>
            </IconButton>

            {/* Social */}

            <Box>
              {socialIcons.map((item, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={item.href}
                  target="_blank"
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.06)",

                    color: "#fff",

                    mr: 1.2,

                    border: "1px solid rgba(255,255,255,0.08)",

                    transition: "0.3s ease",

                    "&:hover": {
                      backgroundColor: item.hoverColor,

                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
            mt: 5,
            pt: 3,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.5)",

              fontSize: 14,
            }}
          >
            © {new Date().getFullYear()} SpeedLine Transfers.{" "}
            {translate.footer.copyright}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
