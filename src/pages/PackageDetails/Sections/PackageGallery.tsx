import { Box, Dialog, Grid } from "@mui/material";

import { useState } from "react";

import type { TravelPackage } from "../../../utils/types";

type Props = {
  data: TravelPackage;
};

const PackageGallery = ({ data }: Props) => {
  const [selectedImage, setSelectedImage] = useState(data.gallery[0]);

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* GALLERY */}
      <Grid container spacing={2}>
        {/* BIG IMAGE */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            onClick={() => setOpen(true)}
            sx={{
              height: {
                xs: 260,
                md: 520,
              },

              borderRadius: "28px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={selectedImage}
              alt=""
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",

                transition: "0.5s",

                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Box>
        </Grid>

        {/* SIDE IMAGES */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Grid
            container
            spacing={2}
            sx={{
              height: "100%",
              flexWrap: { xs: "nowrap", md: "wrap" }
            }}
          >
            {data.gallery.slice(1, 3).map((image, index) => (
              <Grid key={index} size={{ xs: 6, md: 12 }}>
                <Box
                  onClick={() => {
                    setSelectedImage(image);
                    setOpen(true);
                  }}
                  sx={{
                    position: "relative",

                    height: {
                      xs: 180,
                      md: 250,
                    },

                    borderRadius: "24px",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    component="img"
                    src={image}
                    alt=""
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",

                      transition: "0.5s",

                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />

                  {/* LAST IMAGE OVERLAY */}
                  {index === 1 && data.gallery.length > 3 && (
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,

                        background: "rgba(0,0,0,0.45)",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          color: "#fff",
                          fontWeight: 800,
                          fontSize: 28,
                        }}
                      >
                        +{data.gallery.length - 3}
                      </Box>
                    </Box>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* IMAGE PREVIEW */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xl">
        <Box
          sx={{
            backgroundColor: "#000",
            p: 2,
          }}
        >
          {/* BIG PREVIEW */}
          <Box
            component="img"
            src={selectedImage}
            alt=""
            sx={{
              width: "100%",
              maxHeight: "75vh",
              objectFit: "contain",
              borderRadius: "12px",
            }}
          />

          {/* THUMBNAILS */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: 2,
              overflowX: "auto",
            }}
          >
            {data.gallery.map((image) => (
              <Box
                key={image}
                onClick={() => setSelectedImage(image)}
                component="img"
                src={image}
                alt=""
                sx={{
                  width: 90,
                  height: 70,
                  objectFit: "cover",

                  borderRadius: "12px",

                  cursor: "pointer",

                  border:
                    selectedImage === image
                      ? "3px solid #1FB1F9"
                      : "2px solid transparent",

                  opacity: selectedImage === image ? 1 : 0.7,
                }}
              />
            ))}
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default PackageGallery;
