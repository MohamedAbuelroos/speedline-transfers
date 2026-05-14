import {
  Box,
  Collapse,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import useLanguage from "../../../../hooks/useLanguage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const OptionalDetails = ({
  bookingData,
  openOptional,
  setOpenOptional,
  handleChange,
}: any) => {
  const lang = useLanguage();
  const isRTL = lang === "ar";
  return (
    <Box sx={{ mt: 4 }}>
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          flexDirection: isRTL ? "row-reverse" : "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => setOpenOptional((prev) => !prev)}
      >
        <Typography sx={{ fontWeight: 600 }}>Optional Details</Typography>

        <IconButton
          size="small"
          sx={{
            transform: openOptional ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s",
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>

      <Collapse in={openOptional}>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Specific Pickup Location"
              onChange={(e) => handleChange("pickupDetails", e.target.value)}
            />
          </Grid>

          {bookingData.type !== "hourly" && (
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Specific Dropoff Location"
                onChange={(e) => handleChange("dropoffDetails", e.target.value)}
              />
            </Grid>
          )}
        </Grid>
      </Collapse>
    </Box>
  );
};

export default OptionalDetails;
