import { Autocomplete, Grid, TextField } from "@mui/material";
import React from "react";
import { allLocations } from "../../../../data/locations";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const HourlyTransferForm = ({ bookingData, handleChange }: any) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
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

      <Grid size={{ xs: 12, md: 6 }}>
        <DatePicker
          label="Date"
          value={bookingData.date ? dayjs(bookingData.date) : null}
          onChange={(newValue) => handleChange("date", newValue?.toISOString())}
          minDate={dayjs()}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TimePicker
          label="Start Time"
          value={bookingData.time ? dayjs(bookingData.time) : null}
          onChange={(newValue) => handleChange("time", newValue?.toISOString())}
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
  );
};

export default HourlyTransferForm;
