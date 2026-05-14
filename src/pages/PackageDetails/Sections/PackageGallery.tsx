import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import type { TravelPackage } from "../../../utils/types";
import FullscreenGallery from "./FullscreenGallery ";

type Props = {
  data: TravelPackage;
};

const PackageGallery = ({ data }: Props) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      {/* GALLERY */}
      <Box>
        {/* BIG IMAGE */}
        <Box
          onClick={() => {
            setSelectedIndex(0);
            setOpen(true);
          }}
          sx={{
            height: { xs: 260, md: 520 },
            borderRadius: "28px",
            overflow: "hidden",
            cursor: "pointer",
            mb: 2,
          }}
        >
          <Box
            component="img"
            src={data.gallery[0]}
            alt="reverse-circuit-madinah-jeddah-gallery"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "0.5s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          />
        </Box>

        {/* THUMBNAILS BELOW */}
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
          }}
        >
          {data.gallery.slice(1, 4).map((image, index) => (
            <Grid key={index} size={{ xs: 4, md: 4 }}>
              <Box
                onClick={() => {
                  setOpen(true);
                  setSelectedIndex(index + 1);
                }}
                sx={{
                  position: "relative",
                  height: { xs: 100, md: 160 },
                  borderRadius: "20px",
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
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                />

                {/* LAST IMAGE OVERLAY */}
                {index === 2 && data.gallery.length > 3 && (
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
                        fontSize: { xs: 20, md: 28 },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      +{data.gallery.length - 3}
                      <Typography
                        variant="body1"
                        sx={{ fontSize: { xs: 14, md: 18 } }}
                      >
                        Click to view all
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* IMAGE PREVIEW */}
      <FullscreenGallery
        data={data}
        open={open}
        setOpen={setOpen}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </>
  );
};

export default PackageGallery;
