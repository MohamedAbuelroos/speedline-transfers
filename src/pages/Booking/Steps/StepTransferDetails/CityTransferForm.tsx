import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import { allLocations } from "../../../../data/locations";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import useLanguage from "../../../../hooks/useLanguage";
import type { TransferFormWithStopsProps } from "../../../../utils/bookingTypes";

const CityTransferForm = ({
  bookingData,
  handleChange,
  stops,
  addStop,
  updateStop,
  removeStop,
}: TransferFormWithStopsProps) => {
  const lang = useLanguage();
  const isRTL = lang === "ar";
  return (
    <Grid container spacing={2}>
      {/* FROM */}
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

      {/* DATE */}
      <Grid size={{ xs: 12, md: 6 }}>
        <DatePicker
          label="Date of Journey"
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

      {/* TIME */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TimePicker
          label="Pickup Time"
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

      {/* STOP POINTS */}
      {stops.map((stop: string, index: number) => (
        <Grid key={index} size={{ xs: 12 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: isRTL ? "row-reverse" : "row",
              alignItems: "center",
              gap: 2,
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
                removeStop(index);
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
  );
};

export default CityTransferForm;
