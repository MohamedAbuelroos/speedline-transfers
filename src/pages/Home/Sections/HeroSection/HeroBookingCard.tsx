import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleIcon from "@mui/icons-material/People";
import { allLocations } from "../../../../data/locations";
import useLanguage from "../../../../hooks/useLanguage";
import { translations } from "../../../../i18n";

type Props = {
  form: any;

  loading: boolean;
  open: boolean;

  handleSearch: () => void;

  handleChange: (field: string, value: any) => void;
};

const HeroBookingCard = ({
  form,
  loading,
  open,
  handleSearch,
  handleChange,
}: Props) => {
  const lang = useLanguage();
  const translate = translations[lang];
  const isRtl = lang === "ar";
  return (
    <Paper
      elevation={0}
      sx={{
        p: {
          xs: 2.5,
          md: 3,
        },
        maxWidth: 430,

        ml: "auto",
        borderRadius: "26px",

        backgroundColor: "rgba(255,255,255,0.9)",

        backdropFilter: "blur(14px)",

        border: "1px solid rgba(255,255,255,0.4)",

        boxShadow: "0 18px 45px rgba(15,23,42,0.16)",
      }}
    >
      {/* TITLE */}
      <Typography
        sx={{
          fontWeight: 800,

          fontSize: isRtl
            ? {
                xs: 24,
                md: 38,
              }
            : {
                xs: 30,
                md: 35,
              },

          color: "#111827",

          mb: 1,
        }}
      >
        {translate.home.bookingCard.title}
      </Typography>

      <Typography
        sx={{
          color: "#6b7280",

          lineHeight: 1.8,
          fontSize: isRtl ? 20 : 18,
          mb: 3,
        }}
      >
        {translate.home.bookingCard.subtitle}
      </Typography>

      <Grid container spacing={2.5}>
        {/* FROM */}
        <Grid size={{ xs: 12 }}>
          <Autocomplete
            options={allLocations}
            getOptionLabel={(option) => option.label}
            onChange={(_e, value) => {
              handleChange("from", value?.label || "");
              handleChange("fromCity", value?.cityId || "");
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={translate.home.bookingCard.pickupLabel}
                fullWidth
                slotProps={{
                  ...params.slotProps,
                  input: {
                    ...params.slotProps?.input,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon color="primary" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            )}
          />
        </Grid>

        {/* TO */}
        <Grid size={{ xs: 12 }}>
          <Autocomplete
            options={allLocations}
            getOptionLabel={(option) => option.label}
            onChange={(_e, value) => {
              handleChange("to", value?.label || "");
              handleChange("toCity", value?.cityId || "");
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={translate.home.bookingCard.dropoffLabel}
                fullWidth
                slotProps={{
                  ...params.slotProps,
                  input: {
                    ...params.slotProps?.input,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon color="secondary" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            )}
          />
        </Grid>

        {/* PASSENGERS */}
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            type="number"
            label={translate.home.bookingCard.passengersLabel}
            value={form.passengers}
            onChange={(e) => handleChange("passengers", Number(e.target.value))}
            slotProps={{
              htmlInput: {
                min: 1,
                max: 24,
              },

              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PeopleIcon color="primary" />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid>

        {/* BUTTON */}
        <Grid size={{ xs: 12 }}>
          <Button
            fullWidth
            onClick={handleSearch}
            variant="contained"
            disabled={loading && !open}
            sx={{
              height: 52,

              borderRadius: "14px",

              textTransform: "none",

              fontSize: 16,

              fontWeight: 700,

              background: "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

              boxShadow: "0 10px 35px rgba(31,177,249,0.25)",
            }}
          >
            {loading && !open ? (
              <CircularProgress
                size={22}
                sx={{
                  color: "#fff",
                }}
              />
            ) : (
              translate.home.bookingCard.btn
            )}
          </Button>
        </Grid>
      </Grid>

      {/* FOOTER */}
      <Box
        sx={{
          display: "flex",

          justifyContent: "space-between",

          flexWrap: "wrap",

          gap: 1.5,

          mt: 3,
        }}
      >
        {[
          translate.home.bookingCard.feature1,
          translate.home.bookingCard.feature2,
          translate.home.bookingCard.feature3,
        ].map((item, index) => (
          <Typography
            key={index}
            sx={{
              color: "#6b7280",

              fontSize: isRtl ? 15 : 13,
            }}
          >
            ✓ {item}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
};

export default HeroBookingCard;
