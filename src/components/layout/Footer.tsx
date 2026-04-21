import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import useLanguage from "../../hooks/useLanguage";

const socialIcons = [
  {
    icon: <WhatsAppIcon />,
    href: "https://wa.me/966500000000",
    color: "#fff",
    bgColor: "#1FB1F9",
    hoverColor: "#25D366",
  },
  {
    icon: <InstagramIcon />,
    href: "https://instagram.com/yourpage",
    color: "#fff",
    bgColor: "#1FB1F9",
    hoverColor: "#E1306C",
  },
  {
    icon: <FacebookIcon />,
    href: "https://facebook.com/yourpage",
    color: "#fff",
    bgColor: "#1FB1F9",
    hoverColor: "#1877F2",
  },
  {
    icon: <EmailIcon />,
    href: "mailto:info@speedlinetransfers.com",
    color: "#fff",
    bgColor: "#1FB1F9",
    hoverColor: "#D44638",
  },
];
const Footer = () => {
  const lang = useLanguage();
  const isRTL = lang === "ar";
  return (
    <Box sx={{ backgroundColor: "#0f172a", color: "#fff", pt: 6, pb: 3 }}>
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
              sx={{ width: 300 }}
            />

            <Typography variant="body2" sx={{ opacity: 0.7, maxWidth: 400 }}>
              transfer services from Egypt to Saudi Arabia. We provide safe,
              reliable, and comfortable rides for all your journeys.
            </Typography>
          </Grid>

          {/* Links */}
          <Grid sx={{ xs: 6, md: 2 }}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Company</Typography>

            <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>
              About
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>
              Fleet
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>
              Services
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Packages
            </Typography>
          </Grid>

          {/* Support */}
          <Grid sx={{ xs: 6, md: 3 }}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Support</Typography>

            <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>
              Booking
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>
              FAQ
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>
              Contact Us
            </Typography>
          </Grid>

          {/* Contact */}
          <Grid sx={{ xs: 12, md: 3 }}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Contact</Typography>
            <IconButton
              href="tel:+966500000000"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 1,
                mb: 1,
                color: "inherit",
              }}
            >
              <PhoneIcon sx={{ fontSize: 18, color: "#1FB1F9" }} />
              <Typography
                variant="body2"
                sx={{ direction: isRTL ? "rtl" : "ltr", unicodeBidi: "embed" }}
              >
                +966 50 000 0000
              </Typography>
            </IconButton>

            <IconButton
              href="mailto:mohamedabuelroos31@gmail.com"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 1,
                mb: 2,
                color: "inherit",
              }}
            >
              <EmailIcon sx={{ fontSize: 18, color: "#1FB1F9" }} />
              <Typography variant="body2">info@speedline.com</Typography>
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
                    backgroundColor: item.bgColor,
                    color: item.color,
                    mr: 1,
                    "&:hover": {
                      backgroundColor: item.hoverColor,
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
            borderTop: "1px solid rgba(255,255,255,0.1)",
            textAlign: "center",
            mt: 5,
            pt: 3,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            © {new Date().getFullYear()} SpeedLine Transfers. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
