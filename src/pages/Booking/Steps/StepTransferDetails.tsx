import {
  Box,
  Typography,
  Button,
  Grid,
  FormControlLabel,
  TextField,
  Collapse,
  IconButton,
  Switch,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import { Autocomplete } from "@mui/material";
import { allLocations } from "../../../data/locations";

const StepTransferDetails = ({
  bookingData,
  setBookingData,
  onNext,
  onBack,
}: any) => {
  
  const [openOptional, setOpenOptional] = useState(true);
  const [stops, setStops] = useState<string[]>([]);

  const addStop = () => {
    if (stops.length < 3) {
      setStops([...stops, ""]);
    }
  };

  const updateStop = (index: number, value: string) => {
    const newStops = [...stops];
    newStops[index] = value;
    setStops(newStops);

    handleChange("stops", newStops);
  };

  const handleChange = (field: string, value: any) => {
    setBookingData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  // ✅ VALIDATION
  const isValid =
    bookingData.from &&
    bookingData.date &&
    bookingData.time &&
    (bookingData.type === "hourly" ? bookingData.hours : bookingData.to);

  return (
    <Box>
      <Typography sx={{ fontWeight: 600, mb: 3 }}>Transfer Details</Typography>
      {/* ////////////////////////////////////////////////// */}

      {bookingData.type === "airport" && (
        <Grid container spacing={2}>
          {/* FROM */}
          <>
            <Grid size={{ xs: 12, md: 6 }}>
              <Autocomplete
                options={allLocations}
                getOptionLabel={(option) => option.label}
                value={
                  allLocations.find((loc) => loc.label === bookingData.from) ||
                  null
                }
                onChange={(_e, value) => {
                  handleChange("from", value?.label || "");
                  handleChange("fromCity", value?.cityId || "");
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Pickup Location" fullWidth />
                )}
              />
            </Grid>

            {/* TO */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Autocomplete
                options={allLocations}
                getOptionLabel={(option) => option.label}
                value={
                  allLocations.find((loc) => loc.label === bookingData.to) ||
                  null
                }
                onChange={(_e, value) => {
                  handleChange("to", value?.label || "");
                  handleChange("toCity", value?.cityId || "");
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Dropoff Location" fullWidth />
                )}
              />
            </Grid>
          </>

          {/* DATE */}
          <Grid size={{ xs: 12, md: 6 }}>
            <DatePicker
              label="Date of Journey"
              value={bookingData.date ? dayjs(bookingData.date) : null}
              onChange={(newValue) =>
                handleChange("date", newValue?.toISOString())
              }
              minDate={dayjs()}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TimePicker
              label="Pickup Time"
              value={bookingData.time ? dayjs(bookingData.time) : null}
              onChange={(newValue) =>
                handleChange("time", newValue?.toISOString())
              }
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          {/* FLIGHT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Arrival Flight Number"
              onChange={(e) => handleChange("flightNumber", e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={bookingData.roundTrip || false}
                  onChange={(e) => {
                    handleChange("roundTrip", e.target.checked);

                    if (!e.target.checked) {
                      handleChange("returnDate", "");
                      handleChange("returnTime", "");
                    }
                  }}
                  color="primary"
                />
              }
              label="Round Trip"
            />
          </Grid>

          <Collapse in={bookingData.roundTrip} timeout={300}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <DatePicker
                  label="Return Date"
                  value={
                    bookingData.returnDate
                      ? dayjs(bookingData.returnDate)
                      : null
                  }
                  minDate={dayjs(bookingData.date)}
                  onChange={(newValue) =>
                    handleChange("returnDate", newValue?.toISOString())
                  }
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TimePicker
                  label="Return Time"
                  value={
                    bookingData.returnTime
                      ? dayjs(bookingData.returnTime)
                      : null
                  }
                  onChange={(newValue) =>
                    handleChange("returnTime", newValue?.toISOString())
                  }
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>
            </Grid>
          </Collapse>
        </Grid>
      )}
      {bookingData.type === "city" && (
        <Grid container spacing={2}>
          {/* FROM */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Autocomplete
              options={allLocations}
              getOptionLabel={(option) => option.label}
              value={
                allLocations.find((loc) => loc.label === bookingData.from) ||
                null
              }
              onChange={(_e, value) => {
                handleChange("from", value?.label || "");
                handleChange("fromCity", value?.cityId || "");
              }}
              renderInput={(params) => (
                <TextField {...params} label="Pickup Location" fullWidth />
              )}
            />
          </Grid>

          {/* TO */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Autocomplete
              options={allLocations}
              getOptionLabel={(option) => option.label}
              value={
                allLocations.find((loc) => loc.label === bookingData.to) || null
              }
              onChange={(_e, value) => {
                handleChange("to", value?.label || "");
                handleChange("toCity", value?.cityId || "");
              }}
              renderInput={(params) => (
                <TextField {...params} label="Dropoff Location" fullWidth />
              )}
            />
          </Grid>

          {/* DATE */}
          <Grid size={{ xs: 12, md: 6 }}>
            <DatePicker
              label="Date of Journey"
              value={bookingData.date ? dayjs(bookingData.date) : null}
              onChange={(newValue) =>
                handleChange("date", newValue?.toISOString())
              }
              minDate={dayjs()}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          {/* TIME */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TimePicker
              label="Pickup Time"
              value={bookingData.time ? dayjs(bookingData.time) : null}
              onChange={(newValue) =>
                handleChange("time", newValue?.toISOString())
              }
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          {/* STOP POINTS */}
          {stops.map((stop, index) => (
            <Grid key={index} size={{ xs: 12 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <TextField
                  fullWidth
                  label={`Stop Point ${index + 1}`}
                  value={stop}
                  onChange={(e) => updateStop(index, e.target.value)}
                />

                <Button
                  color="error"
                  onClick={() => {
                    const newStops = stops.filter((_, i) => i !== index);
                    setStops(newStops);
                    handleChange("stops", newStops);
                  }}
                >
                  Remove
                </Button>
              </Box>
            </Grid>
          ))}

          {/* ADD STOP */}
          {stops.length < 3 && (
            <Grid size={{ xs: 12 }}>
              <Button onClick={addStop}>+ Add Stop Point</Button>
            </Grid>
          )}
        </Grid>
      )}
      {bookingData.type === "hourly" && (
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Autocomplete
              options={allLocations}
              getOptionLabel={(option) => option.label}
              value={
                allLocations.find((loc) => loc.label === bookingData.from) ||
                null
              }
              onChange={(_e, value) => {
                handleChange("from", value?.label || "");
                handleChange("fromCity", value?.cityId || "");
              }}
              renderInput={(params) => (
                <TextField {...params} label="Pickup Location" fullWidth />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <DatePicker
              label="Date"
              value={bookingData.date ? dayjs(bookingData.date) : null}
              onChange={(newValue) =>
                handleChange("date", newValue?.toISOString())
              }
              minDate={dayjs()}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TimePicker
              label="Start Time"
              value={bookingData.time ? dayjs(bookingData.time) : null}
              onChange={(newValue) =>
                handleChange("time", newValue?.toISOString())
              }
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              type="number"
              label="Number of Hours"
              fullWidth
              value={bookingData.hours || ""}
              onChange={(e) => handleChange("hours", Number(e.target.value))}
            />
          </Grid>
        </Grid>
      )}
      {/* /////////////////////////////////////////////////// */}

      {/* OPTIONAL SECTION */}
      <Box sx={{ mt: 4 }}>
        <Box
          sx={{
            cursor: "pointer",
            display: "flex",
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
                  onChange={(e) =>
                    handleChange("dropoffDetails", e.target.value)
                  }
                />
              </Grid>
            )}
          </Grid>
        </Collapse>
      </Box>
      {/* ACTIONS */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button onClick={onBack}>Back</Button>

        <Button
          variant="contained"
          disabled={!isValid}
          onClick={onNext}
          sx={{
            backgroundColor: "#1FB1F9",
            borderRadius: "999px",
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default StepTransferDetails;
