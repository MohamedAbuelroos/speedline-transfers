import { Autocomplete, Collapse, FormControlLabel, Grid, Switch, TextField } from "@mui/material";
import { allLocations } from "../../../../data/locations";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const AirportTransferForm = ({bookingData, handleChange}:any) => {
  return (
    <Grid container spacing={2}>
      {/* FROM */}
      <>
        <Grid size={{ xs: 12, md: 6 }}>
          <Autocomplete
            options={allLocations}
            getOptionLabel={(option) => option.label}
            value={
              allLocations.find((loc) => loc.label === bookingData.from) || null
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
      </>

      {/* DATE */}
      <Grid size={{ xs: 12, md: 6 }}>
        <DatePicker
          label="Date of Journey"
          value={bookingData.date ? dayjs(bookingData.date) : null}
          onChange={(newValue) => handleChange("date", newValue?.toISOString())}
          minDate={dayjs()}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TimePicker
          label="Pickup Time"
          value={bookingData.time ? dayjs(bookingData.time) : null}
          onChange={(newValue) => handleChange("time", newValue?.toISOString())}
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
                bookingData.returnDate ? dayjs(bookingData.returnDate) : null
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
                bookingData.returnTime ? dayjs(bookingData.returnTime) : null
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
  );
};

export default AirportTransferForm;
