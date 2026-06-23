import { Box, Container, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

import { partners } from "../../../data/partners";
import useLanguage from "../../../hooks/useLanguage";
import { translations } from "../../../i18n";

const PartnersSection = () => {
  const lang = useLanguage();
  const translate = translations[lang];
  const isRtl = lang === "ar";
  return (
    <Box
      sx={{
        py: {
          xs: 7,
          md: 9,
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
        {/* HEADER */}
        <Box
          sx={{
            textAlign: "center",

            mb: 5,
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,

              color: "#111827",

              mb: 1,

              fontSize: {
                xs: isRtl ? 36 : 26,
                md: isRtl ? 44 : 34,
              },
            }}
          >
            {translate.home.partnersSection.title}
          </Typography>

          <Typography
            sx={{
              color: "#6b7280",

              maxWidth: 650,

              mx: "auto",

              lineHeight: 1.9,
              fontSize: isRtl ? 20 : 16,
            }}
          >
            {translate.home.partnersSection.subtitle}
          </Typography>
        </Box>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={20}
          loop
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            stopOnLastSlide: false,

            pauseOnMouseEnter: true,
          }}
          speed={4000}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },

            900: {
              slidesPerView: 4,
            },

            1200: {
              slidesPerView: 5,
            },
          }}
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <Box
                sx={{
                  height: 120,

                  borderRadius: "28px",

                  backgroundColor: "#fff",

                  border: "1px solid rgba(226,232,240,0.7)",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  transition: "0.35s ease",

                  opacity: 0.7,

                  filter: "grayscale(100%)",

                  "&:hover": {
                    opacity: 1,

                    filter: "grayscale(0%)",

                    transform: "translateY(-4px)",

                    boxShadow: "0 15px 35px rgba(15,23,42,0.08)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={partner.image}
                  alt={partner.name}
                  sx={{
                    width: "70%",

                    height: "70%",

                    objectFit: "contain",
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default PartnersSection;
