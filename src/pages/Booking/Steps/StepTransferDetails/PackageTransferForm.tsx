import { Box, Button, Grid, TextField, Autocomplete } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { travelPackages } from "../../../../data/travelPackages";
import dayjs from "dayjs";

const PackageTransferForm = ({
  bookingData,
  handleChange,
  stops,
  addStop,
  updateStop,
  removeStop,
}: any) => {
  return (
    <Grid container spacing={2}>
      {/* PACKAGE NAME */}
      <Grid size={{ xs: 12 }}>
        <Autocomplete
          options={travelPackages}
          getOptionLabel={(option) => option.title}
          value={
            travelPackages.find(
              (pkg) => pkg.id === bookingData.packageData?.id,
            ) || null
          }
          onChange={(_e, value) => {
            handleChange("packageData", value);

            handleChange("from", value?.cities?.[0] || "");

            handleChange(
              "to",
              value?.cities?.[(value?.cities?.length || 1) - 1] || "",
            );

            handleChange("fromCity", value?.cities?.[0]?.toLowerCase() || "");

            handleChange(
              "toCity",
              value?.cities?.[
                (value?.cities?.length || 1) - 1
              ]?.toLowerCase() || "",
            );

            handleChange("price", value?.startingPrice || 0);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Select Package" fullWidth />
          )}
        />
      </Grid>

      {/* DATE */}
      <Grid size={{ xs: 12, md: 6 }}>
        <DatePicker
          label="Travel Date"
          value={bookingData.date ? dayjs(bookingData.date) : null}
          onChange={(newValue) => handleChange("date", newValue?.toISOString())}
          minDate={dayjs()}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Grid>

      {/* TIME */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TimePicker
          label="Pickup Time"
          value={bookingData.time ? dayjs(bookingData.time) : null}
          onChange={(newValue) => handleChange("time", newValue?.toISOString())}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Grid>

      {/* FLIGHT */}
      <Grid size={{ xs: 12 }}>
        <TextField
          fullWidth
          label="Flight Number (Optional)"
          value={bookingData.flightNumber || ""}
          onChange={(e) => handleChange("flightNumber", e.target.value)}
        />
      </Grid>

      {/* STOPS */}
      {stops.map((stop: string, index: number) => (
        <Grid key={index} size={{ xs: 12 }}>
          <Box
            sx={{
              display: "flex",
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

      {stops.length < 3 && (
        <Grid size={{ xs: 12 }}>
          <Button onClick={addStop}>+ Add Stop Point (+5 SAR)</Button>
        </Grid>
      )}
    </Grid>
  );
};

export default PackageTransferForm;
