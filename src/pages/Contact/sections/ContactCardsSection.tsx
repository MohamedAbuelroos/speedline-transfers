import { Box, Container, Grid, Typography } from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const cards = [
  {
    title: "WhatsApp",

    value: "+966547417085",

    icon: <WhatsAppIcon />,

    color: "#25D366",
  },

  {
    title: "Phone",

    value: "+966547417085",

    icon: <PhoneIcon />,

    color: "#1FB1F9",
  },

  {
    title: "Email",

    value: "info@speedline.com",

    icon: <EmailIcon />,

    color: "#F5993D",
  },

  {
    title: "Working Hours",

    value: "24/7 Support",

    icon: <AccessTimeIcon />,

    color: "#111827",
  },
];

const ContactCardsSection = () => {
  return (
    <Box
      sx={{
        py: {
          xs: 7,
          md: 10,
        },

        background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid
              key={card.title}
              size={{
                xs: 12,
                sm: 6,
                md: 3,
              }}
            >
              <Box
                sx={{
                  p: 4,

                  borderRadius: "30px",

                  backgroundColor: "#fff",

                  border: "1px solid rgba(226,232,240,0.7)",

                  textAlign: "center",

                  transition: "0.35s ease",

                  "&:hover": {
                    transform: "translateY(-6px)",

                    boxShadow: "0 20px 45px rgba(15,23,42,0.08)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 72,
                    height: 72,

                    mx: "auto",

                    mb: 3,

                    borderRadius: "24px",

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",

                    backgroundColor: `${card.color}15`,

                    color: card.color,

                    "& svg": {
                      fontSize: 36,
                    },
                  }}
                >
                  {card.icon}
                </Box>

                <Typography
                  sx={{
                    fontWeight: 800,

                    color: "#111827",

                    mb: 1,
                  }}
                >
                  {card.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#6b7280",
                  }}
                >
                  {card.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactCardsSection;
