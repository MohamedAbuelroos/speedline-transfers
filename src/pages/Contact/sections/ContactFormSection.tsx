import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

const ContactFormSection = () => {
  return (
    <Box
      sx={{
        py: {
          xs: 7,
          md: 10,
        },

        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{
            xs: 5,
            md: 8,
          }}
          sx={{
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                fontWeight: 900,

                color: "#111827",

                lineHeight: 1.2,

                mb: 3,

                fontSize: {
                  xs: 36,
                  md: 52,
                },
              }}
            >
              Send Us a Message
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",

                lineHeight: 1.9,
              }}
            >
              Have questions about our services or need a custom transportation
              solution? Our team is here to help you anytime.
            </Typography>
          </Grid>

          {/* RIGHT */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                p: {
                  xs: 3,
                  md: 5,
                },

                borderRadius: "36px",

                background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",

                border: "1px solid rgba(226,232,240,0.7)",

                boxShadow: "0 25px 60px rgba(15,23,42,0.06)",
              }}
            >
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Full Name" />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Phone Number" />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth label="Email Address" />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField select fullWidth label="Service Type">
                    <MenuItem value="airport">Airport Transfer</MenuItem>

                    <MenuItem value="city">City Transfer</MenuItem>

                    <MenuItem value="hourly">Hourly Chauffeur</MenuItem>

                    <MenuItem value="vip">VIP Service</MenuItem>
                    <MenuItem value="corporate">Corporate Travel</MenuItem>
                    <MenuItem value="events">Event Transportation</MenuItem>
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth multiline rows={5} label="Message" />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      borderRadius: "999px",

                      py: 1.7,

                      textTransform: "none",

                      fontWeight: 700,

                      fontSize: 16,

                      background:
                        "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

                      boxShadow: "0 15px 35px rgba(31,177,249,0.22)",
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactFormSection;
