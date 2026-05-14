import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import type { TravelPackage } from "../../../utils/types";

type Props = {
  data: TravelPackage;
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
};

const FullscreenGallery = ({
  data,
  open,
  setOpen,
  selectedIndex,
  setSelectedIndex,
}: Props) => {
  const handleNext = () =>
    setSelectedIndex((selectedIndex + 1) % data.gallery.length);

  const handlePrev = () =>
    setSelectedIndex(
      selectedIndex === 0 ? data.gallery.length - 1 : selectedIndex - 1,
    );

  return (
    <>
      {open && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            backgroundColor: "#000",
            zIndex: 1300,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Close button */}
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "#fff",
              backgroundColor: "rgba(255,255,255,0.1)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Navigation buttons */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: 16,
              color: "#fff",
              backgroundColor: "rgba(255,255,255,0.1)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 16,
              color: "#fff",
              backgroundColor: "rgba(255,255,255,0.1)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {/* Main image */}
          <Box
            component="img"
            src={data.gallery[selectedIndex]}
            alt=""
            sx={{
              width: "100%",
              maxHeight: "80vh",
              objectFit: "contain",
              borderRadius: "12px",
              transition: "0.4s ease",
            }}
          />

          {/* Thumbnails */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: 2,
              overflowX: "auto",
              justifyContent: "center",
              width: "100%",
              px: 2,
            }}
          >
            {data.gallery.map((image, index) => (
              <Box
                key={image}
                onClick={() => setSelectedIndex(index)}
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
                    selectedIndex === index
                      ? "3px solid #1FB1F9"
                      : "2px solid transparent",
                  opacity: selectedIndex === index ? 1 : 0.5,
                  transition: "opacity 0.3s",
                }}
              />
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default FullscreenGallery;
