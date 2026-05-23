import { Autocomplete, Grid, TextField } from "@mui/material";
import { allLocations } from "../../../../data/locations";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import type { TransferFormProps } from "../../../../utils/bookingTypes";

const HourlyTransferForm = ({
  bookingData,
  handleChange,
}: TransferFormProps) => {
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
          onChange={(newValue) =>
            handleChange(
              "date",
              newValue ? dayjs(newValue).format("YYYY-MM-DD") : "",
            )
          }
          minDate={dayjs()}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TimePicker
          label="Start Time"
          value={
            bookingData.time ? dayjs(`2000-01-01 ${bookingData.time}`) : null
          }
          onChange={(newValue) =>
            handleChange(
              "time",
              newValue ? dayjs(newValue).format("HH:mm") : "",
            )
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
  );
};

export default HourlyTransferForm;
